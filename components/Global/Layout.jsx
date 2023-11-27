'use client'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import { toggleChooseCamera } from "@/redux/slices/buttonSlice";
import { selectAnalysis, selectCamera } from "@/redux/slices/cameraSlice";
import FilterSelect from "./FilterSelect";
import { setCategoriesAndZones } from "@/redux/slices/dataSlice";
import _ from "lodash";



export default function Layout({ children }) {
  const isOpenSideBar = useSelector((state) => state.button.sideBar);
  const isOpenChooseCamera = useSelector((state) => state.button.chooseCamera);
  const cameraChoosed = useSelector((state) => state.camera.cameraChoosed);
  const analysisType = useSelector((state) => state.camera.analysisType);
  const [formErrors, updateFormErrors] = useState({});



  const dispatch = useDispatch()

  const options = useSelector((state) => state.camera.options);
  useEffect(() => {
    dispatch(setCategoriesAndZones());
  }, [dispatch]);

  const handleSubmit = () => {
    if (cameraChoosed != "" && analysisType != "") {
      dispatch(toggleChooseCamera())
    }
       if (analysisType === "") {
      updateFormErrors({ filterAnalysis: "Type is required" })

    }
    if (cameraChoosed === "") {
      updateFormErrors({ filterCamera: "Camera is required" })
    }
    
 



  }
  const displayError = (key) => {
    if (!_.isEmpty(formErrors[key]))
      return <div className="pt-3 text-red-700">{formErrors[key]}</div>;
  };
  return (

    <>
      {isOpenChooseCamera &&
        <div className="fixed top-0  w-screen h-screen bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white drop-shadow-xl rounded-xl sm:w-1/2">
            <button className="w-full  borderCardChrono relative py-5 flex items-center  px-4">
              <span className="text-white font-bold text-lg">Settings</span>
              {/* <svg onClick={() => {
                dispatch(toggleChooseCamera())
              }} className="absolute right-0 mr-5 cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8672 0.194897C14.625 0.200615 14.3949 0.301995 14.2271 0.47688L8.00026 6.70377L1.77337 0.47688C1.68784 0.38896 1.58554 0.319098 1.47252 0.271431C1.35951 0.223764 1.23807 0.199261 1.11541 0.199373C0.933136 0.199599 0.755062 0.254158 0.60394 0.35608C0.452819 0.458003 0.335512 0.602661 0.267004 0.771577C0.198497 0.940492 0.181898 1.126 0.21933 1.30439C0.256762 1.48278 0.346524 1.64597 0.47715 1.7731L6.70404 7.99999L0.47715 14.2269C0.389174 14.3113 0.318936 14.4125 0.27055 14.5245C0.222163 14.6364 0.196601 14.7569 0.19536 14.8789C0.194119 15.0008 0.217224 15.1218 0.263323 15.2347C0.309421 15.3476 0.377586 15.4502 0.463825 15.5364C0.550064 15.6227 0.652643 15.6908 0.765556 15.7369C0.878469 15.783 0.999445 15.8061 1.1214 15.8049C1.24335 15.8037 1.36383 15.7781 1.47578 15.7297C1.58774 15.6813 1.68891 15.6111 1.77337 15.5231L8.00026 9.29622L14.2271 15.5231C14.3116 15.6111 14.4128 15.6813 14.5247 15.7297C14.6367 15.7781 14.7572 15.8037 14.8791 15.8049C15.0011 15.8061 15.1221 15.783 15.235 15.7369C15.3479 15.6908 15.4505 15.6227 15.5367 15.5364C15.6229 15.4502 15.6911 15.3476 15.7372 15.2347C15.7833 15.1218 15.8064 15.0008 15.8052 14.8789C15.8039 14.7569 15.7784 14.6364 15.73 14.5245C15.6816 14.4125 15.6113 14.3113 15.5234 14.2269L9.29648 7.99999L15.5234 1.7731C15.6568 1.6452 15.7484 1.47997 15.7862 1.29908C15.824 1.11819 15.8063 0.93009 15.7354 0.759448C15.6644 0.588807 15.5436 0.443591 15.3886 0.342846C15.2337 0.2421 15.052 0.19053 14.8672 0.194897Z" fill="white" />
              </svg> */}
            </button>
            <div className="flex flex-col py-10 px-5">
              <div>
                <FilterSelect title="Select a Camera" placeholder="Select your Camera" options={options} onOptionSelect={selectCamera} />
                {displayError("filterCamera")}
                <FilterSelect title="Select Analysis Type" placeholder="Select your Camera" options={[{ option: "Type 1" }, { option: "Type 2" }, { option: "Type 3" },]} onOptionSelect={selectAnalysis} />
                {displayError("filterAnalysis")}

              </div>

              <div className="flex flex-row place-content-end	">
                <button onClick={() => {
                  // dispatch(toggleChooseCamera())
                }} style={{ Color: "#5D6E81" }} className="p-2 lg:p-3 mt-2 lg:mt-5 rounded-md text-xs font-normal leading-5 lg:text-sm cursor-pointer border">Cancel</button>
                <button onClick={() => {
                  handleSubmit()
                }}
                  style={{ backgroundColor: "#2C79E0" }} className="ml-4 mr-1 p-2 lg:p-3 mt-2 lg:mt-5 rounded-md text-xs font-bold leading-5 lg:text-sm text-white cursor-pointer">Validate</button>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-center">Or</span>
                <button
                  style={{ backgroundColor: "#2C79E0" }} className="ml-4 mr-1 p-2 lg:p-3 mt-2 lg:mt-5 rounded-md text-xs font-bold leading-5 lg:text-sm text-white cursor-pointer">Add New Camera</button>
              </div>
            </div>

          </div>
        </div>
      }

      <div className="h-screen min-h-">
        <TopBar />
        <div className="flex relative" style={{ height: "calc(100vh - 55px)" }}>
          <SideBar isOpen={isOpenSideBar} />
          <main className="overflow-y-scroll mt-3 flex flex-col relative md:px-5 w-full">
            {children}
          </main>
        </div>
        <BottomBar />
      </div>

    </>
  );
}
