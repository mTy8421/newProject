const ModalCheckWork = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        ตวจรสอบ
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-xl text-center">
            กรอกรายละเอียดภาระงานประจำวัน
          </h1>
          <div className="form-control text-center mt-3">
            <div className="flex justify-center items-center">
              <p className="text-lg">ประเภทของงาน : Work 1</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">ชื่องาน : Test</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">เวลาในการทำงาน : 90 นาที</p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="form-control mt-3">
            <div className="flex justify-center items-center">
              <p className="py-4 text-left">เวนาในการทำงาน :</p>
              <input
                type="text"
                placeholder="นาที"
                className="input input-bordered w-full max-w-44 ml-3"
              />
              <p className="py-4 text-left ml-3">เวลาที่ใช้ไป :</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-44 ml-3"
              />
            </div>
            <p className="py-4 text-left">ผลการปฎิบัติงาน :</p>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
            <p className="py-4 text-left">ภาพประกอบ :</p>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
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

export default ModalCheckWork;
