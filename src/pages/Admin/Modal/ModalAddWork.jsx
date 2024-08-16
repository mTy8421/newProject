const ModalAddWork = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-info text-white"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        เพิ่ม
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">เพิ่มหัวข้อภาระงาน</h3>
          <div className="form-control">
            <p className="py-4 text-left">หัวข้อภาระงาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <p className="py-4 text-left">ผลสัมฤทธิ์ของงาน :</p>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
            <p className="py-4 text-left">กำหนดการแล้วเสร็จ (ถ้ามี) :</p>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="modal-action">
            <form>
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-info text-white">บันทึกข้อมูล</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          {/* if there is a button, it will close the modal */}
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalAddWork;
