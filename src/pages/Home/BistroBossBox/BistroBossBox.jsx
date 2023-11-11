import chefService from "../../../assets/home/chef-service.jpg"
const BistroBossBox = () => {
  return (
    <div style={{backgroundImage:`url('${chefService}')`, backgroundSize:'cover'}} className="flex justify-center items-center mb-20">
        <div className='bg-white text-center w-[80%] my-20 p-10'>
        <h3 className='text-2xl mb-3 uppercase'>Bistro Boss</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
    </div>
  )
}

export default BistroBossBox