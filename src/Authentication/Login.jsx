import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../public/logo-1.png";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("mahmud.islam32@gmail.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

   
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col lg:flex-col justify-evenly items-center hero h-screen bg-gradient-to-b from-[#5337FF] to-[#4931e4]">
      <div className="items-center justify-center">
        <img className=" " src={logo} alt="logo" />
      </div>

      <div className="card shadow-2xl w-[26rem] bg-[#1E1E1E]">
        <div role="tablist" className="tabs bg-black p-2 rounded-lg mx-7 mt-8">
          <a role="tab" className="tab tab-active rounded-lg  bg-[#5BFFA7]">
            Creator
          </a>
          <a role="tab" className="tab">
            Brand
          </a>
        </div>
        <form className="card-body h-[300px]" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email-Adresse"
              className="input input-bordered border-white bg-black text-white"
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="input input-bordered border-white bg-black text-white"
            />
          </div>

          <div className="form-control mt-9">
            <input
              className="btn bg-white text-black"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>

      <p className="pb-3 text-center text-white">
        New here? Please
        <Link to="/register">
          <button className="btn btn-link text-white">Create an account</button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
