import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Add your logo or site name here */}
                <span className="text-white font-bold text-lg">Admin Dashboard</span>
              </div>
              <div className="hidden md:block">
                {/* Add navigation links */}
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Analytics</a>
                  {/* Add more navigation links as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {/* Add your dashboard content here */}
              <h2 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard</h2>
              <p className="text-gray-600">You can add your dashboard components and functionality here.</p>
              {/* Example components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {/* Course management */}
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Courses</h3>
                  <p className="text-gray-600">Manage courses, create new courses, view course analytics.</p>
                </div>
                {/* User management */}
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Users</h3>
                  <p className="text-gray-600">Manage users, roles, permissions, and user analytics.</p>
                </div>
                {/* Analytics */}
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                  <p className="text-gray-600">View overall platform analytics, course performance, user engagement.</p>
                </div>
                {/* Settings */}
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Settings</h3>
                  <p className="text-gray-600">Manage platform settings, configurations, and integrations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;