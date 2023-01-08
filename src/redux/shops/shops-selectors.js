export const getShops = ({ shops }) => shops.items;

export const getIsLoading = ({ shops }) => shops.loading;

// export const getFilteredShops = ({ shops, filter }) => {
//   if (!filter) {
//     return shops;
//   }

//   const normalizedFilter = filter.toLowerCase();

//   return shops.filter(shop =>
//     shop.shopOwner.toLowerCase().includes(normalizedFilter)
//   );
// };
