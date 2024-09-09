import axios from "axios";
import { useEffect, useState } from "react";

const ModalAddWorkDo = (props) => {
  const { id } = props;

  const [valueRadio, setValueRadio] = useState("work1");

  const [selectValue, setSelectValue] = useState([]);

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission
    // Capture values from input fields
    const topicInput = document.querySelector("select[name='topic']").value;
    const radioInput = valueRadio;
    const nameInput = document.querySelector("input[name='nameWork']").value;
    const timeInput = document.querySelector("input[name='time']").value;

    // Construct data object
    const newWorkData = {
      topic: topicInput,
      type: radioInput,
      name: nameInput,
      time: timeInput,
    };

    try {
      // Send POST request to /api/users/add endpoint
      const response = await axios.post("/api/users/addHeadWork", newWorkData);
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

  const mainTitle = async () => {
    try {
      const response = await axios.get("/api/users/addHeadTitle");
      setSelectValue(response.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    mainTitle();
  }, []);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-info text-white"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        เพิ่ม
      </button>
      <dialog id={`my_modal_${id}`} className="modal">
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
                    // checked
                    onChange={() => {
                      setValueRadio("work4");
                    }}
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
                    // checked
                    onChange={() => {
                      setValueRadio("work3");
                    }}
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
                    // checked
                    onChange={() => {
                      setValueRadio("work2");
                    }}
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
                    // checked
                    onChange={() => {
                      setValueRadio("work1");
                    }}
                  />
                  <span className="label-text ml-3">Work 1</span>
                </label>
              </div>
            </div>
            <p className="py-4 text-left">หัวข้อหลัก :</p>
            <select className="select select-bordered" name="topic">
              <option value={""} disabled selected>
                Who shot first?
              </option>
              {selectValue.map((item) => (
                <option key={item.id} value={item.topic}>
                  {item.topic}
                </option>
              ))}
            </select>
            <p className="py-4 text-left">ชื่อภาระงาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="nameWork"
            />
            <div className="flex mt-3">
              <p className="py-4 text-left">เวลาในการทำงาน :</p>
              <input
                type="text"
                placeholder="นาที"
                className="input input-bordered ml-3 w-full max-w-44"
                name="time"
              />
            </div>
          </div>
          <div className="modal-action">
            <form onSubmit={handleSave}>
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
