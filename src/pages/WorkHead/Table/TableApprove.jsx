import ModalApprove from "../Modal/ModalApprove";
const TableApprove = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>รหัสภาระงาน</th>
            <th>ชื่อผู้ใช้งาน</th>
            <th>ชื่อภาระงาน</th>
            <th>ตวจรสอบ</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>
              <ModalApprove></ModalApprove>
            </td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>
              <ModalApprove></ModalApprove>
            </td>
          </tr>
          {/* row 3 */}
          <tr className="hover">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <ModalApprove></ModalApprove>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableApprove;
