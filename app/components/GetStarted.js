import { useRouter } from 'next/navigation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const GetStarted = () => {
  const router = useRouter();

  return (

<button className="bg-black text-white text-xl font-bold py-3 px-6 mt-5 rounded-full border-2 border-yellow-100 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"onClick={()=>{router.push('./Home')}}>

  Get Started
  {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
</button>
    
  );
};

export default GetStarted;
