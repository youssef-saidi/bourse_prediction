import TitleCard from "../Global/TitleCard"

const ZoneOverview = () => {
  return (
    <div className="flex flex-col xl:col-span-6 col-span-1 w-full bg-white py-5 px-4 rounded-xl drop-shadow-md xl:mt-0 mt-2">
      <TitleCard title={"Zone Overview"} />
      <div className="flex flex-col  mt-5">
        <img className="h-56" src="img.png" alt="" />
      </div>
    </div>
  )
}

export default ZoneOverview