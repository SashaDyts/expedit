import instance from './auth';

export const getShops = async () => {
  const { data } = await instance.get('/api/shops');

  return data;
};

export const addShop = async shopData => {
  const { data } = await instance.post('/api/shops', shopData);

  return data;
};
