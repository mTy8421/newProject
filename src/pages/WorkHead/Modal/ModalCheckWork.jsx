import axios from "axios";
import FormData from "form-data";

const ModalCheckWork = (props) => {
  const { name, type, time, id, topic } = props;

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Capture values from input fields
    const timeWork = document.querySelector("input[name='timeWork']").value;
    const timeUse = document.querySelector("input[name='timeUse']").value;
    const values = document.querySelector("textarea[name='values']").value;

    try {
      // ส่งคำสั่ง POST ไปยัง URL ที่กำหนด โดยรวมอยู่ในรูปแบบ multipart/form-data
      const formData = new FormData();
      formData.append("type", type);
      formData.append("name", name);
      formData.append("timeWork", timeWork);
      formData.append("timeUse", timeUse);
      formData.append("values", values);
      formData.append("topic", topic);
      formData.append("time", time);

      // อัปโหลดไฟล์ภาพประกอบ
      const image = document.querySelector("input[name='imgae']").files[0];
      if (image) {
        formData.append("image", image);
      }
      const response = await axios.post("/api/users/addWork", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const response = await axios.post("/api/users/addWork", newWorkData);

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
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        ตวจรสอบ
      </button>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-xl text-center">
            กรอกรายละเอียดภาระงานประจำวัน
          </h1>
          <div className="form-control text-center mt-3">
            <div className="flex justify-center items-center">
              <p className="text-lg">ประเภทของงาน : {type}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">ชื่องาน : {name}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">เวลาในการทำงาน : {time} นาที</p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="form-control mt-3">
            <div className="flex justify-center items-center">
              <p className="py-4 text-left">เวนาในการทำงาน :</p>
              <input
                type="text"
                placeholder="นาที"
                className="input input-bordered w-full max-w-44 ml-3"
                name="timeWork"
              />
              <p className="py-4 text-left ml-3">เวลาที่ใช้ไป :</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-44 ml-3"
                name="timeUse"
              />
            </div>
            <p className="py-4 text-left">ผลการปฎิบัติงาน :</p>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
              name="values"
            ></textarea>
            <p className="py-4 text-left">ภาพประกอบ :</p>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              name="imgae"
            />
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

export default ModalCheckWork;
