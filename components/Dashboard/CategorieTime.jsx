import TitleCard from "../Global/TitleCard"
import BarChart from "./BarChart"

const CategorieTime = () => {
    return (
        <div className="flex flex-col bg-white py-5 px-4 rounded-xl drop-shadow-md lg:mr-5">
            <div className="flex items-center pb-5 relative mb-5 w-full border-b">
                <TitleCard title={"Time-Category Analysis"} />
                <div className="flex justify-end items-center absolute right-0 text-blue cursor-pointer">
                    <h1 className="mr-5">This week</h1>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="#CD5C08" />
                    </svg>
                </div>
            </div>
            <BarChart />
        </div>
    )
}

export default CategorieTime