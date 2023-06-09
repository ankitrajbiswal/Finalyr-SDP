"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';

import { set, useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import {ImSpinner2} from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const { register, handleSubmit } = useForm();

  const [formBox, setFormBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async(data) => {
      // e.preventDefault();
      setLoading(true);

      console.log(data);
      const docRef = await addDoc(collection(db, "petitions"), {
        name: data.fullname,
        registration_Id: data.registrationId,
        email: data.email,
        campus: data.campus,
        suggestions: data.suggestions,
        createdAt: serverTimestamp(),
      });
      
      setLoading(false);  
      setFormBox(false);
      toast.success("Your Request has been successfully sent!", {
        toastId: "1"
      });

  }
  return (
    <main className="w-full relative">
      <ToastContainer />
      <div className={formBox ? "fixed z-[9999] top-0 left-0 w-screen h-screen bg-[#000000cd] backdrop-blur-md flex justify-center items-center" : "hidden"}>
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-[500px] w-[90%] rounded-xl bg-white p-10 space-y-5">
          <div className="text-right">
            <button className="text-3xl relative -top-5 -right-5" onClick={()=>{setFormBox(false)}}><AiFillCloseCircle className="inline" /></button>
          </div>
            <div className="space-y-5 relative">
              <label
                htmlFor="registrationId"
                className="block absolute top-2 left-2 bg-white text-sm"
              >
                Registration ID
              </label>
              <input
                type="text"
                name="registrationId"
                id="registrationId"
                className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
                autoComplete="off"
                {...register("registrationId")}
                required
              />
            </div>
            <div className="space-y-5 relative">
              <label
                htmlFor="fullname"
                className="block absolute top-2 left-2 bg-white text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
                autoComplete="off"
                {...register("fullname")}
                required
              />
            </div>
            <div className="space-y-5 relative">
              <label
                htmlFor="email"
                className="block absolute top-2 left-2 bg-white text-sm"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
                autoComplete="off"
                {...register("email")}
                required
              />
            </div>
            <div className="space-y-5 relative">
              <label
                htmlFor="campus"
                className="block absolute top-2 left-2 bg-white text-sm"
              >
                Campus
              </label>
              <input
                type="text"
                name="campus"
                id="campus"
                className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
                autoComplete="off"
                {...register("campus")}
                required
              />
            </div>
            <div className="space-y-5 relative">
              <label
                htmlFor="suggestions"
                className="block absolute top-2 left-2 bg-white text-sm"
              >
                Write Your Suggestions
              </label>
              <textarea
                type="text"
                name="suggestions"
                id="suggestions"
                className="w-full border px-3 py-1 min-h-[100px] rounded-md text-xl outline-none focus:border-[#8000ff]"
                autoComplete="off"
                {...register("suggestions")}
              />
            </div>
            <div>
              
              {
                loading ? (
                  <span className="cursor-not-allowed w-full text-xl bg-[#000000] transition-all flex items-center justify-center text-white p-2 rounded-md">
                    <span>Submit</span> <span className="animate-spin"><ImSpinner2 /></span>
                  </span>
                ) : (<button className="w-full text-xl bg-[#ff7700] hover:bg-[#000] transition-all flex items-center justify-center text-white p-2 rounded-md">
                <span>Submit</span>
              </button>)
              }
            </div>

        </form>
      </div>
      <div className="bg1 w-screen min-h-[70vh] flex justify-center items-center flex-col">
        <h1 className="text-white text-5xl text-center uppercase tracking-widest md:text-9xl font-extrabold rounded-md p-10">
          We want Fest
        </h1>
        <div>
          <button className="px-10 py-3 bg-[#ff5100] md:text-3xl text-sm text-white rounded-sm uppercase tracking-wider" onClick={()=>{setFormBox(true)}}>
            Send A Request
          </button>
        </div>
      </div>
      <div className="w-screen flex items-center justify-center flex-col md:px-40 pt-10 px-5">
        <div className=" text-center ">
          <h1 className="md:text-5xl tracking-widest text-3xl pb-5 font-extrabold">
            🤩SOA FEST
          </h1>
          <p className="font-extralight pb-5 text-xs md:text-xl">
            SOA (Siksha 'O' Anusandhan DU) is today considered one of the best universities all over the country and has gained lot of recogniation.
            Today everyone in this country even outside India, SOA has gained recognition for all the laurels that the University has gained.
            Recently the college got Accredited by NAAC with 'A++' Grade (3rd Cycle),It was ranked internationally by 
            QS and THE World University Rankings. THE MHRD NIRF Inida Rankings 2022 secured 16th in University Category,
            27th in the Engineering Category,18th in the Medical Category, 10th in Dental Category, 9th in Law Category and
            45th in the Research Ctaegory.
            The University has also been granted with Category-I Graded Autonomy Status by UGC, Govt. Of India
            It was also Ranked 3rd Nationally in Swachh Campus, NABH also accredited SUM Hospital and NABL accredited Diagnostics Lab.
            Even after achieving so much still there are certain things where we are lacking behind.The Cultural Fest is something that is being organised by almost all universities
            for the students for the enhancement of social life , We have been constantly trying to reach management and we have been working over it since past three months but 
            the management is just procrastinating by saying that they are working on it and not providing any response.
            Here we are trying to reach every single student of SOA University to express their concern over this and let the management know the need for FEST in the college.
            
          </p>
        </div>
        <div className=" text-center flex items-center justify-center">
          <Image
            src={"/images/f16.jpg"}
            className="contrast-125 brightness-100"
            width={"700"}
            height={"700"}
            alt=""
          />
        </div>
        <div className=" pt-10 text-center">
          <h1 className="md:text-5xl text-2xl pb-2 font-bold">
            Why is this important??
          </h1>
          <p className="font-extralight pb-5 text-xs md:text-xl">
            The last fest that was organised was in 2020, but after that unfortunate pandemic affected each one of us and after that the fest was never organised.
            Today SOA is grabbing laurels in almost all field and the students are also reaching great heights and doing good in each and every field they are working.
            The University is almost providing everything that is needed for a student but Cultural fest is something that is missing since past few years.
            Today almost all universities , even universities nearby us as well as the universities which are ranked lower than us are organising the cultural fest for
            thier students. Our Students are attending fests of othe rcolleges as a guest but missing out on the fest of our own university, we urge student to sign this and let the 
            college know the our demand of the cultural fest.
          </p>
        </div>
      </div>
      <h1 className="text-center text-5xl md:pt-40 pb-5 font-light uppercase">Gallery</h1>
      <div className="w-screen flex flex-wrap  justify-center px-5 md:px-40 bg-[#ffffff] pb-10">
        <div className="m-5 overflow-hidden rounded-md shadow-[#989898] shadow-xl">
          <Image
            src={"/images/f11.jpg"}
            width={"500"}
            height={"500"}
            alt=""
          />
        </div>
        <div className="m-5 overflow-hidden rounded-md shadow-[#989898] shadow-xl">
          <Image
            src={"/images/f9.jpg"}
            width={"500"}
            height={"500"}
            alt=""
          />
        </div>
        <div className="m-5 overflow-hidden rounded-md shadow-[#989898] shadow-xl">
          <Image
            src={"/images/f3.jpg"}
            width={"500"}
            height={"500"}
            alt=""
          />
        </div>
        <div className="m-5 overflow-hidden rounded-md shadow-[#989898] shadow-xl">
          <Image
            src={"/images/f4.jpg"}
            width={"500"}
            height={"500"}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
