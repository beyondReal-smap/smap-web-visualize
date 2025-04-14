'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function VisualizationCarousel() {
  // 시각화 이미지 파일 목록
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 하드코딩된 이미지 경로 목록
  // 실제 파일이 저장되면 이 목록을 업데이트하세요
  const images = [
    '/visualization/pie_chart.png',
    '/visualization/bar_chart.png',
    '/visualization/line_chart.png',
    '/visualization/heatmap.png',
    '/visualization/3d_plot.png',
    '/visualization/network_graph.png',
    '/visualization/sankey_chart.png',
    '/visualization/treemap.png'
  ];
  
  useEffect(() => {
    // 3초마다 이미지 변경
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // 수동으로 이미지 변경하는 함수
  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };
  
  return (
    <div className="relative w-full bg-white p-6 rounded-lg shadow-lg">
      <div className="relative w-full h-[400px] mb-8">
        {/* 현재 이미지 */}
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`데이터 시각화 예시 ${index + 1}`}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        ))}
        
        {/* 네비게이션 버튼 */}
        <button
          onClick={goToPrevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
          aria-label="이전 이미지"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
          aria-label="다음 이미지"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* 인디케이터 */}
      <div className="flex justify-center space-x-2 pb-4 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`이미지 ${index + 1}로 이동`}
          />
        ))}
      </div>
      
      <div className="text-center mt-4 pb-2 text-gray-600 text-sm">
        <p>← 좌우 화살표로 다양한 그래프를 확인하세요 →</p>
      </div>
    </div>
  );
}
