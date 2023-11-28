
const TopTitle = ({ title ,subTitle  }) => {

  return (
    <div className="flex flex-col items-center md:items-start text-xl mt-6">
      <h1 className="font-semibold lg:text-3xl">
        { `Hi ${title} 👋`}
      </h1>
      <h3 className="font-normal text-base md:text-start text-center tracking-wider pt-3">
        <span className="font-bold">{subTitle}</span>
      </h3>
    </div>
  );
};

export default TopTitle;
