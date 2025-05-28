import { useState, useImperativeHandle, forwardRef } from 'react';

interface Stats {
  subscriberCount: string | number;
  lastSent: string;
  emailsSent: string | number;
}

interface StatsSectionProps {
  backendUrl: string | undefined;
  onShowMessage: (type: 'success' | 'error', content: string) => void;
  onStatsRefresh?: () => void;
}

export interface StatsSectionRef {
  loadStats: () => void;
  updateStats: (subscriberCount?: number) => void;
}

const StatsSection = forwardRef<StatsSectionRef, StatsSectionProps>(({ 
  backendUrl, 
  onShowMessage, 
  onStatsRefresh 
}, ref) => {
  const [stats, setStats] = useState<Stats>({
    subscriberCount: 'Click Refresh',
    lastSent: 'Click Refresh',
    emailsSent: 'Click Refresh'
  });
  const [isLoadingStats, setIsLoadingStats] = useState<boolean>(false);

  // Load stats from backend
  const loadStats = async () => {
    setIsLoadingStats(true);
    try {
      if (!backendUrl) {
        onShowMessage('error', 'Backend URL not configured. Add NEXT_PUBLIC_API_BASE_URL to your .env.local file.');
        setStats({
          subscriberCount: 'No Backend',
          lastSent: 'No Backend',
          emailsSent: 'No Backend'
        });
        return;
      }

      const response = await fetch(`${backendUrl}/api/newsletter/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        
        setStats({
          subscriberCount: data.subscriberCount || 0,
          lastSent: data.lastSent || 'Never',
          emailsSent: data.emailsSentToday || 0  // Note: backend sends 'emailsSentToday'
        });
        
        onShowMessage('success', 'Stats refreshed successfully!');
        
        // Call optional callback for external updates
        if (onStatsRefresh) {
          onStatsRefresh();
        }
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        console.error('Stats API error:', response.status, errorData);
        
        onShowMessage('error', `Failed to fetch stats: ${errorData.message || 'Server error'}`);
        setStats({
          subscriberCount: 'Error',
          lastSent: 'Error',
          emailsSent: 'Error'
        });
      }
    } catch (error) {
      console.error('Error loading stats:', error);
      onShowMessage('error', 'Network error. Please check your backend connection.');
      setStats({
        subscriberCount: 'Network Error',
        lastSent: 'Network Error',
        emailsSent: 'Network Error'
      });
    } finally {
      setIsLoadingStats(false);
    }
  };

  // Update stats after newsletter send (called from parent)
  const updateStats = (subscriberCount?: number) => {
    setStats(prevStats => ({
      subscriberCount: subscriberCount || prevStats.subscriberCount,
      lastSent: 'Just now',
      emailsSent: typeof prevStats.emailsSent === 'number' 
        ? prevStats.emailsSent + (subscriberCount || 0)
        : subscriberCount || 0
    }));

    // Auto-refresh stats after a delay
    setTimeout(() => {
      loadStats();
    }, 1000);
  };

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    loadStats,
    updateStats
  }));

  return (
    <div className="mt-12">
      {/* Stats Header with Refresh Button */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-green-800">📊 Newsletter Statistics</h2>
          <p className="text-sm text-gray-600 mt-1">
            {typeof stats.subscriberCount === 'number' && stats.subscriberCount >= 0 
              ? `Last updated: ${new Date().toLocaleTimeString()}`
              : 'Click refresh to get the latest data from your backend'
            }
          </p>
        </div>
        <button
          onClick={loadStats}
          disabled={isLoadingStats}
          className="px-4 py-2 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg hover:from-green-800 hover:to-green-700 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium flex items-center gap-2 text-sm"
        >
          {isLoadingStats ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              Loading...
            </>
          ) : (
            <>
              🔄 Refresh Stats
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className={`text-3xl font-bold mb-2 ${
            isLoadingStats 
              ? 'text-gray-400' 
              : typeof stats.subscriberCount === 'number' || !isNaN(Number(stats.subscriberCount))
              ? 'text-green-700'
              : 'text-gray-400 text-sm'
          }`}>
            {isLoadingStats ? (
              <div className="animate-pulse bg-gray-200 h-8 w-16 mx-auto rounded"></div>
            ) : (
              stats.subscriberCount
            )}
          </div>
          <div className="text-gray-600 text-sm">Total Subscribers</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className={`text-3xl font-bold mb-2 ${
            isLoadingStats 
              ? 'text-gray-400' 
              : stats.lastSent === 'Never' || stats.lastSent === 'Just now' || stats.lastSent.includes('ago') || stats.lastSent === 'Today'
              ? 'text-green-700'
              : 'text-gray-400 text-sm'
          }`}>
            {isLoadingStats ? (
              <div className="animate-pulse bg-gray-200 h-8 w-20 mx-auto rounded"></div>
            ) : (
              stats.lastSent
            )}
          </div>
          <div className="text-gray-600 text-sm">Last Newsletter Sent</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className={`text-3xl font-bold mb-2 ${
            isLoadingStats 
              ? 'text-gray-400' 
              : typeof stats.emailsSent === 'number' || !isNaN(Number(stats.emailsSent))
              ? 'text-green-700'
              : 'text-gray-400 text-sm'
          }`}>
            {isLoadingStats ? (
              <div className="animate-pulse bg-gray-200 h-8 w-12 mx-auto rounded"></div>
            ) : (
              stats.emailsSent
            )}
          </div>
          <div className="text-gray-600 text-sm">Emails Sent Today</div>
        </div>
      </div>
    </div>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;