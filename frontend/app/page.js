"use client";

import TopTitle from '@/components/Global/TopTitle';
import isAuth from '@/components/isAuth'
import Layout from '@/components/Global/Layout';
import ZoneOverview from '@/components/Dashboard/ZoneOverview';
import CategorieZone from '@/components/Dashboard/CategorieZone';
import GlobalStat from '@/components/Dashboard/GlobalStat';
import { useDispatch, useSelector } from 'react-redux';
import CategorieTime from '@/components/Dashboard/CategorieTime';
import CatergoriesDoughnut from '@/components/Dashboard/CatergoriesDoughnut';
import { useState } from 'react';
import FilterCheckbox from '@/components/Global/FilterCheckbox';
import { filterdata } from '@/redux/slices/dataSlice';
import LineChart from '@/components/Dashboard/LineChart';
import ZoneInZoneOut from '@/components/Dashboard/ZoneInZoneOut';

const Home = () => {
    const dispatch = useDispatch()

    const bourseSelected = useSelector((state) => state.bourse.bourseChoosed),
        analysisSelected = useSelector((state) => state.bourse.analysisType),
        options = useSelector((state) => state.data.categories),
        options1 = useSelector((state) => state.data.zones);

    const [openfilter, setopenfilter] = useState(false),
        [categoryFilter, setCategoryFilter] = useState([]),
        [zoneFilter, setZoneFilter] = useState([]);



    const ShowFilter = () => {
        setCategoryFilter([])
        setZoneFilter([])
        setopenfilter(!openfilter)
    }

    const handleCategoryFilterChange = (selectedCategory) => {
        if (!categoryFilter.includes(selectedCategory)) {
            setCategoryFilter([...categoryFilter, selectedCategory]);
        }
    };

    const handleZoneFilterChange = (selectedZone) => {
        if (!zoneFilter.includes(selectedZone)) {
            setZoneFilter([...zoneFilter, selectedZone]);
        }
    };

    const handleSubmitfilter = () => {
        dispatch(filterdata({ category: categoryFilter, zones: zoneFilter }))
    };

    return (
        <>
            {openfilter &&
                <div className="fixed top-0  w-screen h-screen bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white drop-shadow-xl rounded-xl sm:w-1/2">
                        <button className="w-full  borderCardChrono relative py-5 flex items-center  px-4">
                            <span className="text-white font-bold text-lg">Filter</span>
                            <svg onClick={() => {
                                setopenfilter(!openfilter)
                            }} className="absolute right-0 mr-5 cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8672 0.194897C14.625 0.200615 14.3949 0.301995 14.2271 0.47688L8.00026 6.70377L1.77337 0.47688C1.68784 0.38896 1.58554 0.319098 1.47252 0.271431C1.35951 0.223764 1.23807 0.199261 1.11541 0.199373C0.933136 0.199599 0.755062 0.254158 0.60394 0.35608C0.452819 0.458003 0.335512 0.602661 0.267004 0.771577C0.198497 0.940492 0.181898 1.126 0.21933 1.30439C0.256762 1.48278 0.346524 1.64597 0.47715 1.7731L6.70404 7.99999L0.47715 14.2269C0.389174 14.3113 0.318936 14.4125 0.27055 14.5245C0.222163 14.6364 0.196601 14.7569 0.19536 14.8789C0.194119 15.0008 0.217224 15.1218 0.263323 15.2347C0.309421 15.3476 0.377586 15.4502 0.463825 15.5364C0.550064 15.6227 0.652643 15.6908 0.765556 15.7369C0.878469 15.783 0.999445 15.8061 1.1214 15.8049C1.24335 15.8037 1.36383 15.7781 1.47578 15.7297C1.58774 15.6813 1.68891 15.6111 1.77337 15.5231L8.00026 9.29622L14.2271 15.5231C14.3116 15.6111 14.4128 15.6813 14.5247 15.7297C14.6367 15.7781 14.7572 15.8037 14.8791 15.8049C15.0011 15.8061 15.1221 15.783 15.235 15.7369C15.3479 15.6908 15.4505 15.6227 15.5367 15.5364C15.6229 15.4502 15.6911 15.3476 15.7372 15.2347C15.7833 15.1218 15.8064 15.0008 15.8052 14.8789C15.8039 14.7569 15.7784 14.6364 15.73 14.5245C15.6816 14.4125 15.6113 14.3113 15.5234 14.2269L9.29648 7.99999L15.5234 1.7731C15.6568 1.6452 15.7484 1.47997 15.7862 1.29908C15.824 1.11819 15.8063 0.93009 15.7354 0.759448C15.6644 0.588807 15.5436 0.443591 15.3886 0.342846C15.2337 0.2421 15.052 0.19053 14.8672 0.194897Z" fill="white" />
                            </svg>
                        </button>
                        <div className="flex flex-col py-10 px-5">
                            <div className='grid grid-cols-2 divide-x-2'>
                                <FilterCheckbox title={"Categories"} options={options} selectedOptions={categoryFilter} handleCheckboxChange={handleCategoryFilterChange} />
                                <FilterCheckbox title={"Zones"} options={options1} selectedOptions={zoneFilter} handleCheckboxChange={handleZoneFilterChange} />
                                {/* <FilterCheckbox title={"Trajectoires"} options={['2=>3', '3=>4', '4=>5']} /> */}


                            </div>


                            <div className="flex flex-row place-content-end	">
                                <button onClick={() => {
                                    setopenfilter(!openfilter)
                                }} style={{ Color: "#5D6E81" }} className="p-2 lg:p-3 mt-2 lg:mt-5 rounded-md text-xs font-normal leading-5 lg:text-sm cursor-pointer border">Cancel</button>
                                <button onClick={() => {
                                    handleSubmitfilter()
                                    setopenfilter(!openfilter)
                                }}
                                    style={{ backgroundColor: "#2C79E0" }} className="ml-4 mr-1 p-2 lg:p-3 mt-2 lg:mt-5 rounded-md text-xs font-bold leading-5 lg:text-sm text-white cursor-pointer">Filtre</button>
                            </div>

                        </div>

                    </div>
                </div>
            }


            <section className="relative">
                <Layout>
                    <TopTitle title={"user"} subTitle={"Welcome to our website"} />
                    <div className='flex justify-end'>
                        <button className="text-sm Button flex  items-center  bg-white px-3 py-2 mr-2">

                            <svg fill="#5D6E81" className="mr-2" width="16" height="16" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60">
                                <g>
                                    <g>
                                        <path d="M56.5,49L56.5,49V1c0-0.6-0.4-1-1-1h-45c-0.6,0-1,0.4-1,1v14h2V2h43v46h-9c-0.6,0-1,0.4-1,1v9h-33V43h-2v16    c0,0.6,0.4,1,1,1h35c0.3,0,0.5-0.1,0.7-0.3l10-10c0.1-0.1,0.1-0.2,0.2-0.3v-0.1C56.5,49.2,56.5,49.1,56.5,49z M46.5,50h6.6    l-3.3,3.3l-3.3,3.3L46.5,50L46.5,50z" />
                                        <path d="M16.5,38h6h4v-2h-3V17c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6h-5c-0.6,0-1,0.4-1,1v4h-5c-0.6,0-1,0.4-1,1v8    c0,0.6,0.4,1,1,1h6H16.5z M17.5,18h4v18h-4V24V18z M11.5,25h4v11h-4v-7V25z M5.5,30h4v6h-4V30z" />
                                        <path d="M50.5,24V7c0-0.6-0.4-1-1-1h-21c-0.6,0-1,0.4-1,1v17c0,0.6,0.4,1,1,1h21C50.1,25,50.5,24.6,50.5,24z M48.5,12h-12V8h12V12    z M34.5,8v4h-5c0-1.6,0-4,0-4H34.5z M29.5,14h5v9h-5C29.5,23,29.5,18.3,29.5,14z M36.5,23v-9h12v9H36.5z" />
                                        <rect x="28.5" y="28" width="21" height="2" />
                                        <rect x="28.5" y="33" width="21" height="2" />
                                        <rect x="28.5" y="38" width="21" height="2" />
                                        <rect x="14.5" y="6" width="6" height="2" />
                                        <rect x="14.5" y="11" width="9" height="2" />
                                        <rect x="14.5" y="43" width="7" height="2" />
                                        <rect x="24.5" y="43" width="7" height="2" />
                                        <rect x="34.5" y="43" width="7" height="2" />
                                        <rect x="14.5" y="48" width="7" height="2" />
                                        <rect x="24.5" y="48" width="7" height="2" />
                                        <rect x="34.5" y="48" width="7" height="2" />
                                        <rect x="14.5" y="53" width="7" height="2" />
                                        <rect x="24.5" y="53" width="7" height="2" />
                                        <rect x="34.5" y="53" width="7" height="2" />
                                    </g>
                                </g>
                            </svg>

                          
                            <span className="font-normal">Report</span>

                        </button>
                        <button onClick={ShowFilter} className="text-sm Button flex  items-center  bg-white px-3 py-2">
                            <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.54167 0.5C0.973502 0.5 0.5 0.973502 0.5 1.54167V2.8291C0.5 3.78604 0.939782 4.69118 1.69141 5.28353C1.69222 5.28407 1.69303 5.28462 1.69385 5.28516L5.91667 8.58024V14.875C5.91672 14.9898 5.94838 15.1023 6.00817 15.2003C6.06796 15.2983 6.15357 15.3779 6.25562 15.4304C6.35767 15.483 6.47221 15.5064 6.58669 15.4981C6.70117 15.4899 6.81117 15.4503 6.90462 15.3836L9.82129 13.3003C9.9023 13.2425 9.96835 13.1662 10.0139 13.0777C10.0595 12.9893 10.0833 12.8912 10.0833 12.7917V8.58024L14.3062 5.28516C14.307 5.28462 14.3078 5.28407 14.3086 5.28353C15.0602 4.69118 15.5 3.78604 15.5 2.8291V1.54167C15.5 0.973502 15.0265 0.5 14.4583 0.5H1.54167ZM1.75 1.75H14.25V2.8291C14.25 3.40383 13.9872 3.94528 13.5355 4.30127L9.07422 7.7819C8.99919 7.84036 8.9385 7.91517 8.89675 8.00063C8.85501 8.08609 8.83332 8.17995 8.83333 8.27506V12.4702L7.16667 13.6608V8.27506C7.16668 8.17995 7.14499 8.08609 7.10325 8.00063C7.0615 7.91517 7.00081 7.84036 6.92578 7.7819L2.46452 4.30127C2.01281 3.94528 1.75 3.40383 1.75 2.8291V1.75Z" fill="#5D6E81" />
                            </svg>
                            <span className="font-normal">Filters</span>
                            <svg className="ml-2" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="#5D6E81" />
                            </svg>
                        </button>
                    </div>
  
                    <div className="grid lg:grid-cols-2 gap-y-2 mt-5">
                        <CategorieTime />
                        <CategorieZone />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-y-2 mt-5">
                        <CatergoriesDoughnut />
                        <ZoneInZoneOut />

                    </div>
                </Layout>
            </section>
        </>
    )
}

export default isAuth(Home)