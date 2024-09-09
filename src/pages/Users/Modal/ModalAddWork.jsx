import axios from "axios";

const ModalAddWork = () => {
  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission
    // Capture values from input fields
    const topicInput = document.querySelector("input[name='topic']");

    // Construct data object
    const newWorkData = {
      topic: topicInput ? topicInput.value : "",
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
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        เพิ่มหัวข้อภาระงาน
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">เพิ่มหัวข้อภาระงาน</h3>
          <div className="form-control">
            <p className="py-4 text-left">หัวข้อภาระงาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="topic"
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
