import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from matplotlib import cm
from matplotlib.colors import LinearSegmentedColormap
import matplotlib.font_manager as fm
import platform
import os
from pathlib import Path
import urllib.request
import subprocess
import sys

# macOS용 한글 폰트 설정
def setup_korean_font_for_mac():
    print("macOS용 한글 폰트를 설정합니다...")
    
    # matplotlib 폰트 매니저 갱신
    fm._load_fontmanager(try_read_cache=False)
    
    # 사용 가능한 폰트 목록 확인
    available_fonts = [f.name for f in fm.fontManager.ttflist]
    print(f"사용 가능한 폰트 수: {len(available_fonts)}")
    
    # macOS에서 기본 제공하는 한글 폰트 설정
    if 'AppleGothic' in available_fonts:
        plt.rcParams['font.family'] = 'AppleGothic'
        print("AppleGothic 폰트가 성공적으로 설정되었습니다.")
    elif 'Apple SD Gothic Neo' in available_fonts:
        plt.rcParams['font.family'] = 'Apple SD Gothic Neo'
        print("Apple SD Gothic Neo 폰트가 성공적으로 설정되었습니다.")
    elif 'Malgun Gothic' in available_fonts:
        plt.rcParams['font.family'] = 'Malgun Gothic'
        print("Malgun Gothic 폰트가 성공적으로 설정되었습니다.")
    else:
        # 나머지 한글 폰트 찾기
        korean_fonts = [f for f in available_fonts if any(k in f.lower() for k in ['gothic', 'gulim', 'batang', '맑은', '나눔', '돋움'])]
        if korean_fonts:
            plt.rcParams['font.family'] = korean_fonts[0]
            print(f"{korean_fonts[0]} 폰트가 설정되었습니다.")
        else:
            print("한글 폰트를 찾을 수 없습니다. 영문 폰트만 사용합니다.")
            plt.rcParams['font.family'] = 'sans-serif'
    
    # 마이너스 기호 깨짐 방지
    plt.rcParams['axes.unicode_minus'] = False
    return True

# 폰트 설정 적용
setup_korean_font_for_mac()

# 시드 설정
np.random.seed(42)

# 영문 데이터로 변경 (한글이 표시되지 않을 경우 대비)
def generate_test_data():
    # 월별 데이터 (영문으로 변경)
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    # 제품별 월간 판매량
    product_a = np.random.randint(50, 100, 12)
    product_b = np.random.randint(30, 80, 12)
    product_c = np.random.randint(20, 60, 12)
    
    # 시간에 따른 온도 변화
    hours = np.arange(24)
    temperature = 20 + 5 * np.sin(np.linspace(0, 2*np.pi, 24)) + np.random.normal(0, 1, 24)
    
    # 지역별 제품 판매 비율 (영문으로 변경)
    regions = ['Seoul', 'Busan', 'Daegu', 'Incheon', 'Gwangju']
    sales_ratio = np.random.dirichlet(np.ones(5)) * 100
    
    # 상관관계 데이터 (영문으로 변경)
    n_samples = 100
    feature1 = np.random.normal(0, 1, n_samples)
    feature2 = feature1 * 0.8 + np.random.normal(0, 0.5, n_samples)
    feature3 = feature1 * -0.5 + np.random.normal(0, 0.7, n_samples)
    feature4 = feature2 * 0.6 + np.random.normal(0, 0.6, n_samples)
    feature5 = feature4 * 0.7 + np.random.normal(0, 0.4, n_samples)
    corr_data = pd.DataFrame({
        'Feature 1': feature1,
        'Feature 2': feature2,
        'Feature 3': feature3,
        'Feature 4': feature4,
        'Feature 5': feature5
    })
    
    return {
        'months': months,
        'product_a': product_a,
        'product_b': product_b,
        'product_c': product_c,
        'hours': hours,
        'temperature': temperature,
        'regions': regions,
        'sales_ratio': sales_ratio,
        'corr_data': corr_data
    }

# 그래프 스타일 설정 함수
def set_graph_style():
    # 폰트 크기 설정
    plt.rcParams['font.size'] = 12
    plt.rcParams['axes.titlesize'] = 16
    plt.rcParams['axes.labelsize'] = 14
    plt.rcParams['xtick.labelsize'] = 12
    plt.rcParams['ytick.labelsize'] = 12
    plt.rcParams['legend.fontsize'] = 12
    
    # 그래프 스타일 설정
    sns.set_style("whitegrid")
    
    # 그래프 색상 설정 (선택사항)
    plt.rcParams['axes.prop_cycle'] = plt.cycler(color=['#4374D9', '#6B9900', '#F2CB61', '#D96574', '#9B59B6'])

# 막대 그래프
def plot_bar_chart(data):
    plt.figure(figsize=(12, 6))
    set_graph_style()  # 스타일 설정 적용
    
    x = np.arange(len(data['months']))
    width = 0.25
    
    plt.bar(x - width, data['product_a'], width, label='Product A')
    plt.bar(x, data['product_b'], width, label='Product B')
    plt.bar(x + width, data['product_c'], width, label='Product C')
    
    plt.xlabel('Month')
    plt.ylabel('Sales')
    plt.title('Monthly Product Sales')
    plt.xticks(x, data['months'])
    plt.legend()
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.savefig('bar_chart.png', dpi=300)
    plt.show()

# 선 그래프
def plot_line_chart(data):
    plt.figure(figsize=(12, 6))
    set_graph_style()  # 스타일 설정 적용
    
    plt.plot(data['hours'], data['temperature'], marker='o', linestyle='-', linewidth=2, markersize=6)
    
    plt.xlabel('Hour')
    plt.ylabel('Temperature (°C)')
    plt.title('24-Hour Temperature Change')
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.savefig('line_chart.png', dpi=300)
    plt.show()

# 파이 차트
def plot_pie_chart(data):
    plt.figure(figsize=(10, 8))
    set_graph_style()  # 스타일 설정 적용
    
    colors = plt.cm.Spectral(np.linspace(0, 1, len(data['regions'])))
    explode = [0.05] * len(data['regions'])  # 모든 조각을 약간 분리
    
    plt.pie(
        data['sales_ratio'], 
        labels=data['regions'], 
        autopct='%1.1f%%',
        startangle=90, 
        explode=explode,
        colors=colors,
        shadow=True,
        wedgeprops={'edgecolor': 'white', 'linewidth': 1}
    )
    
    plt.title('Regional Product Sales Ratio')
    plt.axis('equal')
    plt.tight_layout()
    plt.savefig('pie_chart.png', dpi=300)
    plt.show()

# 히트맵
def plot_heatmap(data):
    plt.figure(figsize=(10, 8))
    set_graph_style()  # 스타일 설정 적용
    
    corr_matrix = data['corr_data'].corr()
    
    mask = np.triu(np.ones_like(corr_matrix, dtype=bool))
    cmap = sns.diverging_palette(230, 20, as_cmap=True)
    
    sns.heatmap(
        corr_matrix, 
        mask=mask,
        cmap=cmap,
        vmax=1, 
        vmin=-1,
        center=0,
        annot=True, 
        fmt='.2f',
        square=True, 
        linewidths=0.5,
        cbar_kws={"shrink": .8}
    )
    
    plt.title('Feature Correlation Heatmap')
    plt.tight_layout()
    plt.savefig('heatmap.png', dpi=300)
    plt.show()

# 모든 그래프 실행 함수
def visualize_all():
    data = generate_test_data()
    
    print("1. Creating Bar Chart...")
    plot_bar_chart(data)
    
    print("2. Creating Line Chart...")
    plot_line_chart(data)
    
    print("3. Creating Pie Chart...")
    plot_pie_chart(data)
    
    print("4. Creating Heatmap...")
    plot_heatmap(data)
    
    print("All visualizations completed successfully!")

if __name__ == "__main__":
    visualize_all() 