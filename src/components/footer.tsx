import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
			<h2 className="text-lg font-semibold mb-4">Contact Us</h2>
			<p className="text-sm mb-2">Phone: (123) 456-7890</p>
			<p className="text-sm">Email: info@example.com</p>
        </div>
        <div className="copyright">
          	<p>&copy; 2024 Helping Hand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
