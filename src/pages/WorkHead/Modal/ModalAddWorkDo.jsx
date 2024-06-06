const ModalAddWorkDo = () => {
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
          <h3 className="font-bold text-lg">
            เพิ่มรายระเอียดหัวข้อภาระงานประจำวัน
          </h3>
          <div className="form-control">
            <p className="py-4 text-left">ประเภทของงาน :</p>
            <div className="flex flex-row-reverse justify-around">
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio checked:bg-red-500"
                    checked
                  />
                  <span className="label-text ml-3">Work 4</span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                  <span className="label-text ml-3">Work 3</span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio checked:bg-red-500"
                    checked
                  />
                  <span className="label-text ml-3">Work 2</span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                  <span className="label-text ml-3">Work 1</span>
                </label>
              </div>
            </div>
            <p className="py-4 text-left">หัวข้อหลัก :</p>
            <select className="select select-bordered">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <p className="py-4 text-left">ชื่อภาระงาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="flex mt-3">
              <p className="py-4 text-left">เวลาในการทำงาน :</p>
              <input
                type="text"
                placeholder="นาที"
                className="input input-bordered ml-3 w-full max-w-44"
              />
            </div>
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

export default ModalAddWorkDo;
