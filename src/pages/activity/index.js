import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Plus from 'assets/icons/Plus';
import Sort from 'assets/icons/Sort';
import Layout from 'components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteListItem, fetchListItem } from 'features/Activity/actions';
import Modal from 'components/Modal';
import List from 'components/List';

function Activity() {
  const dispatch = useDispatch();
  const store = useSelector(({ activity }) => activity);

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  React.useEffect(() => {
    let params = {
      activity_group_id: id,
    };
    dispatch(fetchListItem(params));
  }, [id, dispatch]);

  return (
    <Layout>
      <Modal
        id={Number(id)}
        dispatch={dispatch}
        params={{
          activity_group_id: id,
        }}
      />
      <div className="flex justify-between items-center my-10">
        <p className="font-bold text-2xl">Activity</p>
        <div className="flex items-center">
          <button className="btn btn-outline mr-3 hover:bg-neutral rounded-full">
            <Sort />
          </button>
          <label
            htmlFor="create-list"
            className="btn btn-primary font-semibold bg-[#16ABF8] hover:bg-[#25b6ff] border-none rounded-full"
          >
            <span className="px-2 flex items-center">
              <Plus classname="mr-2" /> Tambah
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {store.status === 'process' ? (
          <div className="w-full h-24 bg-[#d2d2d2] animate-pulse rounded-lg"></div>
        ) : (
          store.data.map((items) => {
            return (
              <List
                key={items.id}
                items={items}
                status={store.status}
                onDelete={() => {
                  dispatch(
                    deleteListItem(items.id, {
                      activity_group_id: id,
                    }),
                  );
                }}
              />
            );
          })
        )}
      </div>
    </Layout>
  );
}

export default Activity;
