const initialState = {
  curriculum:[]
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRICULUM':
      return{
            ...state,
            curriculum:action.payload.data

      }

    default:
      return state;
  }
}
