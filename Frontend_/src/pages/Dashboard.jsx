const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Total Patients</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Today's Appointments</h2>
            <p className="text-3xl font-bold mt-2">18</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Pending Reports</h2>
            <p className="text-3xl font-bold mt-2">6</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10">Recent Appointments</h2>
      </div>
    </div>
  );
};

export default Dashboard;
