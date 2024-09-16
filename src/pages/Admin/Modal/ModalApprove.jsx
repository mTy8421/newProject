import axios from "axios";
import { useEffect, useState } from "react";

const ModalApprove = (props) => {
  const { id, topic, detail, type, date, testValues, time, img, idDetail } =
    props;

  const [check, setCheck] = useState();

  const [data, setData] = useState([]);
  const fetchUrl = async () => {
    try {
      const responst = await axios.get("/api/users/approveDetail");
      setData(responst.data);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      const responst = await axios.put("/api/users/approve", {
        title_id: id,
        status: check,
        detail_id: idDetail,
      });
      if (responst) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById(`my_modal_x${id}`).showModal()}
      >
        ตรวจสอบ
      </button>
      <dialog id={`my_modal_x${id}`} className="modal overflow-scroll">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-xl text-center">
            รายละเอียดภาระงานประจำวัน
          </h1>
          <div className="form-control text-center mt-3">
            <div className="flex justify-center items-center">
              <p className="text-lg">หัวข้อ : {topic}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">ประเภทภาระงาน : {type}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">รายระเอียดภาระงาน : {detail}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">ระยะเวลากำหนดส่ง : {date}</p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="form-control mt-3 text-center">
            <p className="text-sm mt-3">เวลาในการทำงาน : {time} นาที</p>
            <p className="text-sm mt-3">ผลการปฎิบัติงาน : {testValues}</p>
          </div>

          <img
            className="text-center mt-3"
            src={`/api/images/${img}`}
            alt="รูปภาพ"
          />
          <form onSubmit={update} className="flex justify-around">
            <button
              className="btn btn-info text-white"
              onClick={() => {
                setCheck(true);
              }}
            >
              อนุมัติ
            </button>
            <button
              className="btn btn-error text-white"
              onClick={() => {
                setCheck(false);
              }}
            >
              ไม่อนุมัติ
            </button>
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
