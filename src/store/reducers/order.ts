import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderAPI } from "../../api";

import { IOrder } from "cesieats-service-types/src/order";

interface IOrderState {
  // orderCart: IOrderCart;
  orders: IOrder[];
}

const initialState: IOrderState = {
  // orderCart: {} as IOrderCart,
  orders: [] as IOrder[],
};

export const getAllClientOrders = createAsyncThunk(
  "order/getAllClientOrders",
  async () => {
    const response = await orderAPI.getAllClientOrders();
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllClientOrders.fulfilled, (state, { payload }) => {
      state.orders = payload;
    });
  },
});

export default orderSlice.reducer;
