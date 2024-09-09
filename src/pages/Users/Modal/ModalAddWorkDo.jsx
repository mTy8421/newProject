import axios from "axios";
import { useEffect } from "react";

const ModalAddWorkDo = (props) => {
  const { id, topic } = props;

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission
    // Capture values from input fields
    const topicInput = document.querySelector("input[name='topic']").value;
    const nameInput = document.querySelector("input[name='nameWork']").value;
    const timeInput = document.querySelector("input[name='time']").value;

    // Construct data object
    const newWorkData = {
      topic: topicInput,
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
          <h3 className="font-bold text-lg text-center">
            เพิ่มรายระเอียดหัวข้อภาระงานประจำวัน
          </h3>
          <div className="form-control">
            <p className="py-4 text-left">หัวข้อ : {topic}</p>
            <input type="hidden" name="topic" value={topic} />
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