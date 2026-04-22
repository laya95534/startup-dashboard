import { teamData } from "../data/mockData";

function Team() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Team Management
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>

              {/* Status badge */}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  member.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {member.status}
              </span>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Progress</span>
                <span>{member.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${member.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;