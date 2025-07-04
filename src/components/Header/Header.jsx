
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header fixed top-0 w-full z-50 bg-[#2c3e50]">
      <nav>
        <div className="container py-4 flex items-center justify-between">

       
          <Link to="/" className="text-light no-underline">
            <h1 className="m-0 fs-2 text-white">START FRAMEWORK</h1>
          </Link>

          <ul className="flex mb-0 me-4 fw-bold fs-6">
            <li className="pe-4">
              <Link className="text-light" to="/about">ABOUT</Link>
            </li>
            <li className="pe-4">
              <Link className="text-light" to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link className="text-light" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
