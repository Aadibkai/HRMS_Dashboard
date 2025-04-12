import HRAnalytics from '@/components/dashboard/HRAnalytics';
import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-6">HRMS Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Employees */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Total Employees</h2>
            <p className="text-2xl font-bold text-blue-600">152</p>
          </div>

          {/* Open Positions */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Open Positions</h2>
            <p className="text-2xl font-bold text-purple-600">7</p>
          </div>

          {/* Upcoming Interviews */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Upcoming Interviews</h2>
            <p className="text-2xl font-bold text-yellow-500">5</p>
          </div>

          {/* Onboarding in Progress */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Onboarding in Progress</h2>
            <p className="text-2xl font-bold text-green-500">3</p>
          </div>

          {/* Employees on Leave */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Employees on Leave</h2>
            <p className="text-2xl font-bold text-red-500">4</p>
          </div>

          {/* Monthly Attendance */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Avg. Attendance Rate</h2>
            <p className="text-2xl font-bold text-teal-600">92%</p>
          </div>
        </div>

        <HRAnalytics />
      </main>
    </div>
  );
}

export default Dashboard;
          