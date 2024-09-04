import { useEffect, useState } from "react";
import newp from "../../../public/Pure Ledger.png";
import pro from "../../../public/profile.jpg";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // Static user data
  const staticUser = {
    id: 1234,
    username: "Aminul Islam",
    position:'Account Manager',
    email: "johndoe@example.com",
    avatar: pro, // URL or path to the profile picture
  };

  // Simulate user login
  useEffect(() => {
    // Simulate a successful login by setting static user data
    setUser(staticUser);
  }, []);

  const handleLogOut = () => {
    setUser(null);
    navigate('/')
  };

  const nav2 = (
    <>
      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <div className="flex flex-row gap-3">
              <div className="flex flex-col text-[#FFFFFF] ">
              <h2 className="text-lg font-semibold">{user.username}</h2>
              <h3>{user.position}</h3>
              </div>
              <label
                tabIndex={0}
                className="avatar w-[43px] h-[43px] rounded-full"
              >
                {user.avatar && (
                  <img
                    className="w-14 h-14 rounded-full"
                    src={user.avatar} // Use static user avatar
                    alt="User Avatar"
                  />
                )}
              </label>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content border-2 z-[1] p-2 shadow bg-[#2397C81A] w-[98px] mt-5"
            >
              <Link to="/dashboard/profile">
                <li className="text-[#2397C8]">My profile</li>
              </Link>
              <li>
                <button
                  onClick={handleLogOut}
                  className="text-start text-[#2397C8] justify-start"
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="btn btn-outline min-h-1 rounded-md px-6 py-3 w-[86px] h-[38px] text-white border-2"
          >
            Login
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="">
      <nav className="bg-[#2397C8]">
        <div className="max-w-auto h-[70px] left-10 px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="">
              <Link to="/">
                <img src={newp} className="w-20 h-7" alt="" />
              </Link>
            </div>

            <div className="flex items-center space-x-4">{nav2}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
