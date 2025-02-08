import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-black p-4 text-center">
      <p>&copy; 2023 Corporatica. All rights reserved.</p>
      <nav className="mt-2">
        <a href="#" className="mx-2 hover:text-blue-400">Privacy Policy</a>
        <a href="#" className="mx-2 hover:text-blue-400">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
