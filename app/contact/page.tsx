import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaMapMarkerAlt, FaTelegram, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 페이지 제목 섹션 - 파란색 배경으로 홈화면과 일치 */}
      <section className="relative bg-blue-600 text-white py-20 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">문의하기</h1>
          <p className="text-xl max-w-3xl mx-auto">데이터 시각화 프로젝트나 궁금한 사항이 있으시면 언제든지 문의해 주세요.</p>
        </div>
      </section>

      {/* 문의 양식 섹션 - 흰색 배경 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6">무료 상담 신청</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">회사명</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">문의 제목 *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">관심 서비스</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">선택해주세요</option>
                  <option value="visualization">데이터 시각화</option>
                  <option value="dashboard">인터랙티브 대시보드</option>
                  <option value="analysis">데이터 분석</option>
                  <option value="report">맞춤형 보고서</option>
                  <option value="other">기타</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용 *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <span className="text-sm text-gray-700">개인정보 수집 및 이용에 동의합니다. *</span>
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 연락처 정보 섹션 - 연한 파란색 배경으로 변경 */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">다양한 방법으로 문의하세요</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">주소</h3>
                <p className="text-gray-600 text-lg">경기도 김포시 김포한강9로75번길 66, 505-A237호 (국제프라자)</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTelegram size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">텔레그램 채팅</h3>
                <p className="text-gray-600 text-lg">@smapvisual<br />실시간 상담 가능</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">이메일</h3>
                <p className="text-gray-600 text-lg">admin@smap.site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 - 보라색 배경으로 변경 */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">자주 묻는 질문</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">맞춤형 시각화 서비스는 어떤 과정으로 진행되나요?</h3>
                <p className="text-gray-600 text-lg">초기 상담 → 요구사항 분석 → 데이터 검토 → 시각화 설계 → 개발 및 구현 → 피드백 및 수정 → 최종 결과물 전달 → 사후 지원의 단계로 진행됩니다. 각 단계마다 고객과 긴밀히 소통하며 맞춤형 결과물을 제작합니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">서비스 비용은 어떻게 책정되나요?</h3>
                <p className="text-gray-600 text-lg">프로젝트의 규모, 복잡성, 요구사항에 따라 맞춤형으로 견적을 산출합니다. 정확한 비용은 상담을 통해 결정되며, 투명한 가격 정책을 제공합니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">맞춤형 대시보드 개발 후 수정이 필요하면 어떻게 하나요?</h3>
                <p className="text-gray-600 text-lg">모든 프로젝트에는 초기 수정 기간이 포함되어 있으며, 이후에도 유지보수 계약을 통해 지속적인 업데이트와 개선이 가능합니다. 비즈니스 요구사항 변화에 따라 대시보드도 함께 진화할 수 있습니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">데이터 보안은 어떻게 보장되나요?</h3>
                <p className="text-gray-600 text-lg">모든 고객 데이터는 암호화되어 안전하게 처리되며, 엄격한 데이터 보안 정책을 준수합니다. 필요시 NDA 체결을 통해 추가적인 보안을 제공하고, 고객이 원할 경우 온프레미스 환경에서도 작업이 가능합니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">기존 시스템과의 통합도 가능한가요?</h3>
                <p className="text-gray-600 text-lg">네, 고객의 기존 시스템(ERP, CRM, 마케팅 도구 등)과 완벽하게 통합되는 맞춤형 솔루션을 개발합니다. API 연동, 데이터 파이프라인 구축 등을 통해 원활한 데이터 흐름을 보장합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 