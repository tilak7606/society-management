import React from "react";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";

const TotalSpent = () => {
  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="font-semibold">Residents Status</span>
          <span>
            <div className="relative top-4 h-3 w-3 rounded-sm bg-orange-400"></div>
          </span>
          <div className="relative bottom-[10px] left-5 top-[-2px]">
            <span className="text-sm font-medium text-gray-600">
              Residents Joined:
            </span>
            <span className="relative left-4 font-medium">457</span>
          </div>
        </div>

        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">This month</span>
        </button>
      </div>
      <span>
        <div className="relative top-3.5 h-3 w-3 rounded-sm bg-red-500"></div>
      </span>
      <div className="relative bottom-[10px] left-5 top-[-2px] flex">
        <span className="text-sm font-medium text-gray-600">
          Residents Left:
        </span>
        <span className="relative left-4 font-medium">182</span>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <div className=""></div>
            <div className="flex flex-col items-center justify-center">
              <span className="mt-3 font-medium text-gray-500">Increment</span>
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> +2.45% </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;
