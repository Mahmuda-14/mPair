

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  LabelList,
} from "recharts";

const Analystics = () => {


  const data = [
    { month: "January", debit: 1000, credit: 400 },
    { month: "February", debit: 1170, credit: 460 },
    { month: "March", debit: 660, credit: 1120 },
    { month: "April", debit: 1030, credit: 540 },
    { month: "May", debit: 1030, credit: 540 },
    { month: "June", debit: 1030, credit: 540 },
    { month: "July", debit: 1030, credit: 540 },
    { month: "August", debit: 1030, credit: 540 },
    { month: "September", debit: 1030, credit: 540 },
    { month: "October", debit: 1030, credit: 540 },
    { month: "November", debit: 1030, credit: 540 },
    { month: "December", debit: 1030, credit: 540 },
  ];

  return (
    <div className="w-[1221px] mx-auto my-8  p-10 bg-[#F4F4F4]">
      <div className="flex flex-row justify-between mb-5">
      <h2 className="text-left text-lg text-[#4E4E4E] font-semibold mb-4">
        Yearly Account Analysis
      </h2>
      <select className="select select-bordered bg-[#e4e1e1]  text-[#6D6D6D] max-w-xs">
        <option disabled selected>
          Year 2024
        </option>
        <option>Year 2023</option>
        <option>Year 2022</option>
        <option>Year 2021</option>
      </select>
      </div>
      <BarChart
        width={1200}
        height={400}
        data={data}
        margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="debit"
          fill="#FF5F5E"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        ></Bar>
        <Bar
          dataKey="credit"
          fill="#52E30E"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        ></Bar>
      </BarChart>
    </div>
  );
};

export default Analystics;
