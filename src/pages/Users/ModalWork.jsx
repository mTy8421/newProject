import { useState } from "react";
import axios from "axios";

const ModalWork = (props) => {
  const { id } = props;

  const [time, setTime] = useState("");
  const [valueTest, setValueTest] = useState("");
  const [images, setImages] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("time", time);
    formData.append("valueTest", valueTest);
    formData.append("detail_id", id);
    if (images) {
      formData.append("image", images);
    }

    try {
      const response = await axios.post("/api/users/addWork", formData);
      if (response) {
        window.location.reload();
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        ตรวจสอบ
      </button>
      <form onSubmit={handleSubmit}>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h1 className="font-bold text-xl text-center">
              กรอกรายละเอียดภาระงานประจำวัน
            </h1>
            <div className="form-control text-center mt-3">
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
                <p className="py-4 text-left ml-3">เวลาที่ใช้ไป :</p>
                <input
                  type="text"
                  placeholder="นาที"
                  className="input input-bordered w-full max-w-44 ml-3"
                  name="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </div>
              <p className="py-4 text-left">ผลการปฎิบัติงาน :</p>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder=""
                name="valueTest"
                value={valueTest}
                onChange={(event) => setValueTest(event.target.value)}
              ></textarea>
              <p className="py-4 text-left">ภาพประกอบ :</p>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                name="images"
                onChange={(event) => setImages(event.target.files[0])}
              />
            </div>
            <div className="modal-action">
              <div>
                <button className="btn btn-info text-white" type="submit">
                  บันทึกข้อมูล
                </button>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>
      </form>
    </div>
  );
};

export default ModalWork;
