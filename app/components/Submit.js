import { useRouter } from 'next/navigation';
import React from 'react'

const Submit = () => {
    const router= useRouter();
    const handleClick = () =>{
           router.push("/Resume");
    };

  return (
    
        <button onClick ={handleClick}
                type="submit"
                className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 text-black font-bold py-3 px-6 mt-5 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              >Submit</button>
       
  ) 
}

export default Submit