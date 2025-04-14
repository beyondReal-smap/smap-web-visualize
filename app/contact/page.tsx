'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaMapMarkerAlt, FaTelegram, FaEnvelope } from 'react-icons/fa'

// 폼 데이터 타입 정의
interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
}

export default function Contact() {
  // 텔레그램 봇 토큰 및 채팅 ID
  const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '7701491070:AAH6wpf7wK5o7jq--mRlZWpE_rb3HIIjvBU';
  const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '6495247513';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // 전화번호 입력 처리 - 숫자만 입력 받고 자동 하이픈 추가
    if (name === 'phone') {
      // 숫자만 추출
      const numericValue = value.replace(/\D/g, '');
      
      // 하이픈 자동 추가 포맷팅
      let formattedValue = '';
      
      if (numericValue.length <= 3) {
        // 3자리 이하: 그대로 표시
        formattedValue = numericValue;
      } else if (numericValue.length <= 6) {
        // 4-6자리: 지역번호-국번 (02-123, 032-123 등)
        formattedValue = `${numericValue.slice(0, 2)}-${numericValue.slice(2)}`;
        
        // 3자리 지역번호 처리 (010, 070 등)
        if (['010', '011', '016', '017', '018', '019', '050', '070'].includes(numericValue.slice(0, 3))) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
        }
      } else if (numericValue.length <= 10) {
        // 7-10자리: 다양한 패턴 처리
        // 2자리 지역번호 (02-123-4567)
        if (numericValue.startsWith('02')) {
          formattedValue = `${numericValue.slice(0, 2)}-${numericValue.slice(2, 6)}-${numericValue.slice(6)}`;
        } 
        // 3자리 지역번호 (031-123-4567)
        else if (/^0(3[1-5]|4[1-4]|5[1-5]|6[1-4])/.test(numericValue)) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6)}`;
        } 
        // 휴대폰 번호 중간자리가 3자리인 경우 (010-123-4567)
        else if (['010', '011', '016', '017', '018', '019'].includes(numericValue.slice(0, 3)) && numericValue.length <= 9) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6)}`;
        }
        // 기타 패턴 (일반적인 3-3-4 패턴)
        else {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6)}`;
        }
      } else {
        // 11자리: 휴대폰 번호 (010-1234-5678)
        formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`;
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      // 일반 입력 필드 처리
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: '' });
    
    try {
      // 이메일 발송 함수 호출
      await sendEmail(formData);
      
      // 텔레그램 발송 함수 호출
      const telegramResult = await sendTelegram(formData);
      
      if (!telegramResult.success) {
        throw new Error("텔레그램 메시지 전송 실패: " + telegramResult.message);
      }
      
      // 성공 메시지 표시
      setSubmitStatus({
        show: true,
        success: true,
        message: '문의가 성공적으로 발송되었습니다. 곧 연락드리겠습니다.'
      });
      
      // 폼 초기화
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
      });
    } catch (error) {
      // 오류 메시지 표시
      console.error('Error sending inquiry:', error);
      setSubmitStatus({
        show: true,
        success: false,
        message: '문의 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 이메일 발송 함수
  const sendEmail = async (data: FormData) => {
    // 실제 구현 시에는 이 부분에 이메일 API 호출 코드가 들어갑니다
    // 예시로는 mailto 링크를 새 창에서 열어줍니다
    const subject = encodeURIComponent(`[문의] ${data.subject}`);
    const body = encodeURIComponent(
      `이름: ${data.name}\n` +
      `회사: ${data.company}\n` +
      `이메일: ${data.email}\n` +
      `연락처: ${data.phone}\n` +
      `관심 서비스: ${data.service}\n\n` +
      `${data.message}`
    );
    
    window.open(`mailto:admin@smap.site?subject=${subject}&body=${body}`);
    return Promise.resolve();
  };

  // 텔레그램 발송 함수
  const sendTelegram = async (data: FormData): Promise<{success: boolean, message: string}> => {
    try {
      // 텔레그램 메시지 텍스트 구성
      const text = `
📨 새 문의

제목: ${data.subject}
이름: ${data.name}
회사: ${data.company || '(입력 없음)'}
이메일: ${data.email}
연락처: ${data.phone || '(입력 없음)'}
관심 서비스: ${data.service || '(선택 없음)'}

${data.message}
      `.trim();

      // 텔레그램 API 호출
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        }),
      });

      const result = await response.json();
      
      if (!result.ok) {
        throw new Error(result.description || '알 수 없는 오류');
      }
      
      return { success: true, message: '메시지가 성공적으로 전송되었습니다.' };
    } catch (error: any) {
      console.error('Telegram API error:', error);
      
      // API 호출 실패 시 대체 방법으로 텔레그램 웹을 여는 링크 제공
      const message = encodeURIComponent(`📨 새 문의\n\n제목: ${data.subject}\n이름: ${data.name}\n이메일: ${data.email}\n\n${data.message}`);
      window.open(`https://t.me/smapvisual?text=${message}`);
      
      return { 
        success: false, 
        message: error.message || '텔레그램 메시지 전송 실패. 대신 텔레그램 채팅을 열었습니다.' 
      };
    }
  };

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
            
            {submitStatus.show && (
              <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일 <span className="text-red-600">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="숫자만 입력하세요 (예: 01012345678)"
                    maxLength={13}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">문의 제목 <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">관심 서비스</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">선택해주세요</option>
                  <option value="맞춤형 데이터 시각화">맞춤형 데이터 시각화</option>
                  <option value="맞춤형 인터랙티브 대시보드">맞춤형 인터랙티브 대시보드</option>
                  <option value="데이터 분석 컨설팅">데이터 분석 컨설팅</option>
                  <option value="맞춤형 보고서 작성">맞춤형 보고서 작성</option>
                  <option value="맞춤형 API 개발">맞춤형 API 개발</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용 <span className="text-red-600">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <span className="text-sm text-gray-700">개인정보 수집 및 이용에 동의합니다. <span className="text-red-600">*</span></span>
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className={`bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '전송 중...' : '문의하기'}
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  문의 내용은 이메일과 텔레그램으로 동시에 전송됩니다.
                </p>
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
                <a href="https://t.me/smapvisual" className="text-gray-600 hover:text-blue-600 block">
                  <p className="text-lg">@smapvisual<br />실시간 상담 가능</p>
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">이메일</h3>
                <a href="mailto:admin@smap.site" className="text-gray-600 hover:text-blue-600">
                  <p className="text-lg">admin@smap.site</p>
                </a>
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