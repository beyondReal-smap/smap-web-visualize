"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChartBar, FaChartPie, FaChartLine, FaChartArea } from "react-icons/fa";

export default function Visualization() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 페이지 제목 섹션 */}
      <section className="relative bg-blue-600 text-white py-20 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">데이터 시각화</h1>
          <p className="text-xl max-w-3xl mx-auto">
            복잡한 데이터를 명확하고 이해하기 쉬운 시각적 형태로 변환하여 
            인사이트를 발견하고 더 나은 의사결정을 돕습니다.
          </p>
        </div>
      </section>

      {/* 시각화 유형 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">시각화 유형</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            목적과 데이터 특성에 맞는 다양한 시각화 유형을 제공합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartBar size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">막대 그래프</h3>
              <p className="text-gray-600">
                범주별 비교에 적합하며, 수량 차이를 직관적으로 표현합니다. 
                수평/수직 막대, 누적 막대, 그룹화된 막대 등 다양한 변형이 가능합니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartPie size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">파이 차트</h3>
              <p className="text-gray-600">
                전체에 대한 부분의 비율을 원형으로 표현하여 구성 비율을 쉽게 파악할 수 있습니다.
                도넛 차트 등의 변형도 제공합니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">선 그래프</h3>
              <p className="text-gray-600">
                시간에 따른 변화나 추세를 표현하는 데 최적화되어 있습니다.
                여러 변수의 시계열 데이터를 동시에 비교할 수 있습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartArea size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">히트맵</h3>
              <p className="text-gray-600">
                색상의 강도로 값의 크기를 표현하여 복잡한 데이터의 패턴을 직관적으로 파악할 수 있습니다.
                상관관계 분석 등에 유용합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 시각화 예제 섹션 */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">시각화 예제</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            다양한 산업과 용도에 맞게 적용된 시각화 예제를 확인하세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/visualization/sales_visualization.png" 
                alt="판매 데이터 시각화" 
                width={600} 
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">판매 데이터 분석</h3>
                <p className="text-gray-600 mb-4">
                  월별 판매량, 제품 카테고리별 매출, 지역별 성과 등을 다양한 차트로 시각화하여
                  판매 패턴을 파악하고 효과적인 마케팅 전략 수립에 활용할 수 있습니다.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                  자세히 알아보기 →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/visualization/finance_visualization.png" 
                alt="금융 데이터 시각화" 
                width={600} 
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">금융 데이터 시각화</h3>
                <p className="text-gray-600 mb-4">
                  주가 변동, 자산 배분, 위험 분석 등 복잡한 금융 데이터를 직관적인 그래프로
                  표현하여 투자 의사결정을 지원합니다.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                  자세히 알아보기 →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/visualization/marketing_visualization.png" 
                alt="마케팅 데이터 시각화" 
                width={600} 
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">마케팅 성과 분석</h3>
                <p className="text-gray-600 mb-4">
                  캠페인 성과, 채널별 ROI, 고객 획득 비용 등 마케팅 지표를 시각화하여
                  효과적인 마케팅 전략 수립과 예산 최적화를 지원합니다.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                  자세히 알아보기 →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/visualization/operations_visualization.png" 
                alt="운영 데이터 시각화" 
                width={600} 
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">운영 효율성 모니터링</h3>
                <p className="text-gray-600 mb-4">
                  생산 라인 효율성, 재고 수준, 물류 최적화 등 운영 데이터를 실시간으로 
                  시각화하여 병목 현상 파악과 프로세스 개선을 지원합니다.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                  자세히 알아보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">사용 기술</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            최신 데이터 시각화 기술과 라이브러리를 활용하여 최적의 결과물을 제공합니다.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image 
                src="/logos/matplotlib.png" 
                alt="Matplotlib" 
                width={80} 
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">Matplotlib</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image 
                src="/logos/d3js.png" 
                alt="D3.js" 
                width={80} 
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">D3.js</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image 
                src="/logos/plotly.png" 
                alt="Plotly" 
                width={80} 
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">Plotly</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image 
                src="/logos/tableau.png" 
                alt="Tableau" 
                width={80} 
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">Tableau</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">데이터 시각화 프로젝트를 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            귀사의 데이터를 통해 새로운 인사이트를 발견하고 비즈니스 성과를 향상시킬 준비가 되셨나요?
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