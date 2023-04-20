import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleMobileSidebar = () => {
    setShowMobileSidebar((prev) => !prev);
  };

  return (
    <>
      <Navbar
        showMobileSidebar={showMobileSidebar}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <div className="flex  h-[100vh] relative ">
        <Sidebar />
        <Dashboard
          showMobileSidebar={showMobileSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />
      </div>
    </>
  );
}

export default App;
