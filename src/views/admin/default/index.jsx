
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataComplex } from "./variables/columnsData";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";

import Widget from "components/widget/Widget";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import tableDataComplex from "./variables/tableDataComplex.json";

import Slider from "react-slick"; // Import the slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "../profile/components/Project";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function access(){
 
  const { email = "", password = ""} = location.state || {};

  if(email === "" || password === "") {
    navigate('/');
  }

}

useEffect(()=>{
  access();
},[]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of autoplay
    draggable: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Maintenance Collected"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<GiTakeMyMoney className="h-6 w-6" />}
          title={"Remaining Maintenance Balance"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdOutlineMapsHomeWork className="h-6 w-6" />}
          title={"Total Flats"}
          subtitle={"1875"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Pending Complaints"}
          subtitle={"264"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Occupied Flats"}
          subtitle={"145"}
        />
        <Widget
          icon={<FaCarAlt className="h-6 w-6" />}
          title={"	Total Vehicles Registered"}
          subtitle={"875"}
        />
      </div>

      {/* Poupular Rooms  */}
      <div className="!z-5 relative mt-5 flex flex-col rounded-[15px] bg-white bg-clip-border !p-[20px] text-center shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <h2 className="mb-4 text-xl font-bold">Flat Types</h2>
        <Slider className="mb-5" {...settings}>
          {/* Slide 1 */}
          <div className="relative px-2">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2021/06/30135412/modern-1bhk-bedroom-design-with-false-ceiling-and-queen-size-bed.jpg"
              alt="Room 1"
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <div className="bg-black absolute bottom-0 left-2 right-2 rounded-md bg-opacity-60 px-3 py-2 text-white backdrop-blur-md">
              <div className="text-lg font-bold">1BHK Standard</div>
              <div className="text-sm">625 sq.ft | ₹45 Lakh</div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative px-2">
            <img
              src="https://img.squareyards.com/secondaryPortal/IN_638790508062921669-3103250846464646.jpg"
              alt="Room 2"
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <div className="bg-black absolute bottom-0 left-2 right-2 rounded-md bg-opacity-60 px-3 py-2 text-white backdrop-blur-md">
              <div className="text-lg font-bold">2BHK Deluxe</div>
              <div className="text-sm">950 sq.ft | ₹72 Lakh</div>
            </div>
          </div>

          <div className="relative px-2">
            <img
              src="https://imagecdn.99acres.com/media1/29186/6/583726625M-1743829681611.jpg"
              alt="Room 3"
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <div className="bg-black absolute bottom-0 left-2 right-2 rounded-md bg-opacity-60 px-3 py-2 text-white backdrop-blur-md">
              <div className="text-lg font-bold">3BHK Premium</div>
              <div className="text-sm">1,350 sq.ft | ₹1.05 Crore</div>
            </div>
          </div>

          <div className="relative px-2">
            <img
              src="https://housing-images.n7net.in/01c16c28/2c5581a9ea9253470f845fd12ae79826/v0/large/2_bhk_apartment-for-sale-vikhroli_west-Mumbai-living_room.jpg"
              alt="Room 4"
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <div className="bg-black absolute bottom-0 left-2 right-2 rounded-md bg-opacity-60 px-3 py-2 text-white backdrop-blur-md">
              <div className="text-lg font-bold">Studio Apartment</div>
              <div className="text-sm">450 sq.ft | ₹32 Lakh</div>
            </div>
          </div>

          <div className="relative px-2">
            <img
              src="https://homessociety.com/images/landing/showroom/virtual-showroom-banner-home-society.jpg"
              alt="Room 5"
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <div className="bg-black absolute bottom-0 left-2 right-2 rounded-md bg-opacity-60 px-3 py-2 text-white backdrop-blur-md">
              <div className="text-lg font-bold">1.5BHK Compact</div>
              <div className="text-sm">720 sq.ft | ₹52 Lakh</div>
            </div>
          </div>

          <div className="relative px-2">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/640788881.jpg?k=9b4751bb737297dad110388fde448221ca8564d6879c06ff63a8184acd31fa47&o=&hp=1"
              alt="Room 6"
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <div className="bg-black absolute bottom-0 left-2 right-2 rounded-md bg-opacity-60 px-3 py-2 text-white backdrop-blur-md">
              <div className="text-lg font-bold">2.5BHK Comfort</div>
              <div className="text-sm">1,100 sq.ft | ₹85 Lakh</div>
            </div>
          </div>

          <div className="relative px-2">
            <img
              src="https://images1.apartments.com/i2/kN9iFVaEMFAxc9Fr-3FF7W7ziJ5A2waf1g33u9mmUo4/111/society-wynwood-miami-fl-lobby-entrance.jpg"
              alt="Room 7"
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <div className="bg-black absolute bottom-0 left-2 right-2 rounded-md bg-opacity-60 px-3 py-2 text-white backdrop-blur-md">
              <div className="text-lg font-bold">3BHK + Study Luxury</div>
              <div className="text-sm">1,600 sq.ft | ₹1.25 Crore</div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <Project />
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Traffic chart & Pie Chart */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
