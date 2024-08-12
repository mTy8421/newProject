import ModalCheckWork from "../Modal/ModalCheckWork";

const TableWork = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>รหัสภาระงาน</th>
            <th>ชื่อภาระงาน</th>
            <th>ชื่อหัวข้อภาระงาน</th>
            <th>ตวจรสอบ</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>
              <ModalCheckWork></ModalCheckWork>
            </td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <td>2</td>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>
              <ModalCheckWork></ModalCheckWork>
            </td>
          </tr>
          {/* row 3 */}
          <tr className="hover">
            <td>3</td>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <ModalCheckWork></ModalCheckWork>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableWork;
