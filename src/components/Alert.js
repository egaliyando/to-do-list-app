import AlertIcon from 'assets/icons/Alert';
import React from 'react';

function Alert({ onConfirm, content }) {
  return (
    <>
      <input type="checkbox" id="delete-alert" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-center">
          <div className="flex justify-center py-8">
            <AlertIcon />
          </div>
          <p className="text-xl">Apakah anda yakin menghapus activity</p>
          <p className="text-xl font-bold">“{content?.title}”?</p>
          <div className="flex justify-center items-center py-5">
            <label
              htmlFor="delete-alert"
              className="btn bg-[#F4F4F4] border-none mr-5 rounded-full text-[#4A4A4A] font-bold px-8 hover:bg-[#F4F4F4]"
            >
              Batal
            </label>
            <label
              onClick={onConfirm}
              htmlFor="delete-alert"
              className="btn bg-[#ED4C5C] border-none rounded-full font-bold px-8 hover:bg-[#ED4C5C]"
            >
              Hapus
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alert;
