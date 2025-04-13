'use client';

import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '서비스 선택',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // 여기에 실제 API 호출 또는 폼 제출 로직을 구현합니다
    // 현재는 예시로 setTimeout을 사용하여 제출 성공을 시뮬레이션합니다
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // 폼 초기화
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '서비스 선택',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 문의하기 헤더 섹션 */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              문의하기
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              SMAP과 함께 데이터 시각화 프로젝트를 시작해보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 문의 폼 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                SMAP에 문의하세요
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                파이썬을 활용한 데이터 시각화 프로젝트에 관심이 있으신가요? 아래 양식을 작성하여 문의해주시면 24시간 이내에 답변 드리겠습니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">전화 문의</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      02-123-4567 (평일 9:00 - 18:00)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">이메일 문의</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      info@smap.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">주소</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      서울특별시 강남구 테헤란로 123 SMAP 빌딩 5층
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <svg className="mx-auto h-16 w-16 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="mt-6 text-2xl font-medium text-gray-900 dark:text-white">감사합니다!</h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                  >
                    다른 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      회사명
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      연락처
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      관심 서비스 *
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="서비스 선택">서비스 선택</option>
                      <option value="데이터 시각화">데이터 시각화</option>
                      <option value="대시보드 개발">대시보드 개발</option>
                      <option value="지리정보 시각화">지리정보 시각화</option>
                      <option value="맞춤형 솔루션">맞춤형 솔루션</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      문의 내용 *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                        submitting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                    >
                      {submitting ? '제출 중...' : '문의하기'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              서비스를 이용하시기 전에 궁금하신 점을 확인하세요.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                프로젝트 진행 기간은 얼마나 걸리나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                프로젝트의 규모와 복잡성에 따라 다르지만, 일반적인 시각화 프로젝트는 2-4주, 복잡한 대시보드는 4-8주 정도 소요됩니다. 구체적인 일정은 요구사항 분석 후 안내해 드립니다.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                데이터가 없어도 시각화 서비스를 이용할 수 있나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                네, 가능합니다. SMAP은 데이터 수집부터 전처리, 시각화까지 전 과정을 지원합니다. 필요한 데이터 수집 방법에 대해 상담해 드립니다.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                시각화 결과물을 어떤 형태로 받을 수 있나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                정적 이미지(PNG, JPG, PDF), 인터랙티브 HTML 파일, 웹 대시보드, 임베딩 가능한 iframe 등 다양한 형태로 제공 가능합니다. 필요에 따라 API 연동도 지원합니다.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                대시보드 유지보수는 어떻게 진행되나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                정기적인 유지보수 계약을 통해 지속적인 업데이트와 기술 지원을 제공합니다. 월간, 분기별, 연간 등 다양한 유지보수 계약이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 