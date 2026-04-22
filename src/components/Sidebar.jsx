import { LayoutDashboard, Users, UserPlus } from "lucide-react";

function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-gray-900 text-white p-5 h-full">
      <h2 className="text-2xl font-bold mb-8">Startup</h2>

      <ul className="space-y-4">
        <li
          onClick={() => setPage("dashboard")}
          className="cursor-pointer flex items-center gap-2 hover:text-gray-300"
        >
          <LayoutDashboard size={18} /> Dashboard
        </li>

        <li
          onClick={() => setPage("team")}
          className="cursor-pointer flex items-center gap-2 hover:text-gray-300"
        >
          <Users size={18} /> Team
        </li>

        <li
          onClick={() => setPage("candidates")}
          className="cursor-pointer flex items-center gap-2 hover:text-gray-300"
        >
          <UserPlus size={18} /> Candidates
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;