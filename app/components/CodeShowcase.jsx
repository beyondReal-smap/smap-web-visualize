'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaCode } from 'react-icons/fa';

const CodeShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // 코드 샘플 직접 정의
  const codeSamples = [
    {
      title: "데이터 로드 및 준비",
      code: `import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from matplotlib.gridspec import GridSpec
from matplotlib.patches import Patch
import seaborn as sns

# 데이터 생성 함수
def generate_report_data():
    # 날짜 (최근 12개월)
    dates = pd.date_range(start='2023-01-01', end='2023-12-31', freq='M')
    dates_str = [date.strftime('%Y-%m') for date in dates]
    
    # 주요 KPI 데이터
    revenue = [np.random.randint(80, 120) * 1000000 for _ in range(12)]
    profit = [rev * np.random.uniform(0.15, 0.3) for rev in revenue]
    customer_count = [int(rev / np.random.randint(50000, 70000)) for rev in revenue]
    avg_purchase = [rev / cust for rev, cust in zip(revenue, customer_count)]
    
    return {
        'dates': dates_str,
        'revenue': revenue,
        'profit': profit,
        'customer_count': customer_count,
        'avg_purchase': avg_purchase
    }`
    },
    {
      title: "보고서 레이아웃 설정",
      code: `# A4 사이즈(210mm x 297mm)로 설정 (8.27 x 11.69 inches)
fig = plt.figure(figsize=(8.27, 11.69), dpi=300)

# 그래프 간 간격 넓히기 - 더 증가
gs = GridSpec(4, 2, figure=fig, height_ratios=[0.6, 1.3, 1.3, 1.3], 
             hspace=0.6, wspace=0.45,  # 수직/수평 간격 설정
             left=0.1, right=0.9, bottom=0.05, top=0.96)  # 여백 설정

# 그래프 폰트 크기 전역 설정
plt.rcParams['font.size'] = 8  # 기본 폰트 크기
plt.rcParams['axes.titlesize'] = 10  # 제목 크기
plt.rcParams['axes.labelsize'] = 8  # 축 레이블 크기
plt.rcParams['axes.titleweight'] = 'bold'  # 모든 제목 굵게 설정
plt.rcParams['axes.labelweight'] = 'bold'  # 모든 축 라벨 굵게 설정

# Color setup - modern and balanced palette
colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#FF6D01', '#46BDC6']

# 보고서 제목 설정
fig.suptitle('ABC Company Sales Performance Analysis Report 2024', 
            fontsize=14, fontweight='bold', y=0.99, color='#333333')
fig.text(0.5, 0.96, 'January - December 2024', ha='center', fontsize=10, 
        color='#666666', fontstyle='italic')`
    },
    {
      title: "KPI 요약 상자 생성",
      code: `# KPI 요약 상자 생성
kpi_ax = fig.add_subplot(gs[0, :])
kpi_ax.axis('off')
kpi_ax.set_facecolor('white')

# KPI 상자 스타일 설정
kpi_style_positive = dict(
    boxstyle="round,pad=1.0",
    fc="white",
    ec="#4285F4",
    lw=1.5
)

# KPI 값 표시
revenue_text = "Total Revenue\\n$120.5M\\n+ 23.7% Growth"
kpi_ax.text(0.125, 0.5, revenue_text, ha='center', va='center', 
          size=9, bbox=kpi_style_positive, color='#4285F4', fontweight='bold')`
    },
    {
      title: "월별 매출 및 이익 트렌드 그래프",
      code: `# 월별 매출 및 이익 트렌드 그래프
ax1 = fig.add_subplot(gs[1, 0])
ax1.set_facecolor('white')
ax1.set_title('Monthly Revenue & Profit Trends', fontsize=10, pad=8, fontweight='bold')

# 막대 그래프로 매출 표시
bars = ax1.bar(data['dates'], data['revenue'], color=colors[0], alpha=0.7, label='Revenue')

# x축 틱 라벨 회전
plt.setp(ax1.get_xticklabels(), rotation=45, ha='right')

# 두 번째 y축에 이익 표시
ax1_twin = ax1.twinx()
ax1_twin.plot(data['dates'], data['profit'], color=colors[1], marker='o', 
             linewidth=3, label='Profit')`
    },
    {
      title: "판매 채널 분포 파이 차트",
      code: `# 판매 채널 분포 파이 차트
ax2 = fig.add_subplot(gs[1, 1])
ax2.set_facecolor('white')
ax2.set_title('Sales Channel Distribution', fontsize=10, pad=8, fontweight='bold')

channel_totals = {channel: sum(data['channel_data'][channel]) for channel in data['channel_data']}
channels = list(channel_totals.keys())
channel_values = list(channel_totals.values())

# 가장 큰 조각에 explode 효과 주기
max_idx = channel_values.index(max(channel_values))
explode = [0.05 if i == max_idx else 0 for i in range(len(channel_values))]

# 파이 차트 생성
wedges, texts, autotexts = ax2.pie(channel_values, labels=None, autopct='%1.1f%%', 
                                  startangle=90, colors=colors[:len(channels)],
                                  explode=explode, shadow=True)`
    },
    {
      title: "제품 카테고리별 판매 그래프",
      code: `# 제품 카테고리별 판매 그래프
ax3 = fig.add_subplot(gs[2, 0])
ax3.set_facecolor('white')
ax3.set_title('Sales by Product Category', fontsize=10, pad=8, fontweight='bold')

categories = list(data['category_data'].keys())
category_values = list(data['category_data'].values())

# 값으로 카테고리 정렬
sorted_indices = np.argsort(category_values)
sorted_categories = [categories[i] for i in sorted_indices]
sorted_values = [category_values[i] for i in sorted_indices]

# 그라디언트 색상의 수평 막대
color_map = plt.cm.Blues(np.linspace(0.4, 0.8, len(sorted_categories)))`
    },
    {
      title: "보고서 저장 및 출력",
      code: `# 레이아웃 조정
plt.tight_layout()

# 이미지 저장 디렉토리 확인 및 생성
import os
os.makedirs('public/visualization', exist_ok=True)

# 그래프 저장
plt.savefig('public/visualization/english_custom_report.png', 
           dpi=300, bbox_inches='tight', format='png')
           
# PDF 형식으로도 저장
plt.savefig('public/visualization/english_custom_report.pdf', 
           bbox_inches='tight', format='pdf')

print("Enhanced custom business report image successfully created in English (A4 format).")`
    }
  ];

  // 자동 슬라이드 기능
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % codeSamples.length);
      }, 8000); // 8초마다 변경
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, codeSamples.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % codeSamples.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + codeSamples.length) % codeSamples.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
      <div className="flex items-center mb-4">
        <FaCode className="text-blue-600 mr-2" size={24} />
        <h3 className="text-xl font-bold">파이썬 데이터 시각화 코드</h3>
        <div className="ml-auto flex items-center space-x-1">
          <span className="text-sm text-gray-500">
            {currentSlide + 1}/{codeSamples.length}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <h4 className="text-md font-semibold text-blue-600 mb-2">{codeSamples[currentSlide].title}</h4>
      </div>

      <div 
        className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto font-mono text-sm"
        style={{ maxHeight: '480px', minHeight: '320px' }}
      >
        <pre>{codeSamples[currentSlide].code}</pre>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button 
          onClick={prevSlide}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 rounded-md transition-colors ${
            isAutoPlaying ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {isAutoPlaying ? '자동 재생 중지' : '자동 재생'}
        </button>

        <button 
          onClick={nextSlide}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CodeShowcase; 