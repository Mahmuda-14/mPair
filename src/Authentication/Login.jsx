import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const password = form.password.value;

    const product = {
      password,
      id,
    };

    console.log(product);

    fetch("http://localhost:8081/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
       
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          console.log(data);
          navigate("/dashboard"); // Navigate to dashboard only on successful login
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col lg:flex-col justify-evenly items-center hero h-screen bg-white">
      <div className="relative shadow-lg w-[26rem] h-[29rem] border-t-4 border-[#2397C8] bg-[#F4FAFC]">
        <div className=" text-start px-10 pt-7">
          <h3 className=" text-[#2397C8] text-xl font-semibold">
            Welcome to PureLedger
          </h3>
          <h3 className=" text-[#9E9E9E] text-base font-medium">
            Please Login to continue
          </h3>
        </div>

        <form className="card-body h-[300px]" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Employee ID</span>
            </label>
            <input
              type="text"
              name="id"
              placeholder="Enter Employee ID here"
              className="input input-bordered border-white  text-[#979797]"
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Enter Password here"
              className="input input-bordered border-white text-[#979797] pr-10"
            />
            {/* Toggle icon */}
            <div
              className="absolute right-3 top-[57px] text-2xl transform -translate-y-1/2 cursor-pointer text-[#979797]"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <AiFillEyeInvisible />
              ) : (
                <MdOutlineRemoveRedEye />
              )}
            </div>
          </div>

          <div className="form-control mt-9">
            <input
              className="btn bg-[#2397C8] text-white"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p className="pb-3 text-center text-[#9E9E9E]">
          Don’t have an account?
          <Link to="/register">
            <button className="btn btn-link text-[#2397C8]">
              Register Now!
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
