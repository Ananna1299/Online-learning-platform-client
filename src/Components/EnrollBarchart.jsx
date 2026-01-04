import React from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const EnrollBarchart = ({ allEnroll }) => {
  const chartData = Object.values(
    allEnroll.reduce((acc, course) => {
      acc[course.title] = acc[course.title] || {
        name: course.title,
        count: 0,
      };
      acc[course.title].count += 1;
      return acc;
    }, {})
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-center font-semibold mb-4 text-blue-900">
        Course Enrollment Count
      </h2>

      <BarChart
        width={800}
        height={350}
        data={chartData}
        margin={{ top: 20, right: 20, left: 20, bottom: 100 }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="name"
          interval={0}
          angle={-35}
          textAnchor="end"
        />

        {/* INTEGER Y AXIS */}
        <YAxis
          allowDecimals={false}
          domain={[0, 10]}
          tickCount={11}
        />

        <Tooltip
        labelStyle={{ color: "#1e3a8a", fontWeight: "600" }}
  itemStyle={{ color: "#2563EB" }} />

        <Bar dataKey="count" fill="#2563EB" />
      </BarChart>
    </div>
  );
};

export default EnrollBarchart;
