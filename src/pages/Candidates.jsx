import { candidateData } from "../data/mockData";

function Candidates() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Candidate Pipeline</h2>

      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="text-left border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {candidateData.map((c, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.role}</td>
              <td className="p-3">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Candidates;