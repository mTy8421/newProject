const ModalApprove = (props) => {
  const { time, name, id, topic, imgae, timeUse, values } = props;
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        ตรวจสอบ
      </button>
      <dialog id={`my_modal_${id}`} className="modal overflow-scroll">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-xl text-center">
            รายละเอียดภาระงานประจำวัน
          </h1>
          <div className="form-control text-center mt-3">
            <div className="flex justify-center items-center">
              <p className="text-lg">ชื่องาน : {name}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">เวลาในการทำงาน : {time} นาที</p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="form-control mt-3">
            <p className="text-sm text-center">
              เวลาที่่ใช้ไป : {timeUse} นาที
            </p>
            <p className="text-sm mt-3">ผลการปฎิบัติงาน : {values}</p>
            <img className="text-center mt-3" src={imgae} alt="รูปภาพ" />
          </div>
          <form className="flex justify-around">
            <button className="btn btn-info text-white">อนุมัติ</button>
            <button className="btn btn-error text-white">ไม่อนุมัติ</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          {/* if there is a button, it will close the modal */}
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalApprove;
