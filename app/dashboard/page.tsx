"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFilter, FaExpand, FaChartBar, FaBell } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 페이지 제목 섹션 */}
      <section className="relative bg-blue-600 text-white py-20 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">인터랙티브 대시보드</h1>
          <p className="text-xl max-w-3xl mx-auto">
            실시간 데이터를 한눈에 파악하고 필요한 정보를 즉시 확인할 수 있는
            인터랙티브 대시보드로 데이터 기반 의사결정을 가속화하세요.
          </p>
        </div>
      </section>

      {/* 대시보드 기능 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">주요 기능</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            비즈니스 요구사항에 맞춰 최적화된 대시보드를 제공합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFilter size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">실시간 필터링</h3>
              <p className="text-gray-600">
                드래그 앤 드롭으로 원하는 데이터만 필터링하여 볼 수 있습니다.
                날짜, 지역, 제품 등 다양한 기준으로 데이터를 필터링할 수 있습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaExpand size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">드릴다운 분석</h3>
              <p className="text-gray-600">
                상위 데이터에서 더 상세한 정보로 쉽게 이동할 수 있습니다.
                클릭 한 번으로 원하는 정보의 상세 내용을 확인할 수 있습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartBar size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">다양한 시각화</h3>
              <p className="text-gray-600">
                막대 그래프, 라인 차트, 파이 차트 등 다양한 시각화 옵션을 
                사용하여 데이터를 가장 직관적인 방식으로 표현합니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBell size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">알림 설정</h3>
              <p className="text-gray-600">
                중요한 KPI가 특정 임계값을 초과하면 자동으로 알림을 받을 수 있습니다.
                이메일, SMS, 앱 푸시 알림 등 다양한 알림 방식을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 대시보드 예시 섹션 */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">대시보드 예시</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            다양한 산업에 적용된 맞춤형 대시보드 예시입니다.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <Image 
                  src="/visualization/sales_dashboard.webp" 
                  alt="영업 대시보드" 
                  width={800} 
                  height={500}
                  className="w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">영업 성과 대시보드</h3>
              <p className="text-gray-600 mb-4 text-lg">
                영업팀을 위한 실시간 매출, 목표 달성률, 영업 파이프라인 등을 
                한눈에 파악할 수 있는 대시보드입니다. 지역별, 제품별, 영업사원별 
                성과를 실시간으로 추적할 수 있습니다.
              </p>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <Image 
                  src="/visualization/marketing_dashboard.webp" 
                  alt="마케팅 대시보드" 
                  width={800} 
                  height={500}
                  className="w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">마케팅 캠페인 대시보드</h3>
              <p className="text-gray-600 mb-4 text-lg">
                마케팅 캠페인의 성과를 채널별, 캠페인별로 추적하는 대시보드입니다.
                광고 지출, 전환율, ROI, 고객 획득 비용 등 주요 마케팅 지표를 
                실시간으로 모니터링할 수 있습니다.
              </p>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <Image 
                  src="/visualization/finance_dashboard.webp" 
                  alt="재무 대시보드" 
                  width={800} 
                  height={500}
                  className="w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">재무 관리 대시보드</h3>
              <p className="text-gray-600 mb-4 text-lg">
                현금 흐름, 수익성, 비용 구조, 예산 대비 실적 등의 재무 지표를 
                실시간으로 추적하는 대시보드입니다. 재무 상태를 한눈에 파악하고 
                재무 의사결정을 신속하게 내릴 수 있습니다.
              </p>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <Image 
                  src="/visualization/operations_dashboard.webp" 
                  alt="운영 대시보드" 
                  width={800} 
                  height={500}
                  className="w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">운영 모니터링 대시보드</h3>
              <p className="text-gray-600 mb-4 text-lg">
                생산 효율성, 재고 수준, 품질 지표, 배송 성과 등 핵심 운영 지표를 
                실시간으로 모니터링하는 대시보드입니다. 운영상의 문제를 신속하게 
                식별하고 대응할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 커스터마이징 섹션 */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">맞춤형 대시보드</h2>
              <p className="text-gray-600 mb-6 text-lg">
                귀사의 비즈니스 요구사항과 데이터 특성에 맞게 완벽하게 
                커스터마이징된 대시보드를 제공합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">브랜드 아이덴티티에 맞는 디자인</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">필요한 KPI와 지표 맞춤 설정</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">기존 시스템과의 원활한 통합</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">사용자 역할 기반 액세스 제어</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">모바일 및 태블릿 최적화</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/visualization/dashboard_customization.webp" 
                alt="대시보드 커스터마이징" 
                width={800} 
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">맞춤형 대시보드로 데이터 활용을 극대화하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            귀사의 비즈니스에 최적화된 대시보드 서비스에 대해 상담해 보세요.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block">
            무료 상담 신청하기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
} 