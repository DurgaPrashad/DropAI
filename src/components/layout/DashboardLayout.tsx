
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileSidebar from './MobileSidebar';

const DashboardLayout: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MobileSidebar isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      
      <div className="flex flex-col flex-1 md:pl-64">
        <Header toggleMobileSidebar={toggleMobileSidebar} />
        <main className="flex-1 px-4 sm:px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
