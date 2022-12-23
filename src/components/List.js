import Pencil from 'assets/icons/Pencil';
import Trash from 'assets/icons/Trash';
import React from 'react';

function List({ items, status, onDelete }) {
  return (
    <>
      {status !== 'process' ? (
        <div className="w-full p-4 flex justify-between shadow-lg rounded-lg bg-white">
          <div className="flex items-center">
            <input type="checkbox" checked="checked" className="checkbox" />
            <div className="w-3 h-3 mx-3 rounded-full bg-red-500"></div>
            <p className="font-bold">{items.title}</p>
            <div className="ml-3">
              <Pencil />
            </div>
          </div>

          <div onClick={onDelete}>
            <Trash />
          </div>
        </div>
      ) : (
        <div className="w-full h-24 bg-[#d2d2d2] animate-pulse rounded-lg"></div>
      )}
    </>
  );
}

export default List;
