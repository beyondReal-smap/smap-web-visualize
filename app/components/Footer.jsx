'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* 로고와 설명 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">SmapVisual</h2>
            <p className="mb-4 max-w-md text-gray-400">
              비즈니스 인사이트를 발견하고 시각화하여 데이터 기반의 의사결정을 지원하는 
              최고의 데이터 시각화 솔루션입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <p className="text-gray-400 mb-2">이메일: admin@smap.site</p>
            <p className="text-gray-400 mb-2">전화: 02-123-4567</p>
            <p className="text-gray-400 mb-2">주소: 경기도 김포시 김포한강9로75번길 66, 505-A237호 (국제프라자)</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SmapVisual. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              개인정보 처리방침
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 