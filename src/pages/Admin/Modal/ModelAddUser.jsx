import axios from "axios";
import { useState } from "react";

const ModelAddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");

  console.log(role);

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission
    // Construct data object
    const newWorkData = {
      username,
      email,
      password,
      role,
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
        เพิ่มผู้ใช้งาน
      </button>
      <dialog id="my_modal_x" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">เพิ่มผู้ใช้งาน</h3>
          <div className="form-control">
            <p className="py-4 text-left">ชื่อผู้ใช้งาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="py-4 text-left">Email ผู้ใช้งาน :</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="py-4 text-left">รหัสผ่านผู้ใช้งาน :</p>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="py-4 text-left">ต่ำแหน่งผู้ใช้งาน :</p>
            <select
              onChange={(e) => setRole(e.target.value)}
              className="input input-bordered w-full"
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
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

export default ModelAddUser;
