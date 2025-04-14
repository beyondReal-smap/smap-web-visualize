'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold text-blue-600">SMAP Data Visualize</div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/#features" className="text-gray-700 hover:text-blue-600 flex items-center h-8">기능</Link>
          <Link href="/#visualizations" className="text-gray-700 hover:text-blue-600 flex items-center h-8">시각화</Link>
          <Link href="/#dashboards" className="text-gray-700 hover:text-blue-600 flex items-center h-8">대시보드</Link>
          <Link href="/#reports" className="text-gray-700 hover:text-blue-600 flex items-center h-8">리포트</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center h-8">
            문의하기
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute w-full shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/#features" className="text-gray-700 hover:text-blue-600 py-2 text-center" onClick={toggleMenu}>기능</Link>
            <Link href="/#visualizations" className="text-gray-700 hover:text-blue-600 py-2 text-center" onClick={toggleMenu}>시각화</Link>
            <Link href="/#dashboards" className="text-gray-700 hover:text-blue-600 py-2 text-center" onClick={toggleMenu}>대시보드</Link>
            <Link href="/#reports" className="text-gray-700 hover:text-blue-600 py-2 text-center" onClick={toggleMenu}>리포트</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center" onClick={toggleMenu}>
              문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 