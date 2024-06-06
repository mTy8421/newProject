const ModalApprove = () => {
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
            <p className="text-sm text-center">
              เวลาในการทำงาน : 90 นาที เวลาที่่ใช้ไป : 30 นาที
            </p>
            <p className="text-sm mt-3">
              ผลการปฎิบัติงาน : Lorem ipsum dolor sit amet, officia excepteur ex
              fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur
              mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
              officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
              amet voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <img
              className="text-center mt-3"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg"
              alt="รูปภาพ"
            />
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
