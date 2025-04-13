import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                파이썬 시각화의 <span className="text-yellow-300">새로운 기준</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                데이터를 인사이트로 변환하는 전문 시각화 서비스, SMAP과 함께 데이터의 가치를 극대화하세요.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/services" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-center">
                  서비스 알아보기
                </Link>
                <Link href="/contact" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-center">
                  상담 신청하기
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-80 w-full">
                <div className="absolute inset-0 bg-white/10 rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="p-8">
                    <Image 
                      src="/visualization.png" 
                      alt="데이터 시각화 예시" 
                      width={400} 
                      height={300}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              전문적인 파이썬 시각화 서비스
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SMAP은 최신 파이썬 라이브러리를 활용한 고품질 데이터 시각화 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                데이터 분석 및 시각화
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                복잡한 데이터를 명확하고 이해하기 쉬운 시각적 인사이트로 변환해 드립니다. Matplotlib, Seaborn, Plotly 등 다양한 라이브러리를 활용합니다.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                대시보드 개발
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dash, Streamlit, Bokeh를 활용한 인터랙티브 대시보드 개발 서비스를 제공합니다. 실시간 데이터 모니터링이 가능합니다.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                맞춤형 시각화 솔루션
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                기업 요구사항에 맞춘 맞춤형 시각화 솔루션을 개발합니다. 고급 지리정보 시각화, 3D 그래픽, 애니메이션 등을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 사례 섹션 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              고객 성공 사례
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SMAP의 시각화 서비스로 성공을 경험한 고객사들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">A 금융사 데이터 분석 프로젝트</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  투자 패턴 분석을 위한 다양한 시각화 솔루션을 제공하여 의사결정 시간을 30% 단축하는 데 기여했습니다.
                </p>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 dark:text-white font-medium">김OO 이사</p>
                    <p className="text-gray-500 dark:text-gray-400">A 금융사 데이터 분석팀</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">B 제조기업 생산성 모니터링</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  실시간 생산 데이터 시각화 대시보드를 구축하여 생산 효율성을 15% 향상시키는 성과를 거두었습니다.
                </p>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 dark:text-white font-medium">이OO 부장</p>
                    <p className="text-gray-500 dark:text-gray-400">B 제조기업 스마트팩토리팀</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
              더 많은 사례 보기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            SMAP과 함께 데이터를 가치있게 만들어보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            귀사의 데이터를 전문적인 시각화로 최대한의 인사이트를 도출할 수 있도록 도와드립니다.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg">
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
