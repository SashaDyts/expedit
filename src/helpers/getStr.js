const getStr = (lat, lon) => {
  const lata = String(lat);
  const lona = String(lon);

  const firstStr = `${lata}+${lona}`;
  const secondStr = `${lata},${lona}`;
  const lastStr = `https://www.google.com.ua/maps/search/${firstStr}/@${secondStr},16.25z`;

  return lastStr;
};

export default getStr;
