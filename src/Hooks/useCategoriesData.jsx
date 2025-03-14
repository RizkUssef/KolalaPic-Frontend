import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
// import { useQuery } from './../../node_modules/react-query/es/react/useQuery';
// import axios from "./../../../node_modules/axios/lib/axios";


export default function useCategoriesData(cate) {
  function getCategory() {
    // console.log(cate);
    return axios.get(
      `http://localhost/KolalaPic/public/apiShowAll/showAll?category=${cate}`
    );
  }
  const res = useQuery({
    queryKey: cate,
    queryFn: getCategory,
  });

  return res;
}
