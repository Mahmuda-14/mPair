

import pro from '../../../public/profile.jpg'

const Profile = () => {
//   const { user } = useContext(AuthContext);
//   const userEmail = user?.email;
//   console.log(userEmail);
//   const photo = user?.photoURL;





  return (
    <div>
    
        <div className="card w-full"> 
          <h2 className="mx-8 text-[#494949] text-xl font-semibold">Profile Information </h2>
          <div >
            <img src={pro} className="w-[96px] h-[96px] mx-auto rounded-full" alt="" />
            
            <div className="flex flex-col mt-4 ml-[18rem] ">
              <h3 className="text-[#3E3E3E80] font-medium">Full Name</h3>
              <h2 className="font-bold text-[#3E3E3EBF]">Aminul Islam</h2>
              
            </div>
            <div className="flex flex-col mt-4 ml-[18rem] ">
              <h3 className="text-[#3E3E3E80] font-medium">Position</h3>
              <h2 className="font-bold text-[#3E3E3EBF]">Accounts Manager</h2>
              
            </div>
            <div className="flex flex-col mt-4 ml-[18rem] ">
              <h3 className="text-[#3E3E3E80] font-medium">Gender</h3>
              <h2 className="font-bold text-[#3E3E3EBF]">Male</h2>
              
            </div>
            <div className="flex flex-col mt-4 ml-[18rem] ">
              <h3 className="text-[#3E3E3E80] font-medium">Date Of Birth</h3>
              <h2 className="font-bold text-[#3E3E3EBF]">12-01-1996</h2>
              
            </div>
            <div className="flex flex-col mt-4 ml-[18rem] ">
              <h3 className="text-[#3E3E3E80] font-medium">Email</h3>
              <h2 className="font-bold text-[#3E3E3EBF]">Aminulislam@gmail.com</h2>
              
            </div>

            <div className="flex flex-col mt-4 ml-[18rem] ">
              <h3 className="text-[#3E3E3E80] font-medium">Employee ID</h3>
              <h2 className="font-bold text-[#3E3E3EBF]">983465</h2>
              
            </div>
          </div>
        
        </div>
      </div>
   
  );
};

export default Profile;