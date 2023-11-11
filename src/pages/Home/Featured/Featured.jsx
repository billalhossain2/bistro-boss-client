import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Featured = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundSize:'cover'
      }}
      className="h-[848px] relative mb-20"
    >
      <div className="bg-black h-full bg-opacity-50">
      <div className="text-center md:w-[400px] w-[250px] mx-auto py-20">
        <p className="text-[#D99904] mb-2">---Check it out---</p>
        <h3 className="border-b-4 border-t-4 py-2 md:text-3xl text-2xl text-white">FROM OUR MENU</h3>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10">
        <img className="md:w-[40%] w-[80%] md:h-[50%] h-[40%] md:ml-5 md:mt-32" src={featuredImg} alt="" />
        <div className="md:w-[40%] w-[90%] text-white space-y-3">
            <h5>March 20, 2023 WHERE CAN I GET SOME?</h5>
            <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button>Read More</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Featured;
