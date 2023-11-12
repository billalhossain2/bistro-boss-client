import Cover from "../shared/Cover/Cover"
import bannerImg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../components/SectionTitle"
import ContactCard from "./ContactCard"

//icons
import {TiLocationOutline} from "react-icons/ti"
import {BsFillTelephoneOutboundFill} from "react-icons/bs"
import {Ri24HoursLine} from "react-icons/ri"
import ContactForm from "./ContactForm"
const Contact = () => {
  const contacts = [
    {
      id:1,
      title:'Phone',
      contact:'+38 (012) 34 56 789',
      icon:BsFillTelephoneOutboundFill,
    },
    {
      id:2,
      title:'ADDRESS',
      contact:'+38 (012) 34 56 789',
      icon:TiLocationOutline,
    },
    {
      id:3,
      title:'WORKING HOURS',
      contact:"Mon - Fri: 08:00 - 22:00 <br> Sat - Sun: 10:00 - 23:00",
      icon:Ri24HoursLine
    },
  ]
  return (
    <div className="mb-20 px-3">
       <Cover title="CONTACT US" description="Would you like to try a dish?" coverImg={bannerImg}></Cover>
       <SectionTitle subHeading="---Visit Us---" heading="OUR LOCATION"></SectionTitle>
       <div className="grid md:grid-cols-3 gap-5 mb-20">   
          {
            contacts.map(item => <ContactCard key={item.id} item={item}></ContactCard>)
          }
       </div>
       <SectionTitle subHeading="---Send Us a Message---" heading="CONTACT FORM"></SectionTitle>
       <ContactForm></ContactForm>
    </div>
  )
}

export default Contact