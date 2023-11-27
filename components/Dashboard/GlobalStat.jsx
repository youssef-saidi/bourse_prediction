import CardNumber from "./CardNumber"
import TitleCard from "../Global/TitleCard"

const GlobalStat = () => {
    return (
        <div className="flex flex-col xl:col-span-4 col-span-1 bg-white py-5 px-5 rounded-xl drop-shadow-md lg:ml-3">
            <TitleCard title={"Overall Statistics"} />
            <div className="grid grid-cols-3 justify-items-center flex items-center h-full mt-5">
                <CardNumber number={"201"} title={"Max"} color={"#0FAEE1"} />
                <CardNumber number={"101"} title={"Average"} color={"#2EC800"} />
                <CardNumber number={"68"} title={"Min"} color={"#0FAEE1"} />
                
            </div>
        </div>
    )
}

export default GlobalStat