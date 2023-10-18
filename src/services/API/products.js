import instance from "./auth";

export const getAllProducts = () => {
  return instance.get('/api/products')
}

export const getProductById = id => {
  return instance.get(`/api/products/${id}`);
};

export const addProduct = data => {
  return instance.post('/api/products', data);
};

export const updateProductById = (id, data) => {
    return instance.put(`/api/products/${id}`, data)
}

export const deleteProduct = id => {
  return instance.delete(`/api/products/${id}`);
};