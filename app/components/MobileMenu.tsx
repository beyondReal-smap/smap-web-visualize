"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  currentPath: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        className="mobile-menu-button z-50"
        onClick={toggleMenu}
        aria-label="메뉴 열기/닫기"
      >
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col items-start space-y-6 text-lg">
          <Link
            href="/"
            className={`font-medium ${currentPath === '/' ? 'text-primary' : 'text-gray-800'} hover:text-primary w-full`}
            onClick={closeMenu}
          >
            홈
          </Link>
          <Link
            href="/features"
            className={`font-medium ${currentPath === '/features' ? 'text-primary' : 'text-gray-800'} hover:text-primary w-full`}
            onClick={closeMenu}
          >
            주요기능
          </Link>
          <Link
            href="/portfolio"
            className={`font-medium ${currentPath === '/portfolio' ? 'text-primary' : 'text-gray-800'} hover:text-primary w-full`}
            onClick={closeMenu}
          >
            포트폴리오
          </Link>
          <Link
            href="/contact"
            className={`font-medium ${currentPath === '/contact' ? 'text-primary' : 'text-gray-800'} hover:text-primary w-full`}
            onClick={closeMenu}
          >
            문의하기
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary mt-4 w-full text-center"
            onClick={closeMenu}
          >
            시작하기
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu; 