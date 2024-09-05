import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">ZOBATO </div>
          
          <div className="right">
          <p className="text-sm mb-1">Phone: <a href="tel:+1234567890" className="underline hover:text-gray-400">+1 (234) 567-890</a></p>
          <p className="text-sm mb-1">Email: <a href="mailto:info@zobato.com" className="underline hover:text-gray-400">info@zobato.com</a></p>
          <p className="text-sm">Available 24/7</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Zobato. All rights reserved.</p>
          </div>
          <div className="right">
          <p className="text-sm mb-4">Delicious food delivered to your doorstep.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;