import Card from "../components/Card";
import { dashboardData } from "../data/mockData";

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 flex-1 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Founder Dashboard</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardData.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>

      {/* 🚀 Founder Insight Panel */}
      <div className="mt-8 bg-white p-5 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-3">Founder Insights</h3>

        <ul className="space-y-2 text-gray-600">
          <li>⚠️ 2 tasks are delayed</li>
          <li>📉 Hiring pipeline is slow this week</li>
          <li>📈 Revenue increased by 12%</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;