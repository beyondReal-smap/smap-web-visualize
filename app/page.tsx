import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './components/MobileMenu'

export default function Home() {
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
              <li><Link href="/" className="font-medium text-primary">홈</Link></li>
              <li><Link href="/features" className="font-medium hover:text-primary">주요기능</Link></li>
              <li><Link href="/portfolio" className="font-medium hover:text-primary">포트폴리오</Link></li>
              <li><Link href="/contact" className="font-medium hover:text-primary">문의하기</Link></li>
            </ul>
          </nav>
          
          {/* 모바일 메뉴 */}
          <MobileMenu currentPath="/" />
          
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 font-bold px-5 py-2.5 text-base desktop-menu">시작하기</Link>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="hero">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">데이터를 통찰력있는 시각적 경험으로</h2>
          <p className="text-xl mb-8 max-w-2xl">비주얼라이즈는 파이썬 기반 데이터 시각화 전문 서비스로, 복잡한 데이터를 명확하고 아름다운 시각적 결과물로 변환합니다.</p>
          <div className="flex space-x-4">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-lg">서비스 시작하기</Link>
            <Link href="/features" className="btn bg-blue-800 text-white hover:bg-blue-900 font-bold px-8 py-4 text-lg">주요 기능 살펴보기</Link>
          </div>
          <div className="mt-12 relative w-full max-w-4xl h-[400px]">
            <Image
              src="/dashboard-preview.png"
              alt="데이터 시각화 대시보드 미리보기"
              fill
              className="object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="section bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">더 스마트한 데이터 시각화, 직관적인 인사이트</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white">
              <div className="text-primary text-5xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">고급 데이터 시각화</h3>
              <p>파이썬의 강력한 라이브러리를 활용한 맞춤형 차트와 그래프로 데이터의 모든 측면을 표현합니다.</p>
            </div>
            
            <div className="feature-card bg-white">
              <div className="text-primary text-5xl mb-4">
                <i className="fas fa-magic"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">인터랙티브 대시보드</h3>
              <p>사용자와 상호작용하는 대시보드로 데이터를 탐색하고 다양한 관점에서 분석할 수 있습니다.</p>
            </div>
            
            <div className="feature-card bg-white">
              <div className="text-primary text-5xl mb-4">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">데이터 분석 솔루션</h3>
              <p>단순한 시각화를 넘어 고급 통계와 머신러닝을 활용한 깊이 있는 데이터 분석을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">비주얼라이즈 주요 기능</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4">데이터 시각화</h3>
              <p className="mb-4">복잡한 데이터셋을 명확하고 이해하기 쉬운 그래픽으로 변환합니다. 막대 그래프, 선 그래프, 파이 차트, 히트맵 등 다양한 시각화 옵션을 제공합니다.</p>
              <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/feature-visualization.png"
                  alt="데이터 시각화 예시"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4">인터랙티브 대시보드</h3>
              <p className="mb-4">실시간으로 업데이트되는 대시보드로 데이터의 추이를 모니터링하고 통찰력 있는 의사결정을 지원합니다.</p>
              <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/feature-dashboard.png"
                  alt="인터랙티브 대시보드 예시"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4">데이터 분석</h3>
              <p className="mb-4">고급 통계 분석과 머신러닝 알고리즘을 통해 데이터의 패턴을 발견하고 미래 트렌드를 예측합니다.</p>
              <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/feature-analysis.png"
                  alt="데이터 분석 예시"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4">맞춤형 보고서</h3>
              <p className="mb-4">고객의 요구사항에 맞춘 전문적인 보고서를 제공하여 데이터 기반 결정을 지원합니다.</p>
              <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/feature-reports.png"
                  alt="맞춤형 보고서 예시"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 활용 사례 */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">비주얼라이즈 활용 사례</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white">
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src="/case-finance.png"
                  alt="금융 데이터 분석"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">금융 데이터 분석</h3>
              <p>투자 포트폴리오 최적화와 시장 트렌드 시각화로 금융 의사결정을 지원합니다.</p>
            </div>
            
            <div className="feature-card bg-white">
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src="/case-marketing.png"
                  alt="마케팅 성과 분석"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">마케팅 성과 분석</h3>
              <p>캠페인 효과와 고객 행동 패턴을 시각화하여 마케팅 전략 최적화에 기여합니다.</p>
            </div>
            
            <div className="feature-card bg-white">
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src="/case-research.png"
                  alt="연구 데이터 시각화"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">연구 데이터 시각화</h3>
              <p>복잡한 연구 결과를 명확한 시각적 자료로 변환하여 연구 커뮤니케이션을 강화합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">비주얼라이즈와 함께 데이터의 숨겨진 가치를 발견하고 비즈니스의 성장을 가속화하세요.</p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-lg">문의하기</Link>
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