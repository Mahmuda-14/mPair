import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa";

const Account = () => {
  const [selectedOption, setSelectedOption] = useState("Account Type");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-[742px] h-[478px] mx-auto my-8  p-10 bg-[#F4F4F4]">
        <div className="flex flex-row  justify-between mb-5">
          <div className="flex flex-col gap-6">
            <h2 className="text-left text-lg text-[#4E4E4E] font-semibold mb-4">
              Add Accounting
            </h2>
            <label className="input input-bordered rounded-none flex items-center gap-2">
              <input type="text" className="grow" placeholder="Choose Date" />
              <FaCalendar className="text-[#979797]" />
            </label>

            <div className="relative w-full max-w-xs">
              <div
                className="select select-info rounded-none text-[#4E4E4E] w-full p-3  cursor-pointer"
                onClick={toggleDropdown}
              >
                {selectedOption}
              </div>
              {isOpen && (
                <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                  <label className="flex items-center px-4 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="language"
                      value="Credit"
                      className="radio radio-primary"
                      onChange={handleChange}
                      checked={selectedOption === "Credit"}
                    />
                    <span className="ml-2">Credit</span>
                  </label>
                  <label className="flex items-center px-4 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="language"
                      value="Debit"
                      className="radio radio-primary"
                      onChange={handleChange}
                      checked={selectedOption === "Debit"}
                    />
                    <span className="ml-2">Debit</span>
                  </label>
                </div>
              )}
            </div>

            <select className="select select-info rounded-none w-full max-w-xs">
              <option disabled selected>
                Choose Head
              </option>
              <option>Muna</option>
              <option>Mitu</option>
              <option>Nur</option>
            </select>
            <label className="input input-bordered rounded-none flex items-center gap-2">
              <input type="text" className="grow" placeholder="Amount" />
            </label>
            <input
              type="button"
              value="Submit"
              className=" w-[277px] h-[41px] px-4 py-2 bg-[#2397C8] text-white"
            />
          </div>
          <div className="divider lg:divider-horizontal"></div>

          <div className="flex flex-col gap-3">
            <h2 className="text-left text-lg text-[#4E4E4E] font-semibold mb-4">
              Account Heads
            </h2>

            <input
              type="text"
              className="w-[170px] h-[30px] p-2 bg-[#ECEDFA]"
              placeholder="Transportation"
            />
            <input
              type="text"
              className="w-[170px] h-[27px] p-2 bg-[#ECEDFA]"
              placeholder="Office maintenance"
            />
            <input
              type="text"
              className="w-[170px] h-[27px] p-2 bg-[#ECEDFA]"
              placeholder="Stationary"
            />
            <input
              type="text"
              className="w-[170px] h-[27px] p-2 bg-[#ECEDFA]"
              placeholder="Food"
            />

            {/* <input
              type="submit"
              className="w-[170px] h-[35px] p-4 bg-transparent text-[#2397C8]"
              value="Add Accounts Head"
            /> */}

            <button
              className="w-[182px] h-[50px] px-4 bg-transparent text-[#2397C8]"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Add Accounts Head
            </button>

            <dialog id="my_modal_1" className="modal ">
              <div className="modal-box rounded-none  border-t-4 border-t-[#2397C8]">
                <h3 className="font-semibold text-left text-lg p-5 text-[#9E9E9E]">
                  Add Account Head
                </h3>

                <hr className=" text-center p-3" />
                <div className="flex space-x-4 items-center justify-center mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio text-[#2397C8]"
                      value="debit"
                      defaultChecked
                    />
                    <span className="ml-2">Debit</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio"
                      value="credit"
                    />
                    <span className="ml-2">Credit</span>
                  </label>
                </div>

                <form
                  method="dialog"
                  className="modal-action flex flex-col gap-2 items-center space-x-2"
                >
                  <input
                    type="text"
                    placeholder="Type name here"
                    className="input border-none rounded-sm w-full"
                  />
                  <button type="submit" className="btn bg-[#2397C8] justify-center text-white w-[30rem]">
                    Add Head
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
