import { START_FETCHING_TO_DO, SUCCESS_FETCHING_TO_DO, ERROR_FETCHING_TO_DO } from './constants';

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
    case START_FETCHING_TO_DO:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_TO_DO:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_TO_DO:
      return {
        ...state,
        data: action.data,
        status: statuslist.success,
      };
    default:
      return state;
  }
}
