import React from "react";

const Report = () => {
  return (
    <div>
      <div className="flex flex-row mx-10 mb-10 justify-between text-[#5E5E5E] ">
        <h2 className="font-medium text-xl">Daily Report</h2>
        <h2 className=" text-base">26th April, 2024</h2>
      </div>
      <div className="overflow-x-auto mx-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-[#A3A3A3]">
              <th>Serial</th>
              <th>Accounts Head</th>
              <th>Date</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody className=" text-[#656565]">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Transportation</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Red</td>
            </tr>
            {/* 4 */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
