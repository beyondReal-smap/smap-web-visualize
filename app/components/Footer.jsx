'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaPaperPlane, FaTimes } from 'react-icons/fa';

export default function Footer() {
  const [showTelegramPopup, setShowTelegramPopup] = useState(false);
  const [telegramMessage, setTelegramMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ show: false, success: false, message: '' });

  // 텔레그램 봇 토큰 및 채팅 ID
  const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '7701491070:AAH6wpf7wK5o7jq--mRlZWpE_rb3HIIjvBU';
  const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '6495247513';

  const handleTelegramSubmit = async (e) => {
    e.preventDefault();
    if (!telegramMessage.trim()) return;
    
    setIsSending(true);
    setSendStatus({ show: false, success: false, message: '' });
    
    try {
      // 텔레그램 API 호출
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `📨 푸터에서 보낸 메시지:\n\n${telegramMessage}`,
        }),
      });

      const result = await response.json();
      
      if (!result.ok) {
        throw new Error(result.description || '알 수 없는 오류');
      }
      
      // 성공 메시지 설정
      setSendStatus({
        show: true, 
        success: true, 
        message: '메시지가 성공적으로 전송되었습니다.'
      });
      
      // 메시지 입력창 초기화
      setTelegramMessage('');
      
      // 3초 후 상태 메시지 숨기기
      setTimeout(() => {
        setSendStatus({ show: false, success: false, message: '' });
        setShowTelegramPopup(false);
      }, 3000);
      
    } catch (error) {
      console.error('Telegram API error:', error);
      
      // 오류 메시지 설정
      setSendStatus({
        show: true, 
        success: false, 
        message: '메시지 전송 실패. 다시 시도해주세요.'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* 로고와 설명 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">SmapVisual</h2>
            <p className="mb-4 max-w-md text-gray-400">
              고객의 니즈와 데이터 특성에 맞는 맞춤형 시각화 서비스를 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p className="mb-1">Beyond Real</p>
            <p className="mb-1">대표 : 정진 | 사업자등록번호 : 208-07-09695</p>
            <p className="mb-1">
              이메일 : <a href="mailto:admin@smap.site" className="text-gray-400 hover:text-white">admin@smap.site</a> | 
              텔레그램 : <button 
                           onClick={() => {
                             const defaultTemplate = `[문의 내용을 아래 양식에 맞춰 작성해 주세요]

이름: 
연락처(필수): 
이메일: 
문의 제목: 
문의 내용:`;
                             setTelegramMessage(defaultTemplate);
                             setShowTelegramPopup(true);
                           }} 
                           className="text-gray-400 hover:text-white underline bg-transparent border-none p-0 cursor-pointer inline"
                         >
                           @smapvisual
                         </button>
            </p>
            <p>경기도 김포시 김포한강9로75번길 66, 505-A237호 (국제프라자)</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://schedulemap.notion.site/2ac62e02f97b4d61945d68c2d89109e9?pvs=4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white text-sm"
            >
              개인정보 처리방침
            </a>
            <a 
              href="https://schedulemap.notion.site/30b32b5ad0bc4f99a39b28c0fe5f1de4?pvs=4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white text-sm"
            >
              이용약관
            </a>
          </div>
        </div>
      </div>

      {/* 텔레그램 메시지 팝업 */}
      {showTelegramPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md text-gray-800 relative">
            <button 
              onClick={() => setShowTelegramPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaTelegram size={28} className="text-blue-500 mr-3" />
                <h3 className="text-xl font-bold">텔레그램 메시지 보내기</h3>
              </div>

              <div className="mb-4 p-3 rounded-md bg-yellow-50 text-yellow-800 text-sm">
                <p className="font-medium mb-1">📝 안내사항</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>답변 받으실 연락처를 반드시 남겨주세요.</li>
                  <li>문의하신 내용은 확인 즉시 답변 드리도록 하겠습니다.</li>
                </ul>
              </div>
              
              {sendStatus.show && (
                <div className={`mb-4 p-3 rounded-md ${sendStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {sendStatus.message}
                </div>
              )}
              
              <form onSubmit={handleTelegramSubmit}>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={10}
                  placeholder="메시지를 입력하세요..."
                  value={telegramMessage}
                  onChange={(e) => setTelegramMessage(e.target.value)}
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className={`bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center w-full
                   ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                  disabled={isSending}
                >
                  {isSending ? '전송 중...' : (
                    <>
                      <FaPaperPlane className="mr-2" /> 메시지 보내기
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
} 