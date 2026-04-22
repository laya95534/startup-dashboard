import { teamData } from "../data/mockData";

function Team() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Team Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamData.map((member, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>

            <p className="mt-2 text-sm">
              Status: <span className="font-medium">{member.status}</span>
            </p>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${member.progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1">
                {member.progress}% completed
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;