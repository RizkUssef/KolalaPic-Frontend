import React from 'react'
import CategorySlider from '../CategorySlider/CategorySlider'
import ImagesContainer from '../ImagesContainer/ImagesContainer'
import Footer from '../Footer/Footer'
import useCategoriesData from '../../Hooks/useCategoriesData'
import { useQuery } from 'react-query'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'
// import { isError } from './../../../node_modules/react-query/es/core/utils';

export default function Home() {
  function getAll() {
    return axios.get(
      `http://localhost/KolalaPic/public/apiShowAll/showAll`
    );
  }
  const {data,isError,isLoading,error} = useQuery({
    queryKey: "all",
    queryFn: getAll,
  });
  // console.log(data);
    if (isLoading) {
      return (
        <>
          <div className="h-screen flex justify-center items-center">
            <InfinitySpin
              visible={true}
              width="200"
              color="#688990"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        </>
      );
    }
    if (isError) {
      return (
          <div className="h-screen flex justify-center items-center">
            <p className="rounded-3xl px-40 py-5 text-red-100 bg-red-800 capitalize text-2xl secondary-font ">
              {error.response.data.error}
            </p>
          </div>
        );
    }
  return (
    <>
    <CategorySlider/>
    <ImagesContainer catName="More Like" data={data.data} />
    <Footer/>
    </>
  )
}
