import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import pandas as pd
import numpy as np
import os
from datetime import datetime, timedelta

# Data generation function
def generate_sales_data():
    # Generate dates (last 30 days)
    today = datetime.now()
    dates = [(today - timedelta(days=i)).strftime('%Y-%m-%d') for i in range(30, 0, -1)]
    
    # Product categories
    categories = ['Electronics', 'Clothing', 'Food', 'Furniture', 'Cosmetics']
    
    # Regions
    regions = ['Seoul', 'Gyeonggi', 'Busan', 'Daegu', 'Incheon']
    
    # Empty list for dataframe creation
    data_list = []
    
    # Generate data for each date, category, and region
    for date in dates:
        for category in categories:
            for region in regions:
                # Add noise to base trend
                base_sales = np.random.randint(500, 2000)
                if category == 'Electronics':
                    base_sales *= 2
                elif category == 'Clothing':
                    base_sales *= 1.5
                
                # Weekend effect (sales increase on weekends)
                day_of_week = datetime.strptime(date, '%Y-%m-%d').weekday()
                weekend_factor = 1.3 if day_of_week >= 5 else 1.0
                
                # Regional weight
                region_factor = 1.5 if region == 'Seoul' else 1.2 if region == 'Gyeonggi' else 1.0
                
                # Calculate final sales
                sales = int(base_sales * weekend_factor * region_factor)
                
                # Visitor count (correlated with sales)
                visitors = int(sales * np.random.uniform(1.2, 2.0))
                
                # Calculate conversion rate (in %)
                conversion_rate = (sales / visitors) * 100
                
                data_list.append({
                    'Date': date,
                    'Category': category,
                    'Region': region,
                    'Sales': sales,
                    'Visitors': visitors,
                    'ConversionRate': conversion_rate
                })
    
    return pd.DataFrame(data_list)

# Main function
def create_dashboard():
    # Generate data
    df = generate_sales_data()
    
    # Aggregate by date and category
    daily_sales = df.groupby(['Date', 'Category'])['Sales'].sum().reset_index()
    category_sales = df.groupby('Category')['Sales'].sum().reset_index()
    region_sales = df.groupby('Region')['Sales'].sum().reset_index()
    
    # Create dashboard (2x2 grid)
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=('Daily Sales Trend', 'Sales by Category', 'Sales by Region', 'Conversion Rate Distribution'),
        specs=[[{"type": "scatter"}, {"type": "pie"}],
               [{"type": "bar"}, {"type": "box"}]]
    )
    
    # 1. Daily sales trend (time series chart)
    for category in df['Category'].unique():
        cat_data = daily_sales[daily_sales['Category'] == category]
        fig.add_trace(
            go.Scatter(
                x=cat_data['Date'], 
                y=cat_data['Sales'],
                mode='lines+markers',
                name=category
            ),
            row=1, col=1
        )
    
    # 2. Sales by category (pie chart)
    fig.add_trace(
        go.Pie(
            labels=category_sales['Category'],
            values=category_sales['Sales'],
            textinfo='label+percent',
            hole=.3
        ),
        row=1, col=2
    )
    
    # 3. Sales by region (bar chart)
    fig.add_trace(
        go.Bar(
            x=region_sales['Region'],
            y=region_sales['Sales'],
            marker_color='skyblue'
        ),
        row=2, col=1
    )
    
    # 4. Conversion rate distribution (box plot)
    for category in df['Category'].unique():
        cat_data = df[df['Category'] == category]
        fig.add_trace(
            go.Box(
                y=cat_data['ConversionRate'],
                name=category
            ),
            row=2, col=2
        )
    
    # Update layout
    fig.update_layout(
        title_text="Real-time Sales Dashboard",
        height=800,
        width=1200,
        template='plotly_white'
    )
    
    # Adjust each subplot layout
    fig.update_xaxes(title_text="Date", row=1, col=1)
    fig.update_yaxes(title_text="Sales", row=1, col=1)
    
    fig.update_xaxes(title_text="Region", row=2, col=1)
    fig.update_yaxes(title_text="Sales", row=2, col=1)
    
    fig.update_xaxes(title_text="Product Category", row=2, col=2)
    fig.update_yaxes(title_text="Conversion Rate (%)", row=2, col=2)

    # Create directory
    os.makedirs('public/visualization/interactive', exist_ok=True)
    
    # Save as HTML file
    fig.write_html('public/visualization/interactive/sales_dashboard.html')
    
    # Also save as image
    fig.write_image('public/visualization/interactive_dashboard.png', scale=2)
    
    print("Interactive dashboard has been successfully created.")

if __name__ == "__main__":
    create_dashboard() 