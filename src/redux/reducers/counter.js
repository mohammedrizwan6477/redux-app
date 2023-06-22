const initialState = {
  count: 0,
  product: [],
  copyproduct: [],
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREEMENT_COUNT":
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;
    case "DECREEMENT_COUNT":
      return {
        ...state,
        count: state.count > 0 ? state.count - action.payload : 0,
      };
      break;
    case "ADD_PRODUCT":
      return {
        ...state,
        product: action.payload,
        copyproduct: action.payload,
      };
    case "PRODUCT_SEARCH":
      return {
        ...state,
        product: state.copyproduct.filter((item) =>
          item.title.toUpperCase().includes(action.payload.toUpperCase())
        ),
      };
      break;
    case "PRODUCT_DELETE":
      return {
        ...state,
        product: state.product.filter((item, index) => index != action.payload),
        copyproduct: state.copyproduct.filter(
          (item, index) => index != action.payload
        ),
      };
    default:
      return state;
  }
};

export default CounterReducer;
