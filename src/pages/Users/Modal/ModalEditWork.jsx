import axios from "axios";
import { useEffect, useState } from "react";

const ModalEditWork = (props) => {
  const { id, topic, name, time } = props;

  const [nameInput, setNameInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission
    // Capture values from input fields
    console.log(nameInput);

    // Construct data object
    const newWorkData = {
      id: id,
      topic: topic,
      name: nameInput,
      time: timeInput,
    };

    try {
      // Send put request to /api/users/add endpoint
      const response = await axios.put("/api/users/addHeadWork", newWorkData);
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
      return response;
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
        onClick={() => document.getElementById(`my_modal_x${id}`).showModal()}
      >
        แก้ไข
      </button>
      <dialog id={`my_modal_x${id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center">
            เพิ่มรายระเอียดหัวข้อภาระงานประจำวัน
          </h3>
          <div className="form-control">
            <p className="py-4 text-left">หัวข้อ : {topic}</p>
            <p className="py-4 text-left">ชื่อภาระงาน :</p>
            <input
              type="text"
              placeholder={name}
              className="input input-bordered w-full"
              onChange={(e) => setNameInput(e.target.value)}
            />
            <div className="flex mt-3">
              <p className="py-4 text-left">เวลาในการทำงาน :</p>
              <input
                type="text"
                placeholder={time}
                className="input input-bordered ml-3 w-full max-w-44"
                onChange={(e) => setTimeInput(e.target.value)}
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

export default ModalEditWork;
