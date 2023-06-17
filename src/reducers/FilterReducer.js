export const ACTIONS = {
    SET_MAXPRICE_RANGE: "set_maxprice_range",
    SET_CATEGORY_FILTER: "set_category_filter",
    SET_SIZE_FILTER: "set_size_filter",
    SET_MIN_RATING: "set_min_rating",
    SORT_BY: "sort_by",
    SET_SEARCHED_TERM: "set_searched_term",
    CLEAR_ALL_FILTERS: "clear_all_filters",
  };
  
  const {
    SET_MAXPRICE_RANGE,
    SET_CATEGORY_FILTER,
    SET_SIZE_FILTER,
    SET_MIN_RATING,
    SORT_BY,
    SET_SEARCHED_TERM,
    CLEAR_ALL_FILTERS,
  } = ACTIONS;
  
  export const FilterRedcuer = (state, action) => {
    switch (action.type) {
      case SET_MAXPRICE_RANGE: {
        return {
          ...state,
          maxPriceRange: action.payload,
        };
      }
  
      case SET_CATEGORY_FILTER: {
        return {
          ...state,
          category: {
            ...state.category,
            [action.payload]: !state.category[action.payload],
          },
        };
      }
  
      case SET_SIZE_FILTER: {
        const newSizeArr = state.selectedSizes.includes(action.payload)
          ? state.selectedSizes.filter((ele) => ele !== action.payload)
          : [...state.selectedSizes, action.payload];
        return {
          ...state,
          selectedSizes: [...newSizeArr],
        };
      }
  
      case SET_MIN_RATING: {
        return {
          ...state,
          minRating: action.payload,
        };
      }
  
      case SORT_BY: {
        return { ...state, sortBy: action.payload };
      }
  
      case SET_SEARCHED_TERM: {
        return { ...state, searchedTerm: action.payload };
      }
  
      case CLEAR_ALL_FILTERS: {
        return { ...action.payload };
      }
  
      default: {
        return { ...state };
      }
    }
  };