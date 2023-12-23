import React, { useContext } from "react";
// import Image from "next/image";
import './home.css'
import { getData } from "@/Data/data";
const Home = async () => {

  const posts = await getData() 

  console.log(posts)

  interface postType  {
    id: number,
    title: string,
    author: string

  }
  return (
    <div
    className={` bg-home1 bg-cover bg-center bg-no-repeat h-[95vh] w-screen absolute top-0 left-0 z-[-1]`}>
      <div className=" h-[95vh] w-screen absolute top-0 left-0 z-[-1]  bg-black opacity-40"></div>

      {
        posts.map((post: postType, index: number)=> (
          <div key={index} className="relative z-50">{post.id}</div>
        )) 
      }
    </div>
  );
};

export default Home;
