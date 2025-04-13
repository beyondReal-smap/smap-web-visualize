import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
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
              <li><Link href="/features" className="font-medium text-primary">주요기능</Link></li>
              <li><Link href="/portfolio" className="font-medium hover:text-primary">포트폴리오</Link></li>
              <li><Link href="/contact" className="font-medium hover:text-primary">문의하기</Link></li>
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-primary px-5 py-2.5 text-base font-medium">시작하기</Link>
        </div>
      </header>

      {/* 페이지 제목 섹션 */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">비주얼라이즈 주요 기능</h1>
          <p className="text-xl max-w-3xl mx-auto">파이썬을 활용한 강력한 데이터 시각화 및 분석 기능을 통해 고객의 비즈니스에 통찰력을 제공합니다.</p>
        </div>
      </section>

      {/* 주요 기능 상세 설명 */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-24">
            {/* 기능 1: 데이터 시각화 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/feature-visualization-detail.png"
                  alt="데이터 시각화 상세"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">고급 데이터 시각화</h2>
                <p className="text-lg mb-6">파이썬의 Matplotlib, Seaborn, Plotly와 같은 강력한 라이브러리를 활용하여 어떠한 유형의 데이터도 명확하고 아름다운 시각적 표현으로 변환합니다.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>다양한 차트 및 그래프 유형 지원 (선형, 막대, 산점도, 히트맵 등)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>맞춤형 시각화 디자인으로 브랜드 아이덴티티 반영</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>대용량 데이터를 위한 최적화된 시각화 솔루션</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>시각적 스토리텔링을 통한 데이터 내러티브 구성</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 기능 2: 인터랙티브 대시보드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/feature-dashboard-detail.png"
                  alt="인터랙티브 대시보드 상세"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl font-bold mb-6">인터랙티브 대시보드</h2>
                <p className="text-lg mb-6">Dash, Streamlit, Bokeh 등의 프레임워크를 활용해 사용자와 상호작용하는 대시보드를 개발합니다. 실시간 데이터 모니터링과 직관적인 조작이 가능합니다.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>필터, 드릴다운, 확대/축소 등 다양한 상호작용 기능</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>실시간 데이터 처리 및 자동 업데이트</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>주요 KPI와 메트릭스 한눈에 파악</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>웹 기반 솔루션으로 언제 어디서나 접근 가능</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 기능 3: 데이터 분석 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/feature-analysis-detail.png"
                  alt="데이터 분석 상세"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">고급 데이터 분석</h2>
                <p className="text-lg mb-6">NumPy, Pandas, SciPy, scikit-learn 등의 파이썬 라이브러리를 활용한 통계 분석 및 머신러닝 기반 데이터 분석 서비스를 제공합니다.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>탐색적 데이터 분석 (EDA)으로 숨겨진 패턴 발견</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>통계적 모델링과 예측 분석</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>시계열 데이터 분석 및 예측</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>머신러닝 알고리즘을 활용한 고급 데이터 인사이트</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 기능 4: 맞춤형 보고서 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/feature-reports-detail.png"
                  alt="맞춤형 보고서 상세"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl font-bold mb-6">맞춤형 보고서</h2>
                <p className="text-lg mb-6">Python을 활용한 자동화된 보고서 생성 시스템으로 정기적이고 일관된 데이터 리포팅을 제공합니다. PDF, PowerPoint, 웹 기반 등 다양한 형식으로 제공 가능합니다.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>고품질 비주얼과 인사이트로 구성된 전문 보고서</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>일간, 주간, 월간 등 자동화된 정기 보고서</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>고객 브랜드에 맞춘 디자인 커스터마이징</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>경영진을 위한 핵심 요약 및 실행 가능한 인사이트 제공</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="section bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">비주얼라이즈가 사용하는 핵심 기술</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fab fa-python"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Python</h3>
              <p>데이터 처리 및 분석의 핵심 언어</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Matplotlib / Seaborn</h3>
              <p>고품질 정적 시각화 라이브러리</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Plotly / Dash</h3>
              <p>인터랙티브 시각화 및 대시보드</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-table"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Pandas</h3>
              <p>강력한 데이터 조작 및 분석 도구</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Scikit-learn</h3>
              <p>머신러닝 알고리즘 및 데이터 분석</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">NumPy / SciPy</h3>
              <p>수치 계산 및 과학적 컴퓨팅</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-stream"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Streamlit</h3>
              <p>빠른 데이터 앱 개발 프레임워크</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">SQL / NoSQL</h3>
              <p>다양한 데이터 소스 연동</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">데이터 시각화 프로젝트를 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">비주얼라이즈의 전문 데이터 시각화 서비스로 귀사의 데이터를 경쟁 우위로 전환하세요.</p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-lg">무료 상담 신청</Link>
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