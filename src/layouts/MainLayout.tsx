import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const MainLayout: React.FC = () => {
  const location = useLocation();
  
  // Function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Cookie className="h-8 w-8 text-[#00FFD1]" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#00FFD1] to-[#FF3CAC] bg-clip-text text-transparent">
                  SaaSy Cookies
                </span>
              </Link>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive('/') 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-[#00FFD1]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/tools" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive('/tools') 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-[#FF3CAC]'
                }`}
              >
                Tools
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive('/about') 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-[#00FFD1]'
                }`}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} SaaSy Cookies. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00FFD1] transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3CAC] transition-colors duration-300">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
