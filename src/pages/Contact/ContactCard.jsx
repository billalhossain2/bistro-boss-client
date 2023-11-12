
const ContactCard = ({item}) => {
    const {title, icon, contact} = item;
    console.log(item)
  return (
    <div className="bg-[#F3F3F3] flex flex-col items-center gap-5 pb-10">
      <div className="bg-[#D1A054] py-4 text-white font-bold text-4xl w-full flex justify-center">
        {icon()}
      </div>
      <p className="font-bold text-2xl">{title}</p>
      <p>{contact}</p>
    </div>
  );
};

export default ContactCard;
