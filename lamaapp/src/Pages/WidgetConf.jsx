import React, { useState } from 'react'
import General from '../components/General';
import Display from '../components/Display';

function WidgetConf() {
  const [activeSection, setActiveSection] = useState('general');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return <General/>;
      case 'display':
        return <Display/>;
      case 'advanced':
        return <div>Advanced Content Goes Here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="">
       <h1 className="text-[30px] mb-4 text-[#7E22CE] font-bold">
         Configuration
        </h1>
      <div className="w-full border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-row -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <a
              href="#"
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeSection === 'general'
                  ? 'border-logo-color text-logo-color  dark:border-logo-color dark:text-logo-color'
                  : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
              }`}
              onClick={() => handleSectionClick('general')}
            >
              General
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeSection === 'display'
                  ? 'border-logo-color text-logo-color  dark:border-logo-color dark:text-logo-color'
                  : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
              }`}
              onClick={() => handleSectionClick('display')}
            >
              Display
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeSection === 'advanced'
                  ? 'border-logo-color text-logo-color  dark:border-logo-color dark:text-logo-color'
                  : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
              }`}
              onClick={() => handleSectionClick('advanced')}
            >
              Advanced
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">{renderContent()}</div>
    </div>
  )
}

export default WidgetConf