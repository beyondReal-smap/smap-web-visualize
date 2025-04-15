import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import os

# 한글 폰트 설정
plt.rcParams['font.family'] = 'AppleGothic'

# 재현성을 위한 시드 설정
np.random.seed(42)

# 클러스터링 분석을 위한 합성 데이터 생성
n_samples = 200
features = np.random.randn(n_samples, 2)
# 두 개의 뚜렷한 클러스터 생성
features = np.vstack([features + 2, features - 2])
labels = np.hstack([np.zeros(n_samples), np.ones(n_samples)])

# 시계열 예측을 위한 추가 데이터
x_future = np.linspace(-4, 4, 100)
y_future = 0.5 * x_future + np.random.randn(100) * 0.5
additional_data = np.column_stack([x_future, y_future])

# 모든 데이터 결합
full_data = np.vstack([features, additional_data])

# 데이터 스케일링
scaler = StandardScaler()
scaled_data = scaler.fit_transform(full_data)

# K-means 클러스터링 적용
kmeans = KMeans(n_clusters=3, random_state=42)
cluster_labels = kmeans.fit_predict(scaled_data)

# PCA를 사용하여 2D로 차원 축소
pca = PCA(n_components=2)
pca_data = pca.fit_transform(scaled_data)

# 시각화
plt.figure(figsize=(12, 10))

# 클러스터링 시각화
plt.subplot(2, 1, 1)
for i in range(3):
    plt.scatter(pca_data[cluster_labels == i, 0], pca_data[cluster_labels == i, 1], 
                s=50, label=f'클러스터 {i+1}')

# 클러스터 중심점 시각화
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], 
            s=200, c='red', marker='X', label='클러스터 중심')

plt.title('머신러닝 클러스터링 분석: 고객 세그먼트', fontsize=16)
plt.xlabel('주성분 1 (소비 패턴)')
plt.ylabel('주성분 2 (연령 프로필)')
plt.legend()
plt.grid(True, linestyle='--', alpha=0.7)

# 시계열 예측 시각화
plt.subplot(2, 1, 2)
x_hist = np.linspace(-4, 8, 1000)
forecast = 0.5 * x_hist + np.random.normal(loc=0, scale=0.2, size=1000)

# 과거 데이터와 예측 트렌드
plt.plot(x_hist[:800], forecast[:800], 'b-', label='과거 데이터')
plt.plot(x_hist[800:], forecast[800:], 'r--', label='예측 트렌드', linewidth=2)

# 신뢰 구간
confidence_up = forecast + 1.0
confidence_down = forecast - 1.0
plt.fill_between(x_hist[800:], confidence_down[800:], confidence_up[800:], 
                color='r', alpha=0.2, label='95% 신뢰 구간')

# 실제 데이터 포인트
plt.scatter(x_hist[::50], forecast[::50] + np.random.normal(0, 0.5, size=20), 
            c='green', s=50, label='실제 데이터 포인트')

# 현재 시점 표시
plt.axvline(x=x_hist[800], color='gray', linestyle='--')
plt.text(x_hist[800]+0.1, np.max(forecast), '현재', fontsize=12)

plt.title('시계열 예측 모델: 향후 12개월 매출 트렌드', fontsize=16)
plt.xlabel('시간 (월)')
plt.ylabel('매출 지수')
plt.legend()
plt.grid(True, linestyle='--', alpha=0.7)

plt.tight_layout()

# 이미지 저장
os.makedirs('public/visualization', exist_ok=True)
plt.savefig('public/visualization/ml_analytics.png', dpi=300, bbox_inches='tight')

print('머신러닝 분석 예시 이미지가 성공적으로 생성되었습니다.') 