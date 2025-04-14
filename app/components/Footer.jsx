'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* 로고와 설명 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">SmapVisual</h2>
            <p className="mb-4 max-w-md text-gray-400">
              고객의 니즈와 데이터 특성에 맞는 맞춤형 시각화 서비스를 제공합니다.
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
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p className="mb-1">Beyond Real</p>
            <p className="mb-1">대표 : 정진 | 사업자등록번호 : 208-07-09695</p>
            <p className="mb-1">
              이메일 : <a href="mailto:admin@smap.site" className="text-gray-400 hover:text-white">admin@smap.site</a> | 
              텔레그램 : <a href="https://t.me/smapvisual" className="text-gray-400 hover:text-white">@smapvisual</a>
            </p>
            <p>경기도 김포시 김포한강9로75번길 66, 505-A237호 (국제프라자)</p>
          </div>
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