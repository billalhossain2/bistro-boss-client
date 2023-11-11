const MenuItem = ({img, title, description, price}) => {
  return (
    <div className="flex md:flex-row md:justify-start items-center flex-col gap-5 md:mt-0 mt-5 border-[1px] border-[#bb85063f] p-3 rounded-lg">
        <img className="w-20 h-20 rounded-tr-[30px] rounded-bl-[30px]" src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <p className="text-[#737373]">{description}</p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
    </div>
  )
}

export default MenuItem