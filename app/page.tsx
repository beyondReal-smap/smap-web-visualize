"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRocket, FaChartLine, FaCode, FaBook } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VisualizationCarousel from "./components/VisualizationCarousel";
import CTA from "./components/CTA";
import CodeShowcase from "./components/CodeShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                데이터 시각화로 인사이트를 발견하세요
              </h1>
              <p className="text-xl mb-8 max-w-xl">
                SmapVisual은 복잡한 데이터를 이해하기 쉬운 시각적 형태로 변환하여 <br/>
                더 나은 비즈니스 의사결정을 도와줍니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center">
                  상담 문의하기
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/visualization/hero_insight_graph.webp" 
                alt="데이터 인사이트 시각화 예시" 
                width={800} 
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <FaChartLine size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">다양한 시각화</h3>
              <p className="text-gray-600">
                막대 그래프, 파이 차트, 히트맵 등 20가지 이상의 다양한 시각화 유형을 제공합니다.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <FaRocket size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">실시간 업데이트</h3>
              <p className="text-gray-600">
                데이터가 변경될 때마다 자동으로 시각화가 업데이트되어 항상 최신 정보를 확인할 수 있습니다.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 text-green-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <FaCode size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">API 지원</h3>
              <p className="text-gray-600">
                강력한 API를 통해 어떤 애플리케이션이나 서비스에서도 쉽게 통합하여 사용할 수 있습니다.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 text-red-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <FaBook size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">상세한 문서</h3>
              <p className="text-gray-600">
                초보자부터 전문가까지 누구나 쉽게 이해할 수 있는 상세한 문서와 튜토리얼을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Section - 연한 파란색 배경 */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">데이터 시각화 예시</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            SmapVisual은 다양한 유형의 데이터를 시각화하여 직관적으로 이해할 수 있게 도와줍니다.
            아래는 몇 가지 시각화 예시입니다.
          </p>
          <div className="max-w-4xl mx-auto mb-16">
            <VisualizationCarousel />
          </div>
        </div>
      </section>
          
      {/* Python Code Showcase - 별도 섹션으로 분리 및 배경색 변경 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">파이썬으로 작성된 시각화 코드</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            데이터 시각화 보고서는 matplotlib, pandas, numpy 등의 라이브러리를 활용하여 작성됩니다. <br/>
            아래는 보고서 생성에 사용된 주요 코드 샘플입니다.
          </p>
          <div className="max-w-4xl mx-auto">
            <CodeShowcase />
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section - 흰색 배경 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">인터랙티브 대시보드</h2>
              <p className="text-gray-600 mb-8 text-lg">
                실시간으로 데이터 트렌드를 모니터링하고 중요한 인사이트를 발견할 수 있는 
                커스터마이징 가능한 인터랙티브 대시보드를 제공합니다. 드래그 앤 드롭 인터페이스로
                누구나 쉽게 대시보드를 구성할 수 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>실시간 데이터 업데이트</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>사용자 정의 필터 및 드릴다운</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>다양한 차트 및 그래프 옵션</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>알림 및 임계값 설정 기능</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/visualization/interactive_dashboard.webp" 
                alt="인터랙티브 대시보드 예시" 
                width={800} 
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Report Demo Section - 연한 보라색 배경 */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">맞춤형 보고서</h2>
              <p className="text-gray-600 mb-8 text-lg">
                고객의 요구사항에 맞는 전문적인 보고서를 자동으로 생성하세요. Python 코드 샘플과 함께
                제공되는 보고서로 데이터 분석 결과를 효과적으로 전달할 수 있습니다. 
                비즈니스 인사이트부터 전략적 추천사항까지 완벽한 보고서를 만들 수 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>맞춤형 보고서 템플릿</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>자동화된 데이터 업데이트</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>다양한 포맷 지원 (PDF, HTML, PPT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>데이터 기반의 인사이트 제공</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/visualization/english_custom_report.webp" 
                alt="맞춤형 보고서 예시" 
                width={800} 
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
} 