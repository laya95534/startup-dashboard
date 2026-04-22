import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Candidates from "./pages/Candidates";

function App() {
  const [page, setPage] = useState("dashboard");
  console.log("Current page:", page);
  const renderPage = () => {
    if (page === "team") return <Team />;
    if (page === "candidates") return <Candidates />;
    return <Dashboard />;
  };

  return (
    <div className="flex h-screen">
      <Sidebar setPage={setPage} />

      <div className="flex-1 flex flex-col">
        <Navbar />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;