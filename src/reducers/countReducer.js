export default (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: action.payload + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: action.payload - 1
      };
    case "RESET":
      return {
        ...state,
        count: (action.payload = 0)
      };
    default:
      return state;
  }
};
