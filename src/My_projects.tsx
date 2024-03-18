import { useState } from 'react'
import {my_projects} from './data.ts'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type DataType = {
    title:string,
    link: string,
    frontend_link?:string,
    backend_link?:string,
    image?:string,
    technologies:string[]
}

const My_projects = () => {
    const [data, setDate] = useState<DataType[]>(my_projects);
    const [indexImage, setIndexImage] = useState<number>(0);
    
    const nextImage = () => {
        if(indexImage < data.length - 1){
        setIndexImage(prev => prev + 1)
    }
    else{
        setIndexImage(0)
    }
}


    const prevImage = () => {
        if(indexImage > 0){
            setIndexImage(prev => prev - 1)
        }
        else {
            setIndexImage(data.length - 1);
        }
    }

  return (
    <section className='flex justify-center content-center'>
        <div className='text-black dark:text-white flex-1 bg-white dark:bg-black p-4 rounded-2xl max-w-4xl flex items-center justify-items-center justify-content-center'>
            <div onClick={prevImage} className=' bg-red-200 z-998'><ChevronLeft size={70}className='stroke-blue-600 dark:stroke-violet-600'/></div>
            <div className='flex-1 flex overflow-hidden'>
            
            {
                data.map((item)=>{

                    const {image, title} = item;
                    return( 
                    <Link to={title} style={{translate:`-${indexImage * 100}%`}} className={`w-full relative transition-[translate] duration-300 ease-in-out flex-shrink-0 flex-grow-0`} >
                            <p className='bg-slate-400 capitalize p-1 absolute -top-10 left-0 text-black'>Click to know more about this website</p>
                               <figure className='w-full h-[300px] relative'>
                                   <img className="w-full h-full
                                   absolute
                                   object-cover rounded-xl" src={image} alt="" />
                               </figure>
                           </Link>)
              
                })
            }
                            
            </div>
            <div onClick={nextImage} className=''><ChevronRight size={70} className='stroke-blue-600 dark:stroke-violet-600'/></div>

        </div>
    </section>
  )
}

export default My_projects