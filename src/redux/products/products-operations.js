import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/API/products';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll', async (data, { rejectWithValue }) => {
    try { 
      const result = await api.getAllProducts(data);
      return result;
    }
    catch ({ response }) {
      return rejectWithValue(response.data)
    }
  }
)

export const fetchProductById = createAsyncThunk(
  'products/fetchById', async (data, { rejectWithValue }) => {
    try { 
      const result = await api.getProductById(data);
      return result;
    }
    catch ({ response }) {
      return rejectWithValue(response.data)
    }
  }
)

export const fetchAddProduct = createAsyncThunk(
  'products/addProduct', async (_, { rejectWithValue }) => {
    try { 
      const result = await api.addProduct();
      return result;
    }
    catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
)

export const fetchUpdateProductById = createAsyncThunk(
  'products/updateProductById', async (data, { rejectWithValue }) => {
    try { 
      const result = await api.updateProductById(data);
      return result;
    }
    catch ({ response }) {
      return rejectWithValue(response.data)
    }
  }
)

export const fetchDeleteProduct = createAsyncThunk(
  'products/deleteProduct', async (id, { rejectWithValue }) => {
    try { 
      const result = await api.deleteProduct(id);
      return result;
    }
    catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
)