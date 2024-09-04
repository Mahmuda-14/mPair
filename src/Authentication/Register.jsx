import { useNavigate } from "react-router-dom";

import { useState } from "react";
import DatePicker from "react-datepicker";

const Register = () => {
  const [startDate, setStartDate] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const position = form.position.value;
    const id = form.id.value;
    const type = form.querySelector('select[name="type"]').value;
    const email = form.email.value;
    const password = form.password.value;

    const product = {
      name,
      position,
      type,
      password,
      id,
      email,
    };

    console.log(product);

    fetch("http://localhost:8081/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    }) 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      });
      navigate("/dashboard");
  };

  return (
    <div className="flex flex-col lg:flex-col justify-evenly items-center hero h-screen bg-white">
      <div className="relative shadow-lg w-[26rem] h-[609px] border-t-4 border-[#2397C8] bg-[#F4FAFC]">
        <div className=" text-start px-10 pt-7">
          <h3 className=" text-[#2397C8] text-xl font-semibold">
            Welcome to PureLedger
          </h3>
          <h3 className=" text-[#9E9E9E] text-base font-medium">
            Fill up this form to Register
          </h3>
        </div>

        <form className="card-body gap-3" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
            required
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered border-white  text-[#979797]"
            />
          </div>

          <div className="flex flex-row gap-3">
            <select
              className="select select-info input input-bordered w-1/2 border-white  text-[#979797]"
              name="type"
            >
              <option disabled selected>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <div className="relative w-1/2">
              <DatePicker
                selected={startDate}
                placeholder
                onChange={(date) => setStartDate(date)}
                className="input input-bordered w-full border-white text-[#979797]"
                placeholderText="Date Of Birth"
              />
            </div>
          </div>

          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered border-white  text-[#979797]"
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              name="id"
              placeholder="Employee ID "
              className="input input-bordered border-white  text-[#979797]"
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              name="position"
              placeholder="Position In Organization"
              className="input input-bordered border-white  text-[#979797]"
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Enter Password here"
              className="input input-bordered border-white  text-[#979797]"
            />
          </div>

          <div className="form-control mt-9">
            <input
              className="btn bg-[#2397C8] text-white"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Register;
