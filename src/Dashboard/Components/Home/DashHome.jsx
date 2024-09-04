import Analystics from "./Analystics";


const DashHome = () => {
  return (
    <>
      <div className="flex flex-col">

        <div className="flex flex-row mx-7 justify-between">
          {/* 1 */}
          <div className="card text-white w-[350px] h-[161px] bg-[#F6DBDB] shadow-xl flex flex-col justify-between">
            <div className="card-body flex flex-row justify-between items-center p-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-end text-[#FF5F5F]">
                  20,700 TK
                </h2>
                <div className="flex flex-col mt-2 text-start">
                  <h2 className="text-xl text-[#868686] font-medium">
                    Total Debit
                  </h2>
                  <h2 className="text-sm text-[#868686] font-normal">
                    This Month
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card text-white w-[350px] h-[161px] bg-[#E0F6DB] shadow-xl flex flex-col justify-between">
            <div className="card-body flex flex-row justify-between items-center p-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-end text-[#21DF10]">
                  31,700 TK
                </h2>
                <div className="flex flex-col mt-2 text-start">
                  <h2 className="text-xl text-[#868686] font-medium">
                    Total Credit
                  </h2>
                  <h2 className="text-sm text-[#868686] font-normal">
                    This Month
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="card text-white w-[350px] h-[161px] bg-[#F6EBDB] shadow-xl flex flex-col justify-between">
            <div className="card-body flex flex-row justify-between items-center p-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-end text-[#E49700]">
                  34,200 TK
                </h2>
                <div className="flex flex-col mt-2 text-start">
                  <h2 className="text-xl text-[#868686] font-medium">
                    Total Amount
                  </h2>
                  <h2 className="text-sm text-[#868686] font-normal">
                    This Month
                  </h2>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="">
          <Analystics></Analystics>
        </div>
      </div>
    </>
  );
};

export default DashHome;
