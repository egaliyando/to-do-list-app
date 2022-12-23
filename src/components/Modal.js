import { createListItem } from 'features/Activity/actions';
import React from 'react';
import Select from 'react-select';

function Modal({ id, dispatch, params }) {
  const options = [
    {
      label: (
        <span className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-3 bg-red-500" /> Very High
        </span>
      ),
      value: 'very-high',
    },
    {
      label: (
        <span className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-3 bg-orange-500" /> High
        </span>
      ),
      value: 'high',
    },
    {
      label: (
        <span className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-3 bg-green-500" /> Medium
        </span>
      ),
      value: 'normal',
    },
    {
      label: (
        <span className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-3 bg-blue-500" /> Low
        </span>
      ),
      value: 'low',
    },
    {
      label: (
        <span className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-3 bg-purple-500" />
          Very Low
        </span>
      ),
      value: 'very-low',
    },
  ];
  const [field, setField] = React.useState({
    activity_group_id: id,
    title: '',
    priority: 'very-high',
  });
  const onSubmit = () => {
    dispatch(createListItem(field, params));
  };
  return (
    <>
      <input type="checkbox" id="create-list" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="create-list" className="absolute right-5 top-5">
            ✕
          </label>
          <h3 className="text-lg font-bold mb-3">Tambah List Item</h3>
          <hr />
          <div className="py-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">NAMA LIST ITEM</span>
              </label>
              <input
                type="text"
                placeholder="Tambahkan nama list item"
                className="input input-bordered w-full"
                onChange={(e) => setField({ ...field, title: e.target.value })}
              />
            </div>
            <div className="form-control w-full max-w-[10rem] mt-3 relative">
              <label className="label">
                <span className="label-text font-bold">PRIORITY</span>
              </label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={options[0]}
                name="color"
                options={options}
                onChange={(e) => setField({ ...field, priority: e.value })}
              />
            </div>
          </div>

          <hr />

          <div className="flex justify-end mt-5">
            <label
              onClick={onSubmit}
              htmlFor="create-list"
              className="btn btn-primary font-semibold bg-[#16ABF8] hover:bg-[#25b6ff] border-none rounded-full"
            >
              <span className="px-2 flex items-center font-bold">Simpan</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
