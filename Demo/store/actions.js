export const fetchProducts = () => {
  return async (dispatch: any) => {
    try {
      fetch('https://dummyjson.com/products')
        .then(res => {
          return res.json();
        })
        .then(data => {
          dispatch({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: data.products,
          });
          //   console.log('data.products1 ====>', data.products);
        });
    } catch (error) {
      console.log('error', error);
    }
  };
};
