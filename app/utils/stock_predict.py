import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LinearRegression

def predict_stock_prices(dataset):
    df = pd.DataFrame(dataset, columns=["open", "close", "high", "low", "volume", "vwap"])

    scaler = MinMaxScaler()
    scaled_df = scaler.fit_transform(df)

    X = scaled_df[:, 1:]  
    y = scaled_df[:, 0]

    model = LinearRegression()
    model.fit(X, y)

    y_pred = model.predict(X)

    y_pred = scaler.inverse_transform(np.column_stack((y_pred, X)))[..., 0]

    return y_pred
