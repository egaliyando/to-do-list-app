import Info from 'assets/icons/Info';
import React from 'react';

function Toast({ show, label }) {
  return (
    <>
      <input type="checkbox" checked={show} id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative flex justify-start items-center" htmlFor="">
          <Info />
          <p className="font-bold ml-3">{label}</p>
        </label>
      </label>
    </>
  );
}

export default Toast;
