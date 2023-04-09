const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_CART":
      return { ...state, cartClass: "right-0" };
      break;
    case "CLOSE_CART":
      return { ...state, cartClass: "-right-full" };
      break;
    default:
      return state;
  }
};
export default CartReducer;
