import file from "../../../../public/Group 11.png";
import file2 from "../../../../public/Rectangle 93.png";
import file3 from "../../../../public/Frame 2.png";
import "./home.css";
import { IoMdAdd } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
const DashHome = () => {
  return (
    <>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-row mx-7 gap-6 justify-between ">
          <div className="card text-white w-1/3 h-52 bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] shadow-xl flex flex-col justify-between ">
            <div className="card-body flex flex-row">
              <div>
                <h2 className="top-6 -left-3 text-xl text-white">
                  Foundations of User Experience (UX) Design
                </h2>
                <div className="flex flex-row mt-2">
                  <h2 className="text-sm">4 Assignments</h2>
                  <RxDotFilled />
                  <h2 className="text-sm">20 Videos</h2>
                </div>
              </div>
              <div className="w-[50%] flex items-center justify-center mb-9">
                <div
                  className="radial-progress bg-[#BDC9F5] text-blue-900 border-blue-900"
                  style={{
                    "--value": 80,
                    backgroundColor: "white",
                    borderBlockColor: "blue",
                  }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center -mt-28 ">
              <button className="btn px-10 mb-2 rounded-3xl">
                Continue Course
              </button>
            </div>
          </div>

          {/* <div className="card w-1/3 h-48 bg-[#2C2C2C] shadow-xl">
            <div className="card-body gap-0">
              <h2 className="card-title text-white text-2xl">To Do</h2>

              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio border-white checked:bg-[#5BFFA7]"
                    checked
                  />
                  <span className="label-text text-white mx-2">
                    Call mit Anna vereinbaren
                  </span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio border-white checked:bg-[#5BFFA7]"
                    checked
                  />
                  <span className="label-text text-white mx-2">
                    Briefing Florian
                  </span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio border-white checked:bg-[#5BFFA7]"
                    checked
                  />
                  <span className="label-text text-white mx-2">
                    Outreach Insta
                  </span>
                </label>
              </div>
              <button className=" btn btn-sm btn-circle bg-transparent text-white text-3xl relative left-[290px] -top-[46px]">
                <IoMdAdd></IoMdAdd>
              </button>
            </div>
          </div> */}

          {/* <div class="card w-1/3 h-48 bg-[#2C2C2C] shadow-xl"></div> */}
        </div>

        <div className="flex flex-col mx-7 gap-6 justify-between ">
          <div className="card text-black w-1/3 h-52 bg-[#F7F7FF] shadow-xl flex flex-col justify-between ">
            <div className="card-body flex flex-row">
              <div>
                <h2
                  className="top-6 -left-3 text-xl text-black
"
                >
                  Start the UX Design Process: Empathize, Define, and Ideate
                </h2>
                <div className="flex flex-row mt-2">
                  <h2 className="text-sm">4 Assignments</h2>
                  <RxDotFilled />
                  <h2 className="text-sm">20 Videos</h2>
                </div>
              </div>
              <div className="w-[50%] flex items-center justify-center mb-9">
                <div
                  className="radial-progress bg-[#BDC9F5] text-blue-900 border-blue-900"
                  style={{
                    "--value": 80,
                    backgroundColor: "white",
                    borderBlockColor: "blue",
                  }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center -mt-28 ">
              <button className="btn px-10 mb-2 rounded-3xl  bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]">
                Continue Course
              </button>
            </div>
          </div>


         <div className="card text-black w-1/3 h-52 bg-[#F7F7FF] shadow-xl flex flex-col justify-between ">
            <div className="card-body flex flex-row">
              <div>
                <h2
                  className="top-6 -left-3 text-xl text-black
"
                >
                  Start the UX Design Process: Empathize, Define, and Ideate
                </h2>
                <div className="flex flex-row mt-2">
                  <h2 className="text-sm">4 Assignments</h2>
                  <RxDotFilled />
                  <h2 className="text-sm">20 Videos</h2>
                </div>
              </div>
              <div className="w-[50%] flex items-center justify-center mb-9">
                <div
                  className="radial-progress bg-[#BDC9F5] text-blue-900 border-blue-900"
                  style={{
                    "--value": 80,
                    backgroundColor: "white",
                    borderBlockColor: "blue",
                  }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center -mt-28 ">
              <button className="btn px-10 mb-2 rounded-3xl  bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]">
                Continue Course
              </button>
            </div>
          </div>


         <div className="card text-black w-1/3 h-52 bg-[#F7F7FF] shadow-xl flex flex-col justify-between ">
            <div className="card-body flex flex-row">
              <div>
                <h2
                  className="top-6 -left-3 text-xl text-black
"
                >
                  Start the UX Design Process: Empathize, Define, and Ideate
                </h2>
                <div className="flex flex-row mt-2">
                  <h2 className="text-sm">4 Assignments</h2>
                  <RxDotFilled />
                  <h2 className="text-sm">20 Videos</h2>
                </div>
              </div>
              <div className="w-[50%] flex items-center justify-center mb-9">
                <div
                  className="radial-progress bg-[#BDC9F5] text-blue-900 border-blue-900"
                  style={{
                    "--value": 80,
                    backgroundColor: "white",
                    borderBlockColor: "blue",
                  }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center -mt-28 ">
              <button className="btn px-10 mb-2 rounded-3xl  bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]">
                Continue Course
              </button>
            </div>
          </div>


        <div className="card text-black w-1/3 h-52 bg-[#F7F7FF] shadow-xl flex flex-col justify-between ">
            <div className="card-body flex flex-row">
              <div>
                <h2
                  className="top-6 -left-3 text-xl text-black
"
                >
                  Start the UX Design Process: Empathize, Define, and Ideate
                </h2>
                <div className="flex flex-row mt-2">
                  <h2 className="text-sm">4 Assignments</h2>
                  <RxDotFilled />
                  <h2 className="text-sm">20 Videos</h2>
                </div>
              </div>
              <div className="w-[50%] flex items-center justify-center mb-9">
                <div
                  className="radial-progress bg-[#BDC9F5] text-blue-900 border-blue-900"
                  style={{
                    "--value": 80,
                    backgroundColor: "white",
                    borderBlockColor: "blue",
                  }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center -mt-28 ">
              <button className="btn px-10 mb-2 rounded-3xl  bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]">
                Continue Course
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default DashHome;
