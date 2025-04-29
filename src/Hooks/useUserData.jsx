import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth";

export default function useUserData() {
  const [userData, setUserData] = useState(null);
  const { auth } = useContext(AuthContext);
  function getUserData() {
    return axios
      .get(`http://localhost/KolalaPic/public/apiUploadImage/getUserData`, {
        withCredentials: true,
        headers: {
          tkn: auth,
        },
      })
      .then((res) => {
        // console.log(res);
        setUserData(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }
  useEffect(() => {
    if (auth) {
      getUserData();
    }
  }, [auth]);

  return userData;
}
