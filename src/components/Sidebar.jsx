function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-gray-900 text-white p-5 h-full">
      <h2 className="text-2xl font-bold mb-8">Startup</h2>

      <ul className="space-y-4">
        <li
          onClick={() => setPage("dashboard")}
          className="cursor-pointer hover:text-gray-300"
        >
          Dashboard
        </li>

        <li
          onClick={() => {
            console.log("Team clicked");
            setPage("team");
          }}
          className="cursor-pointer hover:text-gray-300"
        >
          Team
        </li>

        <li
          onClick={() => setPage("candidates")}
          className="cursor-pointer hover:text-gray-300"
        >
          Candidates
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;