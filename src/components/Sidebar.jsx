import { LayoutDashboard, Users, UserPlus } from "lucide-react";

function Sidebar({ setPage, page }) {
  return (
    <div className="w-64 bg-gray-900 text-white p-5 h-full">
      <h2 className="text-2xl font-bold mb-8">Startup</h2>

      <ul className="space-y-4">
        {/* Dashboard */}
        <li
          onClick={() => setPage("dashboard")}
          className={`cursor-pointer flex items-center gap-2 p-2 rounded transition ${
            page === "dashboard"
              ? "bg-gray-700 text-white"
              : "hover:text-gray-300"
          }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </li>

        {/* Team */}
        <li
          onClick={() => setPage("team")}
          className={`cursor-pointer flex items-center gap-2 p-2 rounded transition ${
            page === "team"
              ? "bg-gray-700 text-white"
              : "hover:text-gray-300"
          }`}
        >
          <Users size={18} />
          Team
        </li>

        {/* Candidates */}
        <li
          onClick={() => setPage("candidates")}
          className={`cursor-pointer flex items-center gap-2 p-2 rounded transition ${
            page === "candidates"
              ? "bg-gray-700 text-white"
              : "hover:text-gray-300"
          }`}
        >
          <UserPlus size={18} />
          Candidates
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;