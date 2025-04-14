"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFilePdf, FaFileExcel, FaFileCode, FaLaptopCode } from "react-icons/fa";

export default function Report() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 페이지 제목 섹션 */}
      <section className="relative bg-blue-600 text-white py-20 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">맞춤형 보고서</h1>
          <p className="text-xl max-w-3xl mx-auto">
            데이터 분석 결과를 전문적인 보고서로 제작하여 주요 인사이트와 
            전략적 추천사항을 효과적으로 전달합니다.
          </p>
        </div>
      </section>

      {/* 보고서 특징 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">보고서 특징</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            비즈니스 요구사항에 맞는 맞춤형 보고서로 데이터의 가치를 극대화합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFilePdf size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">다양한 포맷</h3>
              <p className="text-gray-600">
                PDF, HTML, PowerPoint 등 다양한 포맷으로 보고서를 제공하여
                원하는 환경에서 쉽게 활용하고 공유할 수 있습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFileExcel size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">데이터 기반 인사이트</h3>
              <p className="text-gray-600">
                단순한 데이터 나열이 아닌 통계적 분석과 전문가의 해석을 통해
                실질적인 비즈니스 인사이트를 제공합니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFileCode size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">자동화된 업데이트</h3>
              <p className="text-gray-600">
                데이터가 변경될 때마다 보고서를 자동으로 업데이트하여
                항상 최신 정보에 기반한 의사결정을 지원합니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">브랜드 맞춤화</h3>
              <p className="text-gray-600">
                귀사의 브랜드 아이덴티티에 맞게 디자인된 보고서로
                전문성과 일관성을 유지합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 샘플 보고서 섹션 */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">샘플 보고서</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            다양한 산업과 목적에 맞게 제작된 보고서 샘플을 확인해보세요.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">월간 판매 실적 보고서</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  월별 판매 데이터를 분석하여 주요 성과, 트렌드, 기회 영역을 
                  식별하고 전략적 추천사항을 제시하는 종합 보고서입니다.
                </p>
                <div className="flex justify-center">
                  <Image 
                    src="/visualization/english_custom_report.png" 
                    alt="월간 판매 실적 보고서" 
                    width={800} 
                    height={1000}
                    className="rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">마케팅 캠페인 성과 보고서</h3>
                  <p className="text-gray-600 mb-4">
                    디지털 마케팅 캠페인의 성과를 채널별, 지역별로 분석하고
                    ROI를 최적화하기 위한 전략을 제시합니다.
                  </p>
                  <Image 
                    src="/visualization/marketing_report.png" 
                    alt="마케팅 캠페인 성과 보고서" 
                    width={600} 
                    height={400}
                    className="rounded-md shadow-sm"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">재무 분석 보고서</h3>
                  <p className="text-gray-600 mb-4">
                    재무 상태와 수익성을 종합적으로 분석하고 현금 흐름 
                    최적화와 비용 절감을 위한 인사이트를 제공합니다.
                  </p>
                  <Image 
                    src="/visualization/finance_report.png" 
                    alt="재무 분석 보고서" 
                    width={600} 
                    height={400}
                    className="rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">고객 세그먼트 분석 보고서</h3>
                  <p className="text-gray-600 mb-4">
                    고객 데이터를 세분화하여 주요 세그먼트별 행동 패턴과 
                    선호도를 분석하고 맞춤형 전략을 제안합니다.
                  </p>
                  <Image 
                    src="/visualization/customer_report.png" 
                    alt="고객 세그먼트 분석 보고서" 
                    width={600} 
                    height={400}
                    className="rounded-md shadow-sm"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">제품 성과 분석 보고서</h3>
                  <p className="text-gray-600 mb-4">
                    제품별 성과를 비교 분석하고 제품 라인업 최적화와 
                    개선 기회를 위한 데이터 기반 제안을 제공합니다.
                  </p>
                  <Image 
                    src="/visualization/product_report.png" 
                    alt="제품 성과 분석 보고서" 
                    width={600} 
                    height={400}
                    className="rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 보고서 제작 프로세스 섹션 */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">보고서 제작 프로세스</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            귀사의 요구사항에 맞는 완벽한 보고서를 제작하는 과정입니다.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 프로세스 타임라인 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* 단계 1 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right">
                    <h3 className="text-xl font-bold mb-2">1. 요구사항 분석</h3>
                    <p className="text-gray-600">
                      귀사의 비즈니스 목표, 데이터 환경, 주요 KPI, 
                      타겟 독자를 파악하여 보고서 범위를 정의합니다.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">1</div>
                  <div className="md:w-1/2 pl-8 mt-4 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <Image 
                        src="/visualization/process_requirements.png" 
                        alt="요구사항 분석" 
                        width={300} 
                        height={200}
                        className="rounded-md mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 단계 2 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right md:order-2">
                    <h3 className="text-xl font-bold mb-2">2. 데이터 분석</h3>
                    <p className="text-gray-600">
                      최신 데이터 분석 기법을 활용하여 데이터를 처리하고
                      핵심 트렌드와 인사이트를 발견합니다.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">2</div>
                  <div className="md:w-1/2 pl-8 mt-4 md:mt-0 md:order-1">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <Image 
                        src="/visualization/process_analysis.png" 
                        alt="데이터 분석" 
                        width={300} 
                        height={200}
                        className="rounded-md mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 단계 3 */}
              <div className="relative mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right">
                    <h3 className="text-xl font-bold mb-2">3. 보고서 디자인</h3>
                    <p className="text-gray-600">
                      브랜드 가이드라인에 맞게 시각적으로 매력적인
                      보고서 템플릿을 디자인합니다.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">3</div>
                  <div className="md:w-1/2 pl-8 mt-4 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <Image 
                        src="/visualization/process_design.png" 
                        alt="보고서 디자인" 
                        width={300} 
                        height={200}
                        className="rounded-md mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 단계 4 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right md:order-2">
                    <h3 className="text-xl font-bold mb-2">4. 결과물 전달 및 리뷰</h3>
                    <p className="text-gray-600">
                      완성된 보고서를 전달하고 피드백을 수렴하여
                      필요시 수정 및 보완을 진행합니다.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">4</div>
                  <div className="md:w-1/2 pl-8 mt-4 md:mt-0 md:order-1">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <Image 
                        src="/visualization/process_delivery.png" 
                        alt="결과물 전달 및 리뷰" 
                        width={300} 
                        height={200}
                        className="rounded-md mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">맞춤형 보고서로 데이터 스토리를 전달하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            귀사의 데이터를 가치 있는 인사이트로 변환하는 맞춤형 보고서 서비스에 대해 상담해보세요.
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