import axios from "axios";
import React from "react";
import { useQuery } from "react-query";


export default function useCategoriesData(cate) {
  function getCategory() {
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
