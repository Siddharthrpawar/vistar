// reducers.js
const initialState = {
  products: [],
};

const productReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {...state, products: action.payload};
    // Handle other actions if needed
    default:
      return state;
  }
};

export default productReducer;
