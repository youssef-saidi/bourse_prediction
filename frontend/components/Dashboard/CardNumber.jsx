const CardNumber = ({number ,title,color}) => {
  return (
    <div className="border flex flex-col justify-center items-center justify-self-stretch mx-1 py-5 rounded-xl">
        <h1 className="font-bold text-3xl" style={{color:color}}>{number}</h1>
        <h3 className="font-medium" style={{fontSize:"10px"}}>{title}</h3>
    </div>
  )
}

export default CardNumber