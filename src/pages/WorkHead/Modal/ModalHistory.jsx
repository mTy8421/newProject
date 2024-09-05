const ModalHistory = (props) => {
  const { time, name, type, id, timeWork, timeUse, imgae, values } = props;
  console.table(name);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        ตวจรสอบ
      </button>
      <dialog id="my_modal_4" className="modal overflow-scroll">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-xl text-center">
            รายละเอียดภาระงานประจำวัน
          </h1>
          <div className="form-control text-center mt-3">
            <div className="flex justify-center items-center">
              <p className="text-lg">ประเภทของงาน : {id}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">ชื่องาน : {id}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">เวลาในการทำงาน : {id} นาที</p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="form-control mt-3">
            <p className="text-sm text-center">
              เวลาในการทำงาน : {id} นาที เวลาที่ใช้ไป : {id} นาที
            </p>
            <p className="text-sm mt-3">ผลการปฎิบัติงาน : {id}</p>
            <img
              className="text-center mt-3"
              src={`/api/images/${imgae}`}
              // alt="รูปภาพ"
              alt={`/api/images/${imgae}`}
            />
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

export default ModalHistory;
