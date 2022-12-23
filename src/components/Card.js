import React from 'react';
import Trash from 'assets/icons/Trash';
import moment from 'moment/moment';

function Card({ items, status, onClick, goToDetail }) {
  return (
    <div className="w-[235px] h-[235px] bg-white rounded-lg">
      {status !== 'process' ? (
        <>
          <div className="p-6 shadow-lg h-full flex flex-col justify-between relative">
            <div onClick={goToDetail} className="absolute w-full h-44 top-0 left-0" />
            <p className="font-bold text-base">{items?.title}</p>

            <div className="flex justify-between items-center">
              <p className="text-[#888888] font-semibold">
                {moment(items.created_at).format('DD MMM YYYY')}
              </p>
              <label onClick={onClick} htmlFor="delete-alert">
                <Trash />
              </label>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-[#d2d2d2] animate-pulse rounded-lg"></div>
      )}
    </div>
  );
}

export default Card;
