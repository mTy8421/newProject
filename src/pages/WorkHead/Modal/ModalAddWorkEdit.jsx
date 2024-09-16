import axios from "axios";
import { useState } from "react";

const ModalAddWorkEdit = (props) => {
  const { id, topic, date, detail, type, time } = props;

  const [topicInput, setTopicInput] = useState(topic);
  const [dateInput, setDateInput] = useState(date);
  const [detailInput, setDetailInput] = useState(detail);
  const [typeInput, setTypeInput] = useState(type);
  const [timeInput, setTimeInput] = useState(time);

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Construct data object
    const newWorkData = {
      id: id,
      topic: topicInput,
      date: dateInput,
      detail: detailInput,
      type: typeInput,
      time: timeInput,
    };

    try {
      // Send put request to /api/users/add endpoint
      const response = await axios.put("/api/users/addHeadTitle", newWorkData);
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
        className="btn btn-info text-white"
        onClick={() => document.getElementById(`my_modal_x${id}`).showModal()}
      >
        แก้ไข
      </button>
      <dialog id={`my_modal_x${id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">เพิ่มหัวข้อภาระงาน</h3>
          <div className="form-control">
            <p className="py-4 text-left">หัวข้อภาระงาน :</p>
            <input
              type="text"
              placeholder={topic}
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
              placeholder={detail}
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
              placeholder={time}
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

export default ModalAddWorkEdit;
