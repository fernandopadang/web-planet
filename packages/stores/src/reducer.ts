export const initialState = {
  planetList: {},
  pages: 1,
  totalResults: 1,
  querySearch: ""
};

export type Action =  | { type: "SET_PLANETS", payload: object}
                      | { type: "SET_PAGES", payload: number}
                      | { type: "SET_TOTAL_RESULTS", payload: number}
                      | { type: "SET_QUERY_SEARCH", payload: string}

export const reducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case "SET_PLANETS":
      return {
        ...state,
        planetList: action.payload,
      };
    case "SET_PAGES":
      return {
        ...state,
        pages: action.payload,
      };
    case "SET_TOTAL_RESULTS":
      return {
        ...state,
        totalResults: action.payload,
      };
      case "SET_QUERY_SEARCH":
        return {
          ...state,
          querySearch: action.payload,
        };
    default:
      return state;
  }
}