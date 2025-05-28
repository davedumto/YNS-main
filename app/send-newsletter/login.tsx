import { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';

interface LoginComponentProps {
  onLoginSuccess: () => void;
  adminPassword: string;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLoginSuccess, adminPassword }) => {
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    await new Promise(resolve => setTimeout(resolve, 800));

    if (loginPassword === adminPassword) {
      setLoginPassword('');
      onLoginSuccess();
    } else {
      setLoginError('Invalid password. Please try again.');
      setLoginPassword('');
    }
    
    setIsLoggingIn(false);
  };

  return (
    <>
      <Head>
        <title>Admin Login - Newsletter CMS</title>
        <meta name="description" content="Admin login for Newsletter CMS" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-green-100 p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-700 to-green-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h1>
            <p className="text-gray-600">Enter password to access Newsletter CMS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                placeholder="Enter admin password"
                required
                disabled={isLoggingIn}
              />
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn || !loginPassword.trim()}
              className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-3 px-4 rounded-lg hover:from-green-800 hover:to-green-700 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium flex items-center justify-center gap-2"
            >
              {isLoggingIn ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Verifying...
                </>
              ) : (
                <>
                  🔓 Access CMS
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Young & Skilled Initiative - Newsletter Management System
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;