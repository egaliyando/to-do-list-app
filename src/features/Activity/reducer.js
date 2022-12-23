import {
  START_FETCHING_LIST_ITEM,
  SUCCESS_FETCHING_LIST_ITEM,
  ERROR_FETCHING_LIST_ITEM,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_LIST_ITEM:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_LIST_ITEM:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_LIST_ITEM:
      return {
        ...state,
        data: action.data,
        status: statuslist.success,
      };
    default:
      return state;
  }
}
