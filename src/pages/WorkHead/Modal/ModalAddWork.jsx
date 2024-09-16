import axios from "axios";
import { useState } from "react";

const ModalAddWork = () => {
  const [topicInput, setTopicInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [detailInput, setDetailInput] = useState("");
  const [typeInput, setTypeInput] = useState("งานหลัก/งานประจำ");
  const [timeInput, setTimeInput] = useState("");

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Construct data object
    const newWorkData = {
      topic: topicInput,
      date: dateInput,
      detail: detailInput,
      type: typeInput,
      time: timeInput,
    };

    try {
      // Send POST request to /api/users/add endpoint
      const response = await axios.post("/api/users/addHeadTitle", newWorkData);
      if (response.data.message == "success") {
        window.location.reload();
      } else {
        alert(`${response.data.message}`);
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div>
      <button
        className="btn btn-info text-white text-xl"
        onClick={() => document.getElementById("my_modal_x").showModal()}
      >
        เพิ่มภาระงาน
      </button>
      <dialog id="my_modal_x" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">เพิ่มภาระงาน</h3>
          <div className="form-control">
            <p className="py-4 text-left">ชื่อภาระงาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) => setTopicInput(e.target.value)}
            />
            <p className="py-4 text-left">ประเภทภาระงาน :</p>
            <select
              onChange={(e) => setTypeInput(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="งานหลัก/งานประจำ">งานหลัก/งานประจำ</option>
              <option value="งานยุทธศาสตร์">งานยุทธศาสตร์</option>
              <option value="งานพัฒนางานประจำ">งานพัฒนางานประจำ</option>
              <option value="งานเพื่อส่วนรวม">งานเพื่อส่วนรวม</option>
              <option value="งานอื่นที่ได้รับมอบหมาย">
                งานอื่นที่ได้รับมอบหมาย
              </option>
            </select>
            <p className="py-4 text-left">รายระเอียดภาระงาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) => setDetailInput(e.target.value)}
            />
            <p className="py-4 text-left">ระยะเวลากำหนดส่ง :</p>
            <input
              type="date"
              className="input input-bordered w-full max-w-44"
              onChange={(e) => setDateInput(e.target.value)}
            />

            <p className="py-4 text-left">เวลาในการทำงาน :</p>
            <input
              type="text"
              placeholder="(นาที)"
              className="input input-bordered ml-3 w-full max-w-44"
              onChange={(e) => setTimeInput(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <form onSubmit={handleSave}>
              {/* if there is a button, it will close the modal */}
              <button type="submit" className="btn btn-info text-white">
                บันทึกข้อมูล
              </button>
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
