'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { Eye, Mail, Building, Calendar, User, MessageSquare, CheckCircle, Clock, AlertCircle, LogOut } from 'lucide-react';
import LoginComponent from '../send-newsletter/login'; // Import the LoginComponent

// Type definitions
interface ContactMessage {
  _id: string;
  fullName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'responded';
  createdAt: string;
}

interface Pagination {
  current: number;
  pages: number;
  total: number;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  pagination?: Pagination;
}

const ContactAdmin = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Existing state
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pages: 1,
    total: 0
  });
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [updating, setUpdating] = useState<boolean>(false);

  // Admin password - you can move this to environment variables
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

  // Check for existing session on component mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem('isAdminAuthenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login success
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAdminAuthenticated', 'true');
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuthenticated');
    setMessages([]);
    setSelectedMessage(null);
    setStatusFilter('');
    setError('');
  };

  // Fetch messages from API
  const fetchMessages = useCallback(async (page: number = 1, status: string = '') => {
    if (!isAuthenticated) return;
    
    setLoading(true);
    setError('');
    
    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', '10');
      if (status) params.append('status', status);

      const response = await fetch(`${API_BASE_URL}/api/contact/admin?${params}`);
      const data: ApiResponse<ContactMessage[]> = await response.json();

      if (data.success && data.data) {
        setMessages(data.data);
        if (data.pagination) {
          setPagination(data.pagination);
        }
      } else {
        setError(data.message || 'Failed to fetch messages');
      }
    } catch (err) {
      setError('Network error. Please check if the server is running.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL, isAuthenticated]);

  // Fetch single message details
  const fetchMessageDetails = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/admin/${id}`);
      const data: ApiResponse<ContactMessage> = await response.json();

      if (data.success && data.data) {
        setSelectedMessage(data.data);
      } else {
        setError(data.message || 'Failed to fetch message details');
      }
    } catch (err) {
      setError('Failed to fetch message details');
      console.error('Fetch details error:', err);
    }
  };

  // Update message status
  const updateMessageStatus = async (id: string, newStatus: 'unread' | 'read' | 'responded') => {
    setUpdating(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/admin/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      });

      const data: ApiResponse<ContactMessage> = await response.json();

      if (data.success) {
        // Update the message in the list
        setMessages(messages.map(msg => 
          msg._id === id ? { ...msg, status: newStatus } : msg
        ));
        
        // Update selected message if it's the same one
        if (selectedMessage && selectedMessage._id === id) {
          setSelectedMessage({ ...selectedMessage, status: newStatus });
        }
      } else {
        setError(data.message || 'Failed to update status');
      }
    } catch (err) {
      setError('Failed to update status');
      console.error('Update status error:', err);
    } finally {
      setUpdating(false);
    }
  };

  // Load messages on component mount and when filters change
  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages(1, statusFilter);
    }
  }, [statusFilter, fetchMessages, isAuthenticated]);

  const handlePageChange = (newPage: number) => {
    fetchMessages(newPage, statusFilter);
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'responded': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string): JSX.Element => {
    switch (status) {
      case 'unread': return <AlertCircle className="w-4 h-4" />;
      case 'read': return <Clock className="w-4 h-4" />;
      case 'responded': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Show login component if not authenticated
  if (!isAuthenticated) {
    return (
      <LoginComponent 
        onLoginSuccess={handleLoginSuccess}
        adminPassword={ADMIN_PASSWORD}
      />
    );
  }

  if (loading && messages.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Logout */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Messages</h1>
            <p className="text-gray-600">Manage and respond to customer inquiries</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
            <button 
              onClick={() => setError('')}
              className="float-right font-bold"
            >
              ×
            </button>
          </div>
        )}

        {/* Filters and Stats */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold">Filter Messages</h2>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white"
              >
                <option value="">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="responded">Responded</option>
              </select>
            </div>
            
            <div className="text-sm text-gray-600">
              Total: {pagination.total} messages
            </div>
          </div>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Messages List */}
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No messages found</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message._id}
                  className={`bg-white rounded-lg shadow-sm border p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedMessage?._id === message._id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => fetchMessageDetails(message._id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                        {getStatusIcon(message.status)}
                        {message.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(message.createdAt)}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                    {message.subject}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {message.fullName}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {message.email}
                    </span>
                  </div>
                  
                  {message.company && (
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                      <Building className="w-3 h-3" />
                      {message.company}
                    </div>
                  )}
                  
                  <p className="text-gray-700 text-sm line-clamp-2">
                    {message.message}
                  </p>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-blue-600 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Click to view details
                    </span>
                  </div>
                </div>
              ))
            )}

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="flex justify-center items-center gap-2 pt-4">
                <button
                  onClick={() => handlePageChange(pagination.current - 1)}
                  disabled={pagination.current === 1 || loading}
                  className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <span className="px-4 py-2 text-sm text-gray-600">
                  Page {pagination.current} of {pagination.pages}
                </span>
                
                <button
                  onClick={() => handlePageChange(pagination.current + 1)}
                  disabled={pagination.current === pagination.pages || loading}
                  className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Message Details Panel */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            {selectedMessage ? (
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Message Details
                    </h2>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedMessage.status)}`}>
                      {getStatusIcon(selectedMessage.status)}
                      {selectedMessage.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Subject</label>
                      <p className="text-gray-900">{selectedMessage.subject}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Name</label>
                        <p className="text-gray-900">{selectedMessage.fullName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Email</label>
                        <p className="text-gray-900">{selectedMessage.email}</p>
                      </div>
                    </div>
                    
                    {selectedMessage.company && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Company</label>
                        <p className="text-gray-900">{selectedMessage.company}</p>
                      </div>
                    )}
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Submitted</label>
                      <p className="text-gray-900">{formatDate(selectedMessage.createdAt)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Message</label>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <label className="text-sm font-medium text-gray-500 mb-3 block">Update Status</label>
                    <div className="flex gap-2">
                      {(['unread', 'read', 'responded'] as const).map((status) => (
                        <button
                          key={status}
                          onClick={() => updateMessageStatus(selectedMessage._id, status)}
                          disabled={updating || selectedMessage.status === status}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            selectedMessage.status === status
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              : 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
                          }`}
                        >
                          {updating ? 'Updating...' : `Mark as ${status}`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdmin;