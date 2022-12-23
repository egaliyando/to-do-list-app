import {
  START_FETCHING_LIST_ITEM,
  SUCCESS_FETCHING_LIST_ITEM,
  ERROR_FETCHING_LIST_ITEM,
} from './constants';
import { getData, postData, putData, deleteData } from 'utils/api';
import debounce from 'debounce-promise';

let debouncedFetchListItem = debounce(getData, 1000);

export const startFetchingListItem = () => {
  return {
    type: START_FETCHING_LIST_ITEM,
  };
};

export const errorFetchingListItem = () => {
  return {
    type: ERROR_FETCHING_LIST_ITEM,
  };
};

export const successFetchingListItem = (data) => {
  return {
    type: SUCCESS_FETCHING_LIST_ITEM,
    data,
  };
};

export const fetchListItem = (params) => {
  return async (dispatch) => {
    dispatch(startFetchingListItem());
    try {
      let {
        data: { data },
      } = await debouncedFetchListItem('todo-items', params);

      dispatch(successFetchingListItem(data));
    } catch (err) {
      console.log(err.response);
      dispatch(errorFetchingListItem());
    }
  };
};
export const createListItem = (payload, params) => {
  return async (dispatch) => {
    dispatch(startFetchingListItem());
    try {
      await postData('todo-items', payload);
      dispatch(fetchListItem(params));
    } catch (err) {
      console.log(err.response);
    }
  };
};
export const deleteListItem = (id, params) => {
  return async (dispatch) => {
    dispatch(startFetchingListItem());
    try {
      await deleteData(`todo-items/${id}`);
      dispatch(fetchListItem(params));
    } catch (err) {
      console.log(err.response);
    }
  };
};
