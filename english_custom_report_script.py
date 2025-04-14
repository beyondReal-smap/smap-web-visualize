import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import matplotlib.dates as mdates
from matplotlib.gridspec import GridSpec
from matplotlib.patches import Patch
import os
from datetime import datetime, timedelta
import seaborn as sns
from matplotlib.legend_handler import HandlerPathCollection

# Style setup
plt.style.use('default')
plt.rcParams['font.family'] = 'Helvetica'
plt.rcParams['axes.facecolor'] = 'white'
plt.rcParams['figure.facecolor'] = 'white'
plt.rcParams['axes.grid'] = True
plt.rcParams['grid.alpha'] = 0.2
plt.rcParams['axes.labelcolor'] = '#555555'
plt.rcParams['axes.titlecolor'] = '#333333'
plt.rcParams['axes.edgecolor'] = '#dddddd'
plt.rcParams['xtick.color'] = '#555555'
plt.rcParams['ytick.color'] = '#555555'

# Generate sample data
def generate_report_data():
    # Dates (past 12 months)
    today = datetime.now()
    end_date = datetime(today.year, today.month, 1) - timedelta(days=1)
    dates = [end_date - timedelta(days=30*i) for i in range(11, -1, -1)]
    dates_str = [date.strftime('%Y-%m') for date in dates]
    
    # Key KPI data
    revenue = [np.random.randint(80, 120) * 1000000 for _ in range(12)]  # Revenue
    profit = [rev * np.random.uniform(0.15, 0.3) for rev in revenue]  # Profit
    customer_count = [int(rev / np.random.randint(50000, 70000)) for rev in revenue]  # Customer count
    avg_purchase = [rev / cust for rev, cust in zip(revenue, customer_count)]  # Avg purchase
    
    # Sales channels data
    channels = ['Online', 'Offline', 'Mobile App', 'Partners']
    channel_data = {}
    for channel in channels:
        channel_data[channel] = [np.random.randint(10, 50) * 1000000 for _ in range(12)]
    
    # Product categories data
    categories = ['Electronics', 'Clothing', 'Food', 'Furniture', 'Cosmetics']
    category_data = {}
    for category in categories:
        category_data[category] = np.random.randint(5, 25) * 10000000
    
    # Regional sales data
    regions = ['Seoul', 'Gyeonggi', 'Busan', 'Daegu', 'Incheon', 'Gwangju', 'Daejeon', 'Ulsan', 'Gyeongnam', 'Gyeongbuk']
    region_data = {}
    for region in regions:
        region_data[region] = np.random.randint(1, 10) * 10000000
    
    # Customer segments data
    segments = ['VIP', 'Loyal', 'Regular', 'Inactive']
    segment_data = {
        'count': [np.random.randint(50, 200) for _ in range(4)],
        'avg_purchase': [np.random.randint(50, 300) * 10000 for _ in range(4)],
        'retention_rate': [np.random.uniform(0.8, 0.95), np.random.uniform(0.6, 0.8), 
                          np.random.uniform(0.3, 0.6), np.random.uniform(0.1, 0.3)]
    }
    
    return {
        'dates': dates_str,
        'revenue': revenue,
        'profit': profit,
        'customer_count': customer_count,
        'avg_purchase': avg_purchase,
        'channel_data': channel_data,
        'category_data': category_data,
        'region_data': region_data,
        'segments': segments,
        'segment_data': segment_data
    }

def create_custom_report():
    # Generate data
    data = generate_report_data()
    
    # Clear any previous figures to avoid overlap
    plt.close('all')
    
    # A4 사이즈(210mm x 297mm)로 설정 (8.27 x 11.69 inches)
    fig = plt.figure(figsize=(8.27, 11.69), dpi=300)
    
    # 그래프 간 간격 넓히기 - 더 증가
    gs = GridSpec(4, 2, figure=fig, height_ratios=[0.6, 1.3, 1.3, 1.3], 
                 hspace=0.6, wspace=0.45,  # 수직/수평 간격 더 증가
                 left=0.1, right=0.9, bottom=0.05, top=0.96)  # 좌우 여백도 증가
    
    # 그래프 폰트 크기 전역 설정
    plt.rcParams['font.size'] = 8  # 기본 폰트 크기 줄임
    plt.rcParams['axes.titlesize'] = 10  # 제목 크기 줄임
    plt.rcParams['axes.labelsize'] = 8  # 축 레이블 크기 줄임
    plt.rcParams['xtick.labelsize'] = 7  # x축 틱 라벨 크기 줄임
    plt.rcParams['ytick.labelsize'] = 7  # y축 틱 라벨 크기 줄임
    plt.rcParams['legend.fontsize'] = 7  # 범례 폰트 크기 줄임
    plt.rcParams['axes.titleweight'] = 'bold'  # 모든 제목 굵게 설정
    plt.rcParams['axes.labelweight'] = 'bold'  # 모든 축 라벨 굵게 설정
    plt.rcParams['legend.title_fontsize'] = 8  # 범례 제목 크기 설정
    
    # Color setup - modern and balanced palette
    colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#FF6D01', '#46BDC6', '#7A5195', '#003F5C']
    
    # Set background to pure white
    fig.patch.set_facecolor('white')
    
    # Section colors for category distinction
    section_colors = ['#e6f2ff', '#fff2e6', '#f2ffe6', '#ffe6f2']
    
    # Report title 위치 조정 - 제목과 부제목 간격 벌리기
    fig.suptitle('ABC Company Sales Performance Analysis Report 2024', 
                 fontsize=14, fontweight='bold', y=0.99, color='#333333')
    fig.text(0.5, 0.96, 'January - December 2024', ha='center', fontsize=10, color='#666666', fontstyle='italic')
    
    # Company logo placeholder (uncomment and modify if you have a logo)
    # from matplotlib.offsetbox import OffsetImage, AnnotationBbox
    # logo = plt.imread('logo.png')
    # imagebox = OffsetImage(logo, zoom=0.15)
    # ab = AnnotationBbox(imagebox, (0.06, 0.98), frameon=False, xycoords='figure fraction')
    # fig.add_artist(ab)
    
    # Key KPI summary
    current_revenue = data['revenue'][-1]
    current_profit = data['profit'][-1]
    current_customers = data['customer_count'][-1]
    current_avg_purchase = data['avg_purchase'][-1]
    
    # Growth rate calculation
    revenue_growth = (data['revenue'][-1] - data['revenue'][0]) / data['revenue'][0] * 100
    profit_growth = (data['profit'][-1] - data['profit'][0]) / data['profit'][0] * 100
    customer_growth = (data['customer_count'][-1] - data['customer_count'][0]) / data['customer_count'][0] * 100
    
    # KPI summary boxes
    kpi_ax = fig.add_subplot(gs[0, :])
    kpi_ax.axis('off')
    kpi_ax.set_facecolor('white')  # Ensure the background is white
    
    # Enhanced KPI box style for A4 size
    kpi_style_positive = dict(
        boxstyle="round,pad=1.0",  # Slightly smaller padding for A4
        fc="white",
        ec="#4285F4",
        lw=1.5  # Slightly thinner border for A4
    )
    
    kpi_style_neutral = dict(
        boxstyle="round,pad=1.0",  # Slightly smaller padding for A4
        fc="white",
        ec="#FBBC05",
        lw=1.5  # Slightly thinner border for A4
    )

    # Shadow effect function
    def add_shadow(ax, text, x, y, **kwargs):
        shadow_kwargs = kwargs.copy()
        if 'bbox' in shadow_kwargs:
            shadow_bbox = shadow_kwargs['bbox'].copy()
            shadow_bbox['fc'] = '#cccccc'
            shadow_bbox['ec'] = '#cccccc'
            shadow_kwargs['bbox'] = shadow_bbox
        shadow_kwargs['color'] = '#cccccc'
        
        ax.text(x+0.003, y-0.003, text, **shadow_kwargs)
        return ax.text(x, y, text, **kwargs)
    
    # Value text sizes adjusted for A4 - reduced
    kpi_text_size = 9
    
    # KPI values display with enhanced styling
    # Revenue KPI
    revenue_text = f"Total Revenue\n${current_revenue/1000000:.1f}M"
    if revenue_growth > 0:
        revenue_text += f"\n+ {revenue_growth:.1f}% Growth"
        revenue_color = '#4285F4'  # 녹색에서 파란색으로 변경
    else:
        revenue_text += f"\n- {abs(revenue_growth):.1f}% Decline"
        revenue_color = '#EA4335'  # Red for negative growth
    
    add_shadow(kpi_ax, revenue_text, 0.125, 0.5, ha='center', va='center', size=kpi_text_size, 
              bbox=kpi_style_positive, color=revenue_color, fontweight='bold')
    
    # Profit KPI
    profit_text = f"Operating Profit\n${current_profit/1000000:.1f}M"
    if profit_growth > 0:
        profit_text += f"\n+ {profit_growth:.1f}% Growth"
        profit_color = '#4285F4'  # 녹색에서 파란색으로 변경
    else:
        profit_text += f"\n- {abs(profit_growth):.1f}% Decline"
        profit_color = '#EA4335'
        
    add_shadow(kpi_ax, profit_text, 0.375, 0.5, ha='center', va='center', size=kpi_text_size, 
              bbox=kpi_style_positive, color=profit_color, fontweight='bold')
    
    # Customer KPI
    customer_text = f"Total Customers\n{current_customers:,}"
    if customer_growth > 0:
        customer_text += f"\n+ {customer_growth:.1f}% Growth"
        customer_color = '#4285F4'  # 녹색에서 파란색으로 변경
    else:
        customer_text += f"\n- {abs(customer_growth):.1f}% Decline"
        customer_color = '#EA4335'
        
    add_shadow(kpi_ax, customer_text, 0.625, 0.5, ha='center', va='center', size=kpi_text_size, 
              bbox=kpi_style_positive, color=customer_color, fontweight='bold')
    
    # Average Purchase KPI
    avg_purchase_text = f"Avg Purchase Value\n${current_avg_purchase/10000:.1f}K\n(YoY Comparison)"
    add_shadow(kpi_ax, avg_purchase_text, 0.875, 0.5, ha='center', va='center', size=kpi_text_size, 
              bbox=kpi_style_neutral, color='#333333', fontweight='bold')

    # Add separator line under KPIs - 구분선 위치를 0.83에서 0.87로 변경하여 더 위로 올림
    fig.add_artist(plt.Line2D([0.05, 0.95], [0.87, 0.87], color='#dddddd', linewidth=2, transform=fig.transFigure))
    
    # 1. Monthly revenue and profit trends with enhanced styling
    ax1 = fig.add_subplot(gs[1, 0])
    ax1.set_facecolor('white')
    ax1.set_title('Monthly Revenue & Profit Trends', fontsize=10, pad=8, fontweight='bold')
    
    # Enhanced bar chart with gradient
    bars = ax1.bar(data['dates'], data['revenue'], color=colors[0], alpha=0.7, label='Revenue')
    
    # 모든 x축 틱 라벨 45도 회전 및 오른쪽 정렬
    plt.setp(ax1.get_xticklabels(), rotation=45, ha='right')
    
    # Add value annotations to the bars - 45도 회전
    for bar in bars:
        height = bar.get_height()
        ax1.text(bar.get_x() + bar.get_width()/2., height + 0.02*max(data['revenue']),
                f'${height/1000000:.1f}M', ha='right', va='bottom', fontsize=6, color="#555555", rotation=45)
    
    ax1_twin = ax1.twinx()
    ax1_twin.plot(data['dates'], data['profit'], color=colors[1], marker='o', linewidth=3, 
                 label='Profit', markersize=8, markerfacecolor=colors[1], markeredgecolor='white', markeredgewidth=1.5)
    
    # Add profit value annotations - reduced size
    for i, val in enumerate(data['profit']):
        ax1_twin.annotate(f'${val/1000000:.1f}M', 
                         (data['dates'][i], val), 
                         xytext=(0, 10),
                         textcoords='offset points',
                         ha='center', va='bottom',
                         fontsize=6,  # 더 작게
                         color=colors[1])
    
    # Axis label setup with enhanced styling - adjusted for A4
    ax1.set_xlabel('Month', fontsize=8, fontweight='bold')
    ax1.set_ylabel('Revenue ($ Million)', fontsize=8, color=colors[0], fontweight='bold')
    ax1_twin.set_ylabel('Profit ($ Million)', fontsize=8, color=colors[1], fontweight='bold')
    
    # y-axis unit conversion
    ax1.set_ylim(0, max(data['revenue']) * 1.15)
    ax1.set_yticks(np.arange(0, max(data['revenue']) * 1.15, 20000000))
    ax1.set_yticklabels([f"{x/1000000:.0f}" for x in np.arange(0, max(data['revenue']) * 1.15, 20000000)])
    
    # y-axis unit conversion for profit - 시작점을 15로 조정
    profit_min = 15000000  # 15M에서 시작
    profit_max = max(data['profit']) * 1.15
    ax1_twin.set_ylim(profit_min, profit_max)
    # 5M 단위로 눈금 설정
    profit_ticks = np.arange(profit_min, profit_max + 5000000, 5000000) 
    ax1_twin.set_yticks(profit_ticks)
    ax1_twin.set_yticklabels([f"{x/1000000:.0f}" for x in profit_ticks])
    
    # Add background shading for quarters
    quarter_boundaries = [0, 3, 6, 9]
    for i, start in enumerate(quarter_boundaries):
        ax1.axvspan(start - 0.5, start + 2.5, alpha=0.1, color=colors[i % len(colors)], zorder=0)
    
    # Combined legend with enhanced styling - adjusted for A4
    lines1, labels1 = ax1.get_legend_handles_labels()
    lines2, labels2 = ax1_twin.get_legend_handles_labels()
    legend = ax1.legend(lines1 + lines2, labels1 + labels2, loc='upper left', 
                       frameon=True, framealpha=0.9, facecolor='white', edgecolor='#dddddd',
                       bbox_to_anchor=(0.02, 0.98), fontsize=7)
    
    # 2. Sales channel distribution with enhanced styling
    ax2 = fig.add_subplot(gs[1, 1])
    ax2.set_facecolor('white')
    ax2.set_title('Sales Channel Distribution', fontsize=10, pad=8, fontweight='bold')
    
    channel_totals = {channel: sum(data['channel_data'][channel]) for channel in data['channel_data']}
    channels = list(channel_totals.keys())
    channel_values = list(channel_totals.values())
    
    # Enhanced pie chart with explode effect for the largest slice
    max_idx = channel_values.index(max(channel_values))
    explode = [0.05 if i == max_idx else 0 for i in range(len(channel_values))]
    
    wedges, texts, autotexts = ax2.pie(channel_values, labels=None, autopct='%1.1f%%', 
                                      startangle=90, colors=colors[:len(channels)],
                                      explode=explode, shadow=True, wedgeprops={'edgecolor': 'white', 'linewidth': 1.5})
    
    # Enhance the autopct text
    for autotext in autotexts:
        autotext.set_color('white')
        autotext.set_fontsize(7)
        autotext.set_fontweight('bold')
    
    # Custom legend for pie chart - adjusted for A4
    leg = ax2.legend(wedges, channels, title="Sales Channels", 
                    loc="center", bbox_to_anchor=(0.5, -0.2), ncol=2, fontsize=7)
    leg.get_title().set_fontsize(8)
    leg.get_title().set_fontweight('bold')
    
    ax2.axis('equal')
    
    # 3. Sales by product category with enhanced styling
    ax3 = fig.add_subplot(gs[2, 0])
    ax3.set_facecolor('white')
    ax3.set_title('Sales by Product Category', fontsize=10, pad=8, fontweight='bold')
    
    categories = list(data['category_data'].keys())
    category_values = list(data['category_data'].values())
    
    # Sort categories by value
    sorted_indices = np.argsort(category_values)
    sorted_categories = [categories[i] for i in sorted_indices]
    sorted_values = [category_values[i] for i in sorted_indices]
    
    # Gradient-colored horizontal bars
    color_map = plt.cm.Blues(np.linspace(0.4, 0.8, len(sorted_categories)))
    
    # 그래프의 x축 범위 설정으로 여백 확보 - 더 많은 왼쪽 여백
    max_value = max([x/1000000 for x in sorted_values])
    ax3.set_xlim(-10, max_value * 1.15)  # 왼쪽에 여백 확보
    
    # 막대 그래프 생성
    bars = ax3.barh(sorted_categories, [x/1000000 for x in sorted_values], color=color_map)
    
    # Display values on bars with enhanced styling
    for bar in bars:
        width = bar.get_width()
        ax3.text(width + 0.5, bar.get_y() + bar.get_height()/2, f"${width:.1f}M",
                ha='left', va='center', fontweight='bold', color='#333333', fontsize=7)
    
    ax3.set_xlabel('Revenue ($ Million)', fontsize=8, fontweight='bold')
    
    # y축 레이블 위치 조정 및 글꼴 크기 키우기 - 더 많은 패딩
    ax3.tick_params(axis='y', labelsize=8, pad=20)
    
    # 그리드 감추기
    ax3.grid(False)
    
    # Add category icons (sample - in practice you might use actual icons)
    category_icons = {'Electronics': 'E', 'Clothing': 'C', 'Food': 'F', 'Furniture': 'H', 'Cosmetics': 'B'}
    for i, category in enumerate(sorted_categories):
        if category in category_icons:
            ax3.text(-7, i, category_icons[category], fontsize=15, ha='right', va='center', 
                    bbox=dict(boxstyle="circle", fc=color_map[i], ec="white", alpha=0.9))
    
    # 4. Regional sales distribution with enhanced styling
    ax4 = fig.add_subplot(gs[2, 1])
    ax4.set_facecolor('white')
    ax4.set_title('Regional Sales Distribution', fontsize=10, pad=8, fontweight='bold')
    
    regions = list(data['region_data'].keys())
    region_values = list(data['region_data'].values())
    
    # Sort in descending order
    sorted_indices = np.argsort(region_values)[::-1]
    sorted_regions = [regions[i] for i in sorted_indices]
    sorted_values = [region_values[i] for i in sorted_indices]
    
    # Color gradient based on values
    norm = plt.Normalize(min(sorted_values), max(sorted_values))
    colors_regions = plt.cm.Reds(norm(sorted_values))
    
    bars = ax4.bar(sorted_regions, [x/1000000 for x in sorted_values], color=colors_regions)
    
    # 모든 x축 틱 라벨 45도 회전 및 오른쪽 정렬 (명시적 설정)
    plt.setp(ax4.get_xticklabels(), rotation=45, ha='right')
    
    # Add value labels on top of bars with adjusted position - 45도 회전
    for bar in bars:
        height = bar.get_height()
        ax4.text(bar.get_x() + bar.get_width()/2., height + 0.3,
                f'${height:.1f}M', ha='right', va='bottom', fontsize=7, rotation=45)
    
    ax4.set_xlabel('Region', fontsize=8, fontweight='bold')
    ax4.set_ylabel('Revenue ($ Million)', fontsize=8, fontweight='bold')
    ax4.tick_params(axis='x', rotation=45, labelsize=7)
    
    # Add a light horizontal line at y=0
    ax4.axhline(y=0, color='#cccccc', linestyle='-', alpha=0.3)
    
    # 그래프 4에서도 x축 라벨 회전 (이미 45도로 설정되어 있지만 명시적으로 함)
    ax4.set_xlabel('Region', fontsize=8, fontweight='bold')
    ax4.set_ylabel('Revenue ($ Million)', fontsize=8, fontweight='bold')
    ax4.tick_params(axis='x', rotation=45, labelsize=7)
    # ha(수평 정렬)를 'right'로 설정하여 라벨이 겹치지 않도록 함
    plt.setp(ax4.get_xticklabels(), ha='right')
    
    # 5. Customer segment analysis with enhanced styling
    ax5 = fig.add_subplot(gs[3, 0])
    ax5.set_facecolor('white')
    ax5.set_title('Customer Segment Characteristics', fontsize=10, pad=8, fontweight='bold')
    
    segments = data['segments']
    segment_counts = data['segment_data']['count']
    segment_avg_purchase = data['segment_data']['avg_purchase']
    
    # Normalize bubble size with better scaling
    min_size, max_size = 300, 1500
    normalized_size = [min_size + (count / max(segment_counts)) * (max_size - min_size) for count in segment_counts]
    
    # Enhanced color setup with better contrast
    segment_colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
    
    # 축 범위 설정 - 데이터가 중앙에 모이도록 범위 확장
    retention_min, retention_max = 0, 100  # 0-100% 범위로 설정
    purchase_min = 0  # 0부터 시작
    purchase_max = max([p/10000 for p in segment_avg_purchase]) * 1.5  # 최대값의 1.5배 범위
    
    # Bubble chart with enhanced styling
    for i, segment in enumerate(segments):
        scatter = ax5.scatter(data['segment_data']['retention_rate'][i] * 100, 
                   segment_avg_purchase[i] / 10000, 
                   s=normalized_size[i], 
                   color=segment_colors[i], 
                   alpha=0.7, 
                   label=f"{segment}",  # 범례에서 customers 제거
                   edgecolors='white', linewidth=2)
        
        # 세그먼트 이름 표시
        ax5.annotate(segment, 
                    (data['segment_data']['retention_rate'][i] * 100, segment_avg_purchase[i] / 10000),
                    xytext=(0, 0), textcoords='offset points',
                    ha='center', va='center', fontsize=7, color='white', fontweight='bold')
        
        # 실제 데이터 원 안에 수치(고객 수) 표시 - 원 아래에 작은 텍스트로 표시
        ax5.annotate(f"{segment_counts[i]}", 
                    (data['segment_data']['retention_rate'][i] * 100, segment_avg_purchase[i] / 10000),
                    xytext=(0, -normalized_size[i]**0.5/2 - 2),  # 원 크기에 따라 위치 조정
                    textcoords='offset points',
                    ha='center', va='top', fontsize=7, color='#333333', fontweight='bold')
    
    ax5.set_xlabel('Customer Retention Rate (%)', fontsize=8, fontweight='bold')
    ax5.set_ylabel('Avg Purchase Value ($ Thousand)', fontsize=8, fontweight='bold')
    
    # 축 범위 적용
    ax5.set_xlim(retention_min, retention_max)
    ax5.set_ylim(purchase_min, purchase_max)
    
    ax5.grid(True, alpha=0.3)
    
    # 축 라벨 위치 조정 - x축 라벨이 잘리지 않도록 아래로 이동
    ax5.xaxis.set_label_coords(0.5, -0.15)  # x축 라벨 위치 조정
    
    # Add quadrant labels - smaller font but bold
    ax5.text(0.95, 0.95, 'HIGH VALUE\nHIGH LOYALTY', transform=ax5.transAxes, 
             ha='right', va='top', fontsize=7, alpha=0.7, fontweight='bold')
    ax5.text(0.05, 0.95, 'HIGH VALUE\nLOW LOYALTY', transform=ax5.transAxes, 
             ha='left', va='top', fontsize=7, alpha=0.7, fontweight='bold')
    ax5.text(0.95, 0.05, 'LOW VALUE\nHIGH LOYALTY', transform=ax5.transAxes, 
             ha='right', va='bottom', fontsize=7, alpha=0.7, fontweight='bold')
    ax5.text(0.05, 0.05, 'LOW VALUE\nLOW LOYALTY', transform=ax5.transAxes, 
             ha='left', va='bottom', fontsize=7, alpha=0.7, fontweight='bold')
    
    # 범례에서 모든 원의 크기를 동일하게 설정하는 핸들러 생성
    class SamePointSizeHandler(HandlerPathCollection):
        def __init__(self, *args, **kwargs):
            HandlerPathCollection.__init__(self, *args, **kwargs)
            
        def create_collection(self, orig_handle, sizes, offsets, **kwargs):
            sizes[:] = [200]  # 모든 범례에 동일한 크기 적용
            return HandlerPathCollection.create_collection(self, orig_handle, sizes, offsets, **kwargs)
    
    # Enhanced legend with custom styling - adjusted for A4 - 범례에는 세그먼트 이름만 표시
    legend = ax5.legend(loc='upper left', frameon=True, framealpha=0.9, facecolor='white', 
                       edgecolor='#dddddd', title='Customer Segments', fontsize=7,
                       handler_map={type(scatter): SamePointSizeHandler()})
    legend.get_title().set_fontsize(8)
    legend.get_title().set_fontweight('bold')
    
    # 6. Summary and insights with enhanced styling
    ax6 = fig.add_subplot(gs[3, 1])
    ax6.set_facecolor('white')
    ax6.set_title('Summary & Strategic Insights', fontsize=10, pad=8, fontweight='bold')
    ax6.axis('off')
    
    # 인사이트 텍스트 박스 크기 확대 (더 넓게)
    insights_rect = plt.Rectangle((0.01, 0.01), 0.98, 0.98, facecolor='white', 
                                 edgecolor='#dddddd', linewidth=1.5, 
                                 transform=ax6.transAxes)
    ax6.add_patch(insights_rect)
    
    # 더 간결한 인사이트 텍스트로 수정
    insights = [
        "• Revenue: 23.5% YoY growth, strong Q4",
        "• Channels: Online 42.3% of total sales",
        "• Products: Electronics 35.2% of revenue",
        "• Regions: Seoul 38.7% of sales",
        "• Customers: VIP spend 4.8x vs regular",
        "\nStrategic Recommendations:",
        "1. Strengthen mobile app for younger users",
        "2. Increase marketing in regional cities",
        "3. Enhance VIP/loyal retention programs",
        "4. Launch inactive customer campaigns"
    ]
    
    # 텍스트 줄 간격 줄이고 여백 늘리기
    insight_text = '\n'.join(insights)
    ax6.text(0.05, 0.95, insight_text, va='top', fontsize=7, linespacing=1.2, transform=ax6.transAxes)
    
    # Add decorative elements
    # ax6.add_patch(plt.Rectangle((0.01, 0.72), 0.98, 0.01, facecolor='#dddddd', transform=ax6.transAxes))
    # ax6.text(0.05, 0.77, "Key Findings:", va='center', fontsize=12, fontweight='bold', transform=ax6.transAxes)
    # ax6.text(0.05, 0.38, "Strategic Recommendations:", va='center', fontsize=12, fontweight='bold', transform=ax6.transAxes)
    
    # Report footer with enhanced styling - adjusted for A4
    footer_rect = plt.Rectangle((0, 0), 1, 0.025, facecolor='#343A40', transform=fig.transFigure)
    fig.add_artist(footer_rect)
    
    fig.text(0.5, 0.015, 'This report was prepared using Visualize data analysis service.', 
             ha='center', fontsize=8, color='white')
    fig.text(0.5, 0.005, '© 2025 SMAP Data Visualize - admin@smap.site', 
             ha='center', fontsize=7, color='white', alpha=0.8)
    
    # Add version and date
    today_str = datetime.now().strftime('%Y-%m-%d')
    fig.text(0.95, 0.005, f'v1.0 | {today_str}', ha='right', fontsize=6, color='white', alpha=0.7)
    
    # Add watermark logo (commented out - uncomment and adjust if needed)
    # fig.text(0.5, 0.5, 'SMAP', fontsize=100, color='#f0f0f0', 
    #          ha='center', va='center', alpha=0.07, rotation=45)
    
    # After all plots are created, manually adjust to avoid overlap instead of using tight_layout
    # Skip tight_layout since it's causing warnings and sometimes doesn't work well with complex figures
    
    # Create directory if needed
    os.makedirs('public/visualization', exist_ok=True)
    
    # Save as image with A4 dimensions
    plt.savefig('public/visualization/english_custom_report.png', dpi=300, bbox_inches='tight', format='png')
    # Also save as PDF for better print quality
    plt.savefig('public/visualization/english_custom_report.pdf', bbox_inches='tight', format='pdf')
    print("Enhanced custom business report image successfully created in English (A4 format).")

if __name__ == "__main__":
    create_custom_report() 