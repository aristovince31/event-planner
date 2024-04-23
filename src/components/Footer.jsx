import React from "react";

/**
 * Footer component is used to display the footer
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
    <footer className="footer absolute footer-center w-full p-4 bg-transparent text-gray-800">
      <div className="text-center">
        <p>
          Copyright © 2024 -
          <a
            className="font-semibold"
            href="mailto:support.bookitnow@yahoo.com"
          >
            {" "}
            BookItNow
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
