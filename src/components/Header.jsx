import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-black p-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">Corporatica</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-200">Dashboard</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <span>Amr Eid</span>
      </div>
    </header>
  );
};

export default Header;
