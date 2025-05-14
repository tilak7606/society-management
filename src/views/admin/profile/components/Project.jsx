import React from "react";
import Card from "components/card";
import Progress from "components/progress";

const Project = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 flex w-full items-center justify-between">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Vehicle Registration
        </h4>
        <div>
          <div className="flex items-center rounded-full border border-gray-200 px-1 py-1">
            <button
              className={`rounded-full bg-blueSecondary px-4 py-1 text-xs text-white`}
            >
              All
            </button>
            <button className={`rounded-full px-4 py-1 text-xs`}>Cars</button>
            <button className={`rounded-full px-4 py-1 text-xs`}>Bikes</button>
          </div>
        </div>
      </div>
      {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img
              className="h-[83px] w-[83px] rounded-lg"
              src={
                "https://img.staticmb.com/mbcontent/images/uploads/2022/8/Laws-and-Parking-Rules-in-Residential-Areas-India.jpg"
              }
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              520 Cars
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <Progress
                width="lg:w-[398px] md:w-auto"
                value={75}
                color="blue"
              />
              <span className="ml-1 mt-1 flex items-center justify-between font-medium text-brand-500 hover:text-brand-500 dark:text-white">
                Covered Parking{" "}
                <span className="text-gray-500">75% (450/600)</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img
              className="h-[83px] w-[83px] rounded-lg"
              src={
                "https://thumbs.dreamstime.com/b/hyderabad-india-august-th-stock-photo-residential-building-parking-area-two-wheelers-bicycle-four-wheeler-vehicles-parked-253894916.jpg"
              }
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              352 Two-wheelers
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <Progress
                width="lg:w-[398px] md:w-auto"
                value={90}
                color="cyan"
              />
              <span className="ml-1 mt-1 flex items-center justify-between font-medium text-brand-500 hover:text-brand-500 dark:text-white">
                Open Parking{" "}
                <span className="text-gray-500">90% (270/300)</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img
              className="h-[83px] w-[83px] rounded-lg"
              src={
                "https://imagecdn.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/03/Extra-car-parking-registration-in-India.jpg"
              }
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              42 Others
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <Progress width="lg:w-[398px] md:w-auto" value={60} />
              <span className="ml-1 mt-1 flex items-center justify-between font-medium text-brand-500 hover:text-brand-500 dark:text-white">
                Visitor Parking{" "}
                <span className="text-gray-500">40% (40/100)</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
