import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 회사 소개 헤더 섹션 */}
      <section className="bg-gray-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SMAP 소개
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              파이썬을 활용한 데이터 시각화 전문 기업으로, 복잡한 데이터를 가치 있는 인사이트로 변환합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 회사 비전 및 미션 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                비전 및 미션
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">비전</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    데이터 시각화의 혁신적인 접근으로 모든 기업이 데이터의 가치를 극대화할 수 있는 세상을 만듭니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">미션</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    최신 파이썬 기술을 활용한 맞춤형 시각화 솔루션으로 기업의 데이터 기반 의사결정을 지원합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">핵심 가치</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li><span className="font-medium">혁신</span> - 최신 기술로 시각화의 새로운 표준을 만듭니다</li>
                    <li><span className="font-medium">정확성</span> - 데이터의 정확한 표현으로 신뢰할 수 있는 인사이트를 제공합니다</li>
                    <li><span className="font-medium">맞춤화</span> - 고객의 니즈에 완벽히 부합하는 솔루션을 개발합니다</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-full w-full bg-blue-50 dark:bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center p-8">
              <Image 
                src="/company-vision.jpg" 
                alt="SMAP 회사 비전" 
                width={500} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 회사 연혁 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              SMAP의 성장 스토리
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              파이썬 시각화 전문 기업으로 발전해온 SMAP의 역사입니다.
            </p>
          </div>

          <div className="relative">
            {/* 타임라인 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>

            <div className="space-y-12">
              {/* 2019년 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">2019년 창립</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      SMAP 설립. 소규모 스타트업으로 시작하여 데이터 시각화 서비스를 제공하기 시작했습니다.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0"></div>
              </div>

              {/* 2020년 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">2020년 성장</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      첫 대형 금융사 프로젝트 수주. 대시보드 개발 서비스 라인 추가 및 팀 확장.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022년 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">2022년 혁신</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      자체 개발 시각화 라이브러리 출시. 제조업 및 의료 분야로 서비스 확장.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0"></div>
              </div>

              {/* 현재 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">현재</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      30명 이상의 전문가 팀 구성. 국내 다양한 기업들과 협업하며 시각화 시장을 선도하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              리더십 팀
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SMAP을 이끌어가는 전문가들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* CEO */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image 
                    src="/team-ceo.jpg" 
                    alt="CEO 프로필" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">홍길동</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">CEO & 창립자</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  데이터 시각화 분야에서 10년 이상의 경험을 가진 전문가. 대기업 데이터 분석팀 출신.
                </p>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image 
                    src="/team-cto.jpg" 
                    alt="CTO 프로필" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">김철수</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">CTO</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  파이썬 시각화 라이브러리 개발에 기여한 개발자. 시각화 엔진 설계 전문가.
                </p>
              </div>
            </div>

            {/* COO */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image 
                    src="/team-coo.jpg" 
                    alt="COO 프로필" 
                    width={128} 
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">이영희</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">COO</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  프로젝트 관리 전문가. 대규모 데이터 시각화 프로젝트를 성공적으로 이끈 경험 보유.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 