'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">SMAP Data Visualize</h3>
            <p className="text-gray-400 mb-4">
              복잡한 데이터를 직관적인 시각화로 변환하여 더 나은 인사이트를 제공합니다.
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
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* 서비스 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li><Link href="/services/visualization" className="text-gray-400 hover:text-white">데이터 시각화</Link></li>
              <li><Link href="/services/dashboards" className="text-gray-400 hover:text-white">대시보드</Link></li>
              <li><Link href="/services/reports" className="text-gray-400 hover:text-white">보고서</Link></li>
              <li><Link href="/services/api" className="text-gray-400 hover:text-white">API</Link></li>
            </ul>
          </div>
          
          {/* 회사 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">회사</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">회사 소개</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">블로그</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">채용</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">문의하기</Link></li>
            </ul>
          </div>
          
          {/* 문의 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">문의하기</h3>
            {/* <p className="text-gray-400 mb-2">경기도 김포시 김포한강9로75번길 66, 505-A237호 (국제프라자)</p> */}
            {/* <p className="text-gray-400 mb-2">사업자 번호 : 208-07-09695</p>             */}
            <a href="mailto:admin@smap.site" className="text-gray-400 hover:text-white mb-2 inline-block">admin@smap.site</a>
            {/* <p className="text-gray-400">02-123-4567</p> */}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SMAP Data Visualize. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">개인정보처리방침</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 