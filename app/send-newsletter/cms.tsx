'use client'
import { useState, useRef } from 'react';
import Head from 'next/head';
import LoginComponent from './login';
import NewsletterEditor from './editor';
import StatsSection, { StatsSectionRef } from './stats';


interface Message {
  type: 'success' | 'error' | '';
  content: string;
}

const NewsletterCMS: React.FC = () => {
  
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ''; 
  const BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>({ type: '', content: '' });

  
  const statsSectionRef = useRef<StatsSectionRef>(null);

  
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setTimeout(() => {
      statsSectionRef.current?.loadStats();
    }, 500);
  };

  
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  
  const showMessage = (type: 'success' | 'error', content: string) => {
    setMessage({ type, content });
    setTimeout(() => {
      setMessage({ type: '', content: '' });
    }, 5000);
  };

  
  const handleStatsUpdate = (subscriberCount?: number) => {
    statsSectionRef.current?.updateStats(subscriberCount);
    
    
    setTimeout(() => {
      showMessage('success', 'Newsletter sent! Stats will refresh automatically.');
    }, 2000);
  };

  if (!isAuthenticated) {
    return (
      <LoginComponent 
        onLoginSuccess={handleLoginSuccess}
        adminPassword={ADMIN_PASSWORD}
      />
    );
  }

  return (
    <>
      <Head>
        <title>Newsletter CMS - Young & Skilled Initiative</title>
        <meta name="description" content="Create and manage your Young & Skilled Initiative newsletters" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              📧 Newsletter CMS
            </h1>
            <p className="text-xl text-gray-600">
              Create and manage your Young & Skilled Initiative newsletters
            </p>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="absolute top-0 right-0 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>

          {/* Newsletter Editor Component */}
          <NewsletterEditor
            backendUrl={BACKEND_URL}
            onStatsUpdate={handleStatsUpdate}
            onShowMessage={showMessage}
            message={message}
          />

          {/* Stats Section Component */}
          <StatsSection
            ref={statsSectionRef}
            backendUrl={BACKEND_URL}
            onShowMessage={showMessage}
          />
        </div>
      </div>
    </>
  );
};

export default NewsletterCMS;