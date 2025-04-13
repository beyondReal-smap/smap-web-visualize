import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 포트폴리오 헤더 섹션 */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              포트폴리오
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              SMAP의 파이썬 시각화 프로젝트 사례를 소개합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 포트폴리오 필터 */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              전체보기
            </button>
            <button className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              대시보드
            </button>
            <button className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              차트/그래프
            </button>
            <button className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              지리정보
            </button>
          </div>
        </div>
      </section>

      {/* 포트폴리오 그리드 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 포트폴리오 아이템 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/portfolio/finance-dashboard.jpg"
                  alt="금융 대시보드"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-md mb-2">
                  대시보드
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  금융 투자 분석 대시보드
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Dash와 Plotly를 활용한 금융 투자 포트폴리오 분석 대시보드. 실시간 주가 데이터를 시각화하고 투자 성과를 추적합니다.
                </p>
                <Link href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* 포트폴리오 아이템 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/portfolio/geo-visualization.jpg"
                  alt="지리정보 시각화"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded-md mb-2">
                  지리정보
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  소비자 행동 지리정보 분석
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Folium과 GeoPandas를 활용하여 소비자 행동 패턴을 지리적으로 시각화. 마케팅 전략 수립에 필수적인 인사이트를 제공합니다.
                </p>
                <Link href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* 포트폴리오 아이템 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/portfolio/time-series.jpg"
                  alt="시계열 분석"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-md mb-2">
                  차트/그래프
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  제조업 시계열 데이터 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Matplotlib과 Seaborn을 활용한 제조업 생산 데이터 시계열 분석. 생산성 패턴과 이상치를 시각적으로 식별합니다.
                </p>
                <Link href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* 포트폴리오 아이템 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/portfolio/healthcare-dashboard.jpg"
                  alt="헬스케어 대시보드"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-md mb-2">
                  대시보드
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  환자 모니터링 대시보드
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Streamlit과 Altair를 활용한 의료 데이터 모니터링 시스템. 병원 환자 데이터를 실시간으로 시각화하여 의료진의 의사결정을 지원합니다.
                </p>
                <Link href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* 포트폴리오 아이템 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/portfolio/ml-visualization.jpg"
                  alt="머신러닝 시각화"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-md mb-2">
                  차트/그래프
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  머신러닝 모델 성능 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  scikit-learn과 Matplotlib을 활용한 머신러닝 모델 성능 시각화. 다양한 알고리즘의 성능을 비교하고 최적의 모델을 선택할 수 있습니다.
                </p>
                <Link href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* 포트폴리오 아이템 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/portfolio/traffic-map.jpg"
                  alt="교통 흐름 지도"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded-md mb-2">
                  지리정보
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  도시 교통 흐름 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Folium과 Bokeh를 활용한 도시 교통 데이터 시각화. 실시간 교통 흐름을 분석하고 교통 체증을 예측하는 인터랙티브 지도를 개발했습니다.
                </p>
                <Link href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>

          {/* 페이지네이션 */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center">
              <button className="px-4 py-2 mx-1 rounded-md bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                이전
              </button>
              <button className="px-4 py-2 mx-1 rounded-md bg-indigo-600 text-white font-medium">
                1
              </button>
              <button className="px-4 py-2 mx-1 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                2
              </button>
              <button className="px-4 py-2 mx-1 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                3
              </button>
              <button className="px-4 py-2 mx-1 rounded-md bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                다음
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            맞춤형 시각화 프로젝트가 필요하신가요?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            SMAP은 귀사의 요구사항에 맞는 최적의 시각화 솔루션을 제공합니다.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-lg font-medium text-lg">
            프로젝트 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
} 