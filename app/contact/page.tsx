import React from 'react'
import Link from 'next/link'
import MobileMenu from '../components/MobileMenu'

export default function Contact() {
  return (
    <main>
      {/* 헤더 섹션 */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-16 header-large">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">비주얼라이즈</h1>
            </Link>
          </div>
          
          {/* 데스크탑 메뉴 */}
          <nav className="desktop-menu">
            <ul className="flex space-x-8">
              <li><Link href="/" className="font-medium hover:text-primary">홈</Link></li>
              <li><Link href="/features" className="font-medium hover:text-primary">주요기능</Link></li>
              <li><Link href="/portfolio" className="font-medium hover:text-primary">포트폴리오</Link></li>
              <li><Link href="/contact" className="font-medium text-primary">문의하기</Link></li>
            </ul>
          </nav>
          
          {/* 모바일 메뉴 */}
          <MobileMenu currentPath="/contact" />
          
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 font-bold px-5 py-2.5 text-base desktop-menu">시작하기</Link>
        </div>
      </header>

      {/* 페이지 제목 섹션 */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">문의하기</h1>
          <p className="text-xl max-w-3xl mx-auto">데이터 시각화 프로젝트나 궁금한 사항이 있으시면 언제든지 문의해 주세요.</p>
        </div>
      </section>

      {/* 문의 양식 섹션 */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">무료 상담 신청</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">회사명</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">문의 제목 *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">관심 서비스</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="btn btn-primary px-8 py-3"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 연락처 정보 섹션 */}
      <section className="section bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">다양한 방법으로 문의하세요</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">주소</h3>
                <p>서울특별시 강남구 테헤란로 123<br />비주얼라이즈 타워 5층</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">전화</h3>
                <p>02-123-4567<br />평일 09:00 - 18:00</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">이메일</h3>
                <p>info@visualize.kr<br />영업 및 제휴 문의: sales@visualize.kr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">서비스 비용은 어떻게 책정되나요?</h3>
                <p>프로젝트의 규모, 복잡성, 요구사항에 따라 맞춤형으로 견적을 산출합니다. 정확한 비용은 상담을 통해 결정되며, 투명한 가격 정책을 제공합니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">프로젝트 완료까지 얼마나 걸리나요?</h3>
                <p>간단한 시각화는 1-2주 내에 완료 가능하며, 복잡한 대시보드나 분석 프로젝트는 4-8주가 소요될 수 있습니다. 구체적인 일정은 요구사항에 따라 결정됩니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">어떤 데이터 형식을 지원하나요?</h3>
                <p>CSV, Excel, JSON, SQL 데이터베이스 등 대부분의 표준 데이터 형식을 지원합니다. 특수한 형식의 데이터도 전처리를 통해 처리 가능합니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">데이터 보안은 어떻게 보장되나요?</h3>
                <p>모든 고객 데이터는 암호화되어 안전하게 처리되며, 엄격한 데이터 보안 정책을 준수합니다. 필요시 NDA 체결을 통해 추가적인 보안을 제공합니다.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">완성된 시각화 결과물을 어떻게 제공받나요?</h3>
                <p>웹 기반 대시보드, 정적 보고서(PDF), 인터랙티브 파일 등 다양한 형태로 제공 가능합니다. 고객의 환경과 요구사항에 맞게 최적화된 형태로 전달합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer-bg text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">비주얼라이즈</h3>
              <p>데이터 시각화를 통한 인사이트 발견과 가치 창출의 파트너</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">서비스</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="hover:text-blue-400">데이터 시각화</Link></li>
                <li><Link href="/features" className="hover:text-blue-400">인터랙티브 대시보드</Link></li>
                <li><Link href="/features" className="hover:text-blue-400">데이터 분석</Link></li>
                <li><Link href="/features" className="hover:text-blue-400">맞춤형 보고서</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">회사 정보</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-blue-400">회사 소개</Link></li>
                <li><Link href="/portfolio" className="hover:text-blue-400">포트폴리오</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400">블로그</Link></li>
                <li><Link href="/careers" className="hover:text-blue-400">채용정보</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">문의하기</h4>
              <p className="mb-2">이메일: admin@smap.site</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 flex items-center"><i className="fab fa-twitter mr-1"></i> Twitter</a>
                <a href="#" className="text-white hover:text-blue-400 flex items-center"><i className="fab fa-facebook mr-1"></i> Facebook</a>
                <a href="#" className="text-white hover:text-blue-400 flex items-center"><i className="fab fa-instagram mr-1"></i> Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="mb-2">Beyond Real</p>
            <p className="text-sm mb-2">대표 : 정진 | 208-07-09695 | admin@smap.site</p>
            <p className="text-sm mb-4">경기도 김포시 김포한강9로75번길 66, 505-A237호 (국제프라자)</p>
            <p>Copyright ⓒ 2025 비주얼라이즈 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 