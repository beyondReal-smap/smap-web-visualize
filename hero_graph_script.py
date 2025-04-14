import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os
from matplotlib.colors import LinearSegmentedColormap

# 데이터 생성
np.random.seed(42)  # 재현성을 위한 시드 설정

# 날짜 범위 생성
dates = pd.date_range(start='2023-01-01', end='2023-12-31', freq='M')

# 비즈니스 성장 데이터 생성
revenue = np.random.randint(500, 1000, size=len(dates)) * 0.1
revenue = revenue * np.linspace(1, 1.8, len(dates))  # 상승 트렌드 적용

# 마케팅 캠페인 시작 지점
campaign_start = 4  # 5월에 마케팅 캠페인 시작

# 마케팅 효과 반영 (캠페인 이후 성장률 증가)
for i in range(campaign_start, len(revenue)):
    if i >= campaign_start:
        revenue[i] *= 1.15

# 고객만족도 데이터 생성
satisfaction = np.random.uniform(70, 85, size=len(dates))
for i in range(campaign_start, len(satisfaction)):
    satisfaction[i] += np.random.uniform(5, 10)  # 캠페인 이후 만족도 증가
satisfaction = np.clip(satisfaction, 0, 100)  # 100점 만점으로 제한

# 클릭 데이터 생성 (사이트 이용 분석)
clicks = np.random.randint(8000, 12000, size=len(dates))
for i in range(campaign_start, len(clicks)):
    clicks[i] *= 1.3  # 캠페인 이후 클릭수 증가

# 데이터 시각화
plt.figure(figsize=(10, 6), dpi=100)
plt.style.use('seaborn-v0_8-whitegrid')

# 고급스러운 색상 설정
main_color = '#4285F4'  # 파란색 계열
secondary_color = '#EA4335'  # 빨간색 계열
highlight_color = '#FBBC05'  # 노란색 계열

# 배경 색상 설정
plt.rcParams['figure.facecolor'] = 'white'
plt.rcParams['axes.facecolor'] = 'white'

# 폰트 설정
plt.rcParams['font.family'] = 'Helvetica'
plt.rcParams['font.weight'] = 'bold'

# 그래프 생성
ax1 = plt.subplot(111)

# 매출 데이터 그래프 (막대)
bars = ax1.bar(dates, revenue, alpha=0.7, color=main_color, width=15, label='Revenue (Million $)')

# 매출 증가율 추세선 추가
ax2 = ax1.twinx()
growth_rate = np.zeros_like(revenue)
for i in range(1, len(revenue)):
    growth_rate[i] = ((revenue[i] - revenue[i-1]) / revenue[i-1]) * 100

# 이동 평균으로 추세선 부드럽게
growth_smoothed = pd.Series(growth_rate).rolling(window=2).mean()
ax2.plot(dates, growth_smoothed, color=secondary_color, linewidth=3, marker='o', 
         markersize=8, label='Growth Rate (%)', alpha=0.8)

# 마케팅 캠페인 시작 지점 표시
ax1.axvline(x=dates[campaign_start], color=highlight_color, linestyle='--', linewidth=2, alpha=0.7)
ax1.annotate('Insight Discovery', 
            xy=(dates[campaign_start], revenue[campaign_start]),
            xytext=(15, 30),
            textcoords='offset points',
            arrowprops=dict(arrowstyle='->', color='black', alpha=0.6),
            fontsize=12, fontweight='bold', color='black')

# 그래프 타이틀 및 레이블
ax1.set_title('Business Performance Analysis & Insight Discovery', fontsize=16, fontweight='bold', pad=20)
ax1.set_xlabel('Date', fontsize=12, fontweight='bold')
ax1.set_ylabel('Revenue (Million $)', fontsize=12, fontweight='bold', color=main_color)
ax2.set_ylabel('Growth Rate (%)', fontsize=12, fontweight='bold', color=secondary_color)

# x축 날짜 포맷 설정
plt.xticks(dates[::2])  # 격월로 표시
ax1.set_xticklabels([d.strftime('%Y-%m') for d in dates[::2]], rotation=45)

# y축 범위 설정
ax1.set_ylim(0, max(revenue) * 1.2)
ax2.set_ylim(-5, max(growth_rate) * 1.3)

# 그리드 설정
ax1.grid(True, alpha=0.3)

# 범례 설정
lines1, labels1 = ax1.get_legend_handles_labels()
lines2, labels2 = ax2.get_legend_handles_labels()
ax1.legend(lines1 + lines2, labels1 + labels2, loc='upper left', frameon=True, 
           framealpha=0.9, edgecolor='gray', fontsize=10)

# 주석 - 인사이트 하이라이트
plt.annotate('Business Decision\nImprovement through\nData Analysis',
            xy=(dates[campaign_start+2], revenue[campaign_start+2]),
            xytext=(50, -30),
            textcoords='offset points',
            arrowprops=dict(arrowstyle='->', color='black', connectionstyle="arc3,rad=.2", alpha=0.6),
            fontsize=10, fontweight='bold', color='black',
            bbox=dict(boxstyle="round,pad=0.5", fc='white', ec=highlight_color, alpha=0.8))

# 마케팅 캠페인 효과 표시
avg_before = np.mean(revenue[:campaign_start])
avg_after = np.mean(revenue[campaign_start:])
increase_pct = ((avg_after - avg_before) / avg_before) * 100

plt.annotate(f'Performance Increase: +{increase_pct:.1f}%',
            xy=(dates[-3], revenue[-3]),
            xytext=(-50, 20),
            textcoords='offset points',
            bbox=dict(boxstyle="round,pad=0.5", fc='white', ec=main_color, alpha=0.8),
            fontsize=10, fontweight='bold', color='black')

# 레이아웃 조정
plt.tight_layout()

# 이미지 저장 디렉토리 확인 및 생성
os.makedirs('public/visualization', exist_ok=True)

# 그래프 저장
plt.savefig('public/visualization/hero_insight_graph.png', bbox_inches='tight', dpi=300)
plt.savefig('public/visualization/hero_insight_graph.jpg', bbox_inches='tight', dpi=300)
plt.close()

print("Hero section insight graph successfully created.") 