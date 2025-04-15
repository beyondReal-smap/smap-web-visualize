import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import streamlit as st
import ollama
import numpy as np

# 데이터 로드 및 유효성 검사
def load_data(file):
    try:
        df = pd.read_csv(file)
        if df.empty:
            raise ValueError("입력된 데이터가 비어 있습니다.")
        return df
    except Exception as e:
        st.error(f"데이터 로드 중 오류 발생: {e}")
        return None

# 데이터 유형에 따른 시각화 선택
def visualize_data(df):
    numeric_cols = df.select_dtypes(include=np.number).columns
    categorical_cols = df.select_dtypes(exclude=np.number).columns

    plt.figure(figsize=(10, 6))

    # 수치형 데이터가 있는 경우: 산점도
    if len(numeric_cols) >= 2:
        sns.scatterplot(x=numeric_cols[0], y=numeric_cols[1], data=df)
        plt.title(f"{numeric_cols[0]} vs {numeric_cols[1]} 산점도")
    # 범주형 데이터가 있는 경우: 막대 그래프
    elif len(categorical_cols) > 0 and len(numeric_cols) > 0:
        sns.barplot(x=categorical_cols[0], y=numeric_cols[0], data=df)
        plt.title(f"{categorical_cols[0]}별 {numeric_cols[0]} 막대 그래프")
    # 시계열 데이터로 간주: 선 그래프
    elif len(numeric_cols) == 1 and df.index.is_monotonic_increasing:
        plt.plot(df[numeric_cols[0]])
        plt.title(f"{numeric_cols[0]} 시계열 그래프")

    st.pyplot(plt)

# LLM을 활용한 데이터 해석
def interpret_data(df):
    # 데이터 요약 통계 생성
    summary = df.describe().to_string()
    prompt = f"다음은 데이터 요약 통계입니다:\n{summary}\n이 데이터의 패턴, 트렌드, 이상치를 설명해주세요."
    
    try:
        response = ollama.generate(model="gemma3:12b", prompt=prompt)
        return response['response']
    except Exception as e:
        return f"LLM 해석 중 오류 발생: {e}"

# Streamlit 인터페이스
def main():
    st.title("데이터 분석 및 해석 도구")
    st.write("CSV 파일을 업로드하면 데이터를 분석하고, 그래프를 생성하며, 해석을 제공합니다.")

    # 파일 업로드
    uploaded_file = st.file_uploader("CSV 파일을 업로드하세요", type="csv")
    
    if uploaded_file is not None:
        # 데이터 로드
        df = load_data(uploaded_file)
        if df is not None:
            st.write("### 데이터 미리보기")
            st.dataframe(df.head())

            # 데이터 시각화
            st.write("### 데이터 시각화")
            visualize_data(df)

            # LLM 해석
            st.write("### 데이터 해석 (Gemma3:12B)")
            interpretation = interpret_data(df)
            st.write(interpretation)

if __name__ == "__main__":
    main()