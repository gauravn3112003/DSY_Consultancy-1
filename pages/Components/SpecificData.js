import React, { useEffect, useState } from "react";

const SpecificData = () => {
  const [user, setUser] = useState(false);
  const [userAllData, setuserAllData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
      const token = localStorage.getItem("token");
      if (token) {
        // Decode the JWT token to get the payload
        const [, payloadBase64] = token.split(".");
        const payloadString = atob(payloadBase64);
        const payload = JSON.parse(payloadString);
        setuserAllData(payload.userData);
      }
    } else {
      setuserAllData({});
    }
  }, []);

  return {
    user: { userAllData },
    userStatus: user,
  };
};

export default SpecificData;
