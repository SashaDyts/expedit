import instance from './auth';

export const getShops = async () => {
  const { data } = await instance.get('/shops');

  return data;
};

export const addShop = async shopData => {
  const { data } = await instance.post('/shops', shopData);

  return data;
};
