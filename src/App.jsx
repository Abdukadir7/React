import { useState } from "react";
// I'm using Lucide icons for that professional look, but you can use simple text arrows too
import { LayoutDashboard, ChevronRight, ChevronDown } from "lucide-react";

function App() {
  const [dashboardOpen, setDashboardOpen] = useState(true);

  return (
    <div className="flex font-sans">
      <div className="bg-[#0280ff] w-64 h-screen text-gray-300">
        <div className="p-5 text-white font-bold text-xl border-b border-blue-900">
          School<span className="text-white text-2xl">.</span>
        </div>

        <ul className="mt-2">
          <li>
            <button 
              onClick={() => setDashboardOpen(!dashboardOpen)}
              className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${dashboardOpen ? 'bg-gray-500 text-white' : ''}`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard size={18} className="text-white" />
                <span className="text-sm font-semibold">Dashboard</span>
              </div>
              {dashboardOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>

            {/* Sub-menu - Conditional Rendering */}
            {dashboardOpen && (
              <ul className="bg-gray-500 py-2">
                <li>
                  <a href="#" className="flex items-center gap-2 px-12 py-2 text-sm text-white hover:bg-gray-300 hover:text-black transition-colors">
                    <ChevronRight size={12} /> Admin
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 px-12 py-2 text-sm text-white hover:bg-gray-300 hover:text-black transition-colors">
                    <ChevronRight size={12} /> Student
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 px-12 py-2 text-sm text-white hover:bg-gray-300 hover:text-black transition-colors">
                    <ChevronRight size={12} /> Parents
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Simple Link Item */}
          <li>
            <a href="#" className="flex items-center gap-3 px-5 py-4 text-sm font-semibold hover:bg-[#ffffff] hover:bg-gray-500 transition-colors">
              <ChevronRight size={18} />
              Students
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-10">
        <h1 className="text-3xl font-bold text-gray-800">Main Content Area</h1>
      </div>
    </div>
  );
}

export default App;