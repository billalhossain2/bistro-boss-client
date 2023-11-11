import pizza from "../../../assets/menu/pizza-bg.jpg"

const PopularMenuItem = () => {
  return (
    <div className="flex md:flex-row md:justify-start items-center flex-col gap-5 md:mt-0 mt-5 border-[1px] border-[#bb85063f] p-3 rounded-lg">
        <img className="w-20 h-20 rounded-tr-[30px] rounded-bl-[30px]" src={pizza} alt="" />
        <div>
            <h4>ROAST DUCK BREAST ------------------</h4>
            <p className="text-[#737373]">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
        </div>
        <p className="text-[#BB8506]">$14.5</p>
    </div>
  )
}

export default PopularMenuItem