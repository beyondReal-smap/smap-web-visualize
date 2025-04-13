import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <main>
      {/* 헤더 섹션 */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-16 header-large">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-primary">비주얼라이즈</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="/" className="font-medium hover:text-primary">홈</Link></li>
              <li><Link href="/features" className="font-medium hover:text-primary">주요기능</Link></li>
              <li><Link href="/portfolio" className="font-medium text-primary">포트폴리오</Link></li>
              <li><Link href="/contact" className="font-medium hover:text-primary">문의하기</Link></li>
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-primary px-5 py-2.5 text-base font-medium">시작하기</Link>
        </div>
      </header>

      {/* 페이지 제목 섹션 */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">포트폴리오</h1>
          <p className="text-xl max-w-3xl mx-auto">비주얼라이즈가 제작한 데이터 시각화 프로젝트를 살펴보세요. 다양한 산업과 데이터 유형에 대한 시각화 사례를 확인할 수 있습니다.</p>
        </div>
      </section>

      {/* 프로젝트 필터 */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-primary text-white rounded-full">전체</button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">대시보드</button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">데이터 시각화</button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">데이터 분석</button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">보고서</button>
          </div>
        </div>
      </section>

      {/* 포트폴리오 그리드 */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 프로젝트 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="relative h-60">
                <Image
                  src="/portfolio-finance.jpg"
                  alt="금융 데이터 대시보드"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-primary rounded-full mb-3">대시보드</span>
                <h3 className="text-xl font-bold mb-2">금융 투자 포트폴리오 대시보드</h3>
                <p className="text-gray-600 mb-4">투자 성과와 자산 배분을 실시간으로 모니터링할 수 있는 인터랙티브 대시보드 개발</p>
                <Link href="/portfolio/finance-dashboard" className="text-primary font-semibold hover:underline">자세히 보기</Link>
              </div>
            </div>

            {/* 프로젝트 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="relative h-60">
                <Image
                  src="/portfolio-ecommerce.jpg"
                  alt="이커머스 판매 분석"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full mb-3">데이터 분석</span>
                <h3 className="text-xl font-bold mb-2">이커머스 판매 데이터 분석</h3>
                <p className="text-gray-600 mb-4">고객 행동 패턴과 제품 성과를 분석하여 매출 증대 전략을 도출한 이커머스 데이터 분석 프로젝트</p>
                <Link href="/portfolio/ecommerce-analysis" className="text-primary font-semibold hover:underline">자세히 보기</Link>
              </div>
            </div>

            {/* 프로젝트 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="relative h-60">
                <Image
                  src="/portfolio-healthcare.jpg"
                  alt="헬스케어 데이터 시각화"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full mb-3">데이터 시각화</span>
                <h3 className="text-xl font-bold mb-2">헬스케어 데이터 시각화</h3>
                <p className="text-gray-600 mb-4">의료 데이터를 직관적인 시각적 형태로 변환하여 환자 치료 결과와 경향을 분석한 헬스케어 시각화</p>
                <Link href="/portfolio/healthcare-viz" className="text-primary font-semibold hover:underline">자세히 보기</Link>
              </div>
            </div>

            {/* 프로젝트 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="relative h-60">
                <Image
                  src="/portfolio-marketing.jpg"
                  alt="마케팅 캠페인 분석"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full mb-3">보고서</span>
                <h3 className="text-xl font-bold mb-2">마케팅 캠페인 성과 보고서</h3>
                <p className="text-gray-600 mb-4">다채널 마케팅 캠페인의 ROI와 고객 유입을 분석하여 마케팅 효율성을 최적화한 분석 보고서</p>
                <Link href="/portfolio/marketing-report" className="text-primary font-semibold hover:underline">자세히 보기</Link>
              </div>
            </div>

            {/* 프로젝트 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="relative h-60">
                <Image
                  src="/portfolio-logistics.jpg"
                  alt="물류 최적화 대시보드"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-primary rounded-full mb-3">대시보드</span>
                <h3 className="text-xl font-bold mb-2">물류 네트워크 최적화 대시보드</h3>
                <p className="text-gray-600 mb-4">실시간 물류 데이터를 분석하여 배송 경로와 재고 관리를 최적화하는 대시보드 개발</p>
                <Link href="/portfolio/logistics-dashboard" className="text-primary font-semibold hover:underline">자세히 보기</Link>
              </div>
            </div>

            {/* 프로젝트 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="relative h-60">
                <Image
                  src="/portfolio-social.jpg"
                  alt="소셜 미디어 분석"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full mb-3">데이터 분석</span>
                <h3 className="text-xl font-bold mb-2">소셜 미디어 감성 분석</h3>
                <p className="text-gray-600 mb-4">소셜 미디어 데이터를 분석하여 브랜드 인식과 고객 감성을 시각화하고 마케팅 전략을 도출</p>
                <Link href="/portfolio/social-analysis" className="text-primary font-semibold hover:underline">자세히 보기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 의뢰 CTA */}
      <section className="section bg-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">맞춤형 데이터 시각화 프로젝트가 필요하신가요?</h2>
          <p className="text-lg mb-8">비주얼라이즈는 귀사의 데이터를 가치 있는 인사이트로 변환하는 전문 서비스를 제공합니다. 복잡한 데이터도 명확하고 이해하기 쉬운 시각적 결과물로 만들어 드립니다.</p>
          <Link href="/contact" className="btn bg-primary text-white hover:bg-blue-700 font-bold px-8 py-4 text-lg shadow-lg">프로젝트 문의하기</Link>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="mb-4 italic">"비주얼라이즈가 개발한 대시보드는 우리 회사의 의사결정 방식을 완전히 바꿔놓았습니다. 데이터를 이해하기 쉬운 형태로 제공하여 모든 팀이 데이터 기반 결정을 내릴 수 있게 되었습니다."</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">K</div>
                </div>
                <div>
                  <h4 className="font-bold">김영수</h4>
                  <p className="text-sm text-gray-600">한국금융그룹 CTO</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="mb-4 italic">"비주얼라이즈는 우리가 기대했던 것 이상의 결과물을 제공했습니다. 복잡했던 판매 데이터를 명확한 인사이트로 변환해주어 매출이 20% 이상 증가했습니다."</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">L</div>
                </div>
                <div>
                  <h4 className="font-bold">이주연</h4>
                  <p className="text-sm text-gray-600">베스트샵 마케팅 디렉터</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
              </div>
              <p className="mb-4 italic">"전문적이고 신속한 서비스에 매우 만족합니다. 우리 연구 데이터를 시각화하여 논문 발표와 연구 결과 커뮤니케이션에 큰 도움이 되었습니다."</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">P</div>
                </div>
                <div>
                  <h4 className="font-bold">박민준</h4>
                  <p className="text-sm text-gray-600">서울대학교 연구교수</p>
                </div>
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