import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import collegeContext from "./collegeContext";
import Toastmsg from "directsecondyearadmission/pages/Components/Toastmsg";
import { useRouter } from "next/router";

const CollegeState = (props) => {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState(false); //login status
  const [userId, setUserId] = useState("");
  const [userAllData, setuserAllData] = useState({});
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const [, payloadBase64] = token.split(".");
      const payloadString = atob(payloadBase64);
      const payload = JSON.parse(payloadString);

      localStorage.setItem("userId", payload.userData._id);
      setUserId(localStorage.getItem("userId"));

      setLoginStatus(true);
      const userDetails = localStorage.getItem("userDetail");
      if (userDetails) {
        setuserAllData(JSON.parse(userDetails));
      }
    }
  }, []);

  //   Logout function
  const logOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userDetail");
      toast.success("Logout Succesfully", {});
      router.push("/");
    }
  };

  return (
    <collegeContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
        userAllData,
        setuserAllData,
        logOut,
      }}
    >
      <Toastmsg />
      {props.children}
    </collegeContext.Provider>
  );
};
export default CollegeState;
