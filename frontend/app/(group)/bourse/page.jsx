'use client'


import Layout from "@/components/Global/Layout"
import { useState } from "react"
import _ from "lodash";
import { useRouter } from 'next/navigation'
import routes from "@/constants/routes";
import FilterSelect from "@/components/Global/FilterSelect";
import { useSelector } from "react-redux";
import { selectdata } from "@/constants/data";


const Bourse = () => {
  const router = useRouter()
  const [formData, updateFormData] = useState({}),
    [formErrors, updateFormErrors] = useState({}),
    [haveBourse, sethaveBourse] = useState();

  const options = useSelector((state) => state.bourse.options);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleChangeSelect = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    let value = e.target.value;
    updateFormData({
      ...formData,
      [value]: index,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    sethaveBourse()


    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
      // Handle the result as needed
      if(result.predictions[0]==1){
        sethaveBourse('Preliminary Scholarships')

      }else if(result.predictions[0]==2){
        sethaveBourse('Academic Recognition Scholarships')

      }else if(result.predictions[0]==3){
        sethaveBourse('Excellence Scholarships')

      }else{
        sethaveBourse()

      }

      updateFormData({})
      // 'Preliminary Scholarships': 1,
      // 'Academic Recognition Scholarships': 2,
      // 'Excellence Scholarships': 3
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }

  };

  const displayError = (key) => {
    if (!_.isEmpty(formErrors[key]))
      return <div className="pt-3 text-red-700">{formErrors[key]}</div>;
  };
  const filterSelects = Object.entries(selectdata).map(([title, options],index) => (
    <FilterSelect
      key={index}
      title={title}
      placeholder={`Select ${title.toLowerCase()}`}
      options={options}
      onOptionSelect={handleChangeSelect}
    />
  ));
  return (
    <Layout>
      <form className="flex flex-col items-center md:mt-10 mt-5 bg-white shadow-md p-10 rounded-md" onSubmit={handleSubmit}>
        <h1 className="text-center font-bold text-3xl">Bourse Test</h1>

        <div className="mt-4 grid grid-cols-2 gap-y-4">
          {filterSelects}
        </div>



        <div className="w-full max-w-sm ml-auto mr-auto">
          <button
            className="w-full rounded-2xl btnLogin text-white py-3 tracking-wide mt-10 cursor-pointer"
            type="submit"
          >
            Validate
          </button>
        </div>
      </form>

      {haveBourse   &&
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
            <div>
              <p class="font-bold">Result for this Student</p>
              <p class="text-sm">Can have bourse : <span className="font-bold">{haveBourse}</span></p>
            </div>
          </div>
        </div>
      }
    </Layout>
  )
}

export default Bourse