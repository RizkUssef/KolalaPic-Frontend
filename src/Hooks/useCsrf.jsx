import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useCsrf(link) {
  const [csrf, setCsrf] = useState(null);
  function getCsrf() {
    return axios
      .get(link, {
        withCredentials: true,
      })
      .then((res) => {
        setCsrf(res.data.csrf);
      })
      .catch((res) => {
        console.log(res);
      });
  }
  useEffect(() => getCsrf, []);

  return csrf;
}
