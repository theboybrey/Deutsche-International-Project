import { useState } from 'react';
import Sidebar from './Sidebar';
import PersonalInfo from './PersonalInfo';
import ParentalInfo from './ParentalInfo';
import SchoolLeavingInfo from './SchoolLeavingInfo';
import EmergencyInfo from './EmergencyInfo';
import ApplicationPreview from './ApplicationPreview';

const EnrollmentPage = () => {
  const [activeTab, setActiveTab] = useState('personalInfo');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-white flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold">School Name</h1>
        <div className="flex items-center">
          <span className="mr-4">
            <i className="fas fa-bell"></i>
          </span>
          <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-lg">JD</span>
          </div>
        </div>
      </header>
      <div className="flex-1 flex">
        <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />
        <div className="flex-1 p-4">
          {activeTab === 'personalInfo' && <PersonalInfo />}
          {activeTab === 'parentalInfo' && <ParentalInfo />}
          {activeTab === 'schoolLeavingInfo' && <SchoolLeavingInfo />}
          {activeTab === 'emergencyInfo' && <EmergencyInfo />}
          {activeTab === 'applicationPreview' && <ApplicationPreview />}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;
