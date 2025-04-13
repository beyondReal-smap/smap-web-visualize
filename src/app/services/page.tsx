import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 서비스 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SMAP 서비스
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              파이썬 기반 데이터 시각화의 모든 것, SMAP이 전문적으로 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 서비스 개요 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              SMAP의 파이썬 시각화 서비스
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              다양한 산업 분야에 맞춤형 데이터 시각화 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  비즈니스 인텔리전스 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  파이썬을 활용한 강력한 비즈니스 인텔리전스 시각화 솔루션을 제공합니다. 복잡한 데이터를 의사결정에 도움이 되는 명확한 시각적 정보로.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>대시보드 개발 및 유지보수</li>
                  <li>실시간 데이터 시각화</li>
                  <li>고급 분석 및 예측 시각화</li>
                </ul>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 dark:bg-green-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  과학 및 연구 데이터 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  과학 및 연구 데이터를 위한 전문적인 시각화 서비스를 제공합니다. 복잡한 연구 결과를 명확하게 시각화하여 연구의 가치를 높입니다.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>연구 논문용 그래프 및 차트</li>
                  <li>실험 데이터 시각화</li>
                  <li>논문 출판 퀄리티 시각자료</li>
                </ul>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  금융 데이터 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  금융 데이터를 위한 맞춤형 시각화 솔루션을 제공합니다. 복잡한 금융 정보를 직관적으로 이해할 수 있는 시각자료로 변환합니다.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>트레이딩 차트 및 모니터링 도구</li>
                  <li>금융 리스크 시각화</li>
                  <li>투자 포트폴리오 분석</li>
                </ul>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100 dark:bg-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  지리정보 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  지리정보 데이터를 활용한 고급 시각화 서비스를 제공합니다. 지리적 데이터를 통해 새로운 인사이트를 발견할 수 있습니다.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>인터랙티브 지도 시각화</li>
                  <li>지역 데이터 분석</li>
                  <li>공간 정보 시각화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 활용 라이브러리 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              활용 기술 및 라이브러리
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SMAP은 최신 파이썬 시각화 라이브러리와 기술을 활용합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Matplotlib</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                다양한 정적 그래프 작성을 위한 기본 라이브러리
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Seaborn</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                통계 데이터 시각화에 특화된 라이브러리
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Plotly</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                인터랙티브 시각화를 위한 고급 라이브러리
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dash</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                웹 기반 대시보드 개발 프레임워크
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bokeh</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                인터랙티브 웹 시각화 라이브러리
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Streamlit</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                데이터 앱 빠른 개발 프레임워크
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Folium</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                지리정보 시각화 라이브러리
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Altair</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                선언적 시각화 라이브러리
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 프로세스 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              서비스 프로세스
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SMAP의 시각화 서비스는 체계적인 프로세스를 통해 진행됩니다.
            </p>
          </div>

          <div className="relative">
            {/* 프로세스 라인 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 dark:bg-blue-900 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 dark:bg-blue-500 rounded-full text-white text-xl font-bold">1</div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">요구사항 분석</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    고객의 데이터와 비즈니스 목표를 깊이 이해합니다.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 dark:bg-blue-500 rounded-full text-white text-xl font-bold">2</div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">데이터 전처리</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    시각화에 적합하도록 데이터를 정제하고 구조화합니다.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 dark:bg-blue-500 rounded-full text-white text-xl font-bold">3</div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">시각화 개발</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    최적의 시각화 방법을 선택하고 개발합니다.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 dark:bg-blue-500 rounded-full text-white text-xl font-bold">4</div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">배포 및 유지보수</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    시각화 솔루션을 배포하고 지속적인 지원을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            지금 SMAP의 시각화 서비스를 경험해보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            파이썬 기반 데이터 시각화의 새로운 차원을 발견하세요.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/portfolio" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-center">
              포트폴리오 보기
            </Link>
            <Link href="/contact" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-center">
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 