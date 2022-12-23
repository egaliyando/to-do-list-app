import { START_FETCHING_TO_DO, SUCCESS_FETCHING_TO_DO, ERROR_FETCHING_TO_DO } from './constants';
import { getData, postData, putData, deleteData } from 'utils/api';
import debounce from 'debounce-promise';

let debouncedFetchToDo = debounce(getData, 1500);

export const startFetchingToDo = () => {
  return {
    type: START_FETCHING_TO_DO,
  };
};

export const errorFetchingToDo = () => {
  return {
    type: ERROR_FETCHING_TO_DO,
  };
};

export const successFetchingToDo = (data) => {
  return {
    type: SUCCESS_FETCHING_TO_DO,
    data,
  };
};

export const fetchToDo = () => {
  return async (dispatch) => {
    dispatch(startFetchingToDo());
    try {
      let {
        data: { data },
      } = await debouncedFetchToDo('activity-groups');

      dispatch(successFetchingToDo(data));
    } catch (err) {
      console.log(err.response);
      dispatch(errorFetchingToDo());
    }
  };
};
export const createToDo = (payload) => {
  return async (dispatch) => {
    try {
      let res = await postData('activity-groups', payload);
      console.log('res: ', res);
      dispatch(fetchToDo());
    } catch (err) {
      console.log(err.response);
    }
  };
};
export const deleteToDo = (id) => {
  return async (dispatch) => {
    try {
      let res = await deleteData(id);
      dispatch(fetchToDo());
    } catch (err) {
      console.log(err.response);
    }
  };
};
