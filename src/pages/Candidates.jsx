import { useState } from "react";
import { candidateData } from "../data/mockData";

function Candidates() {
  const [search, setSearch] = useState("");

  const filteredCandidates = candidateData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Candidate Pipeline
      </h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search candidates..."
        className="mb-4 p-2 border rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50 border-b text-gray-600 text-sm">
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map((c, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-800">
                    {c.name}
                  </td>
                  <td className="p-4 text-gray-500">{c.role}</td>

                  {/* Status Badge */}
                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        c.status === "Hired"
                          ? "bg-green-100 text-green-600"
                          : c.status === "Interviewed"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="p-4 text-center text-gray-400"
                >
                  No candidates found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Candidates;