'use client';

import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          데이터를 통해 비즈니스의 미래를 확인하세요
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          지금 바로 문의하시고 데이터 시각화가 가져올 혁신적인 변화를 경험해보세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors text-lg">
            상담 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 