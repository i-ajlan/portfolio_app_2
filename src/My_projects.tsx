import { useState } from 'react'
import {my_projects} from './data'
import { ChevronLeft, ChevronRight } from 'lucide-react';


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
    const [value, setValue] = useState<number>(0);

  return (
    <section className='flex justify-center content-center'>
        <div className='text-white flex-1 bg-black p-4 rounded-2xl max-w-4xl grid grid-cols-[50px_1fr_50px] justify-items-center items-center content-center'>
            <div className=' bg-red-200 z-998'><ChevronLeft size={70}className='stroke-violet-600'/></div>
            <div className='flex relative bg-white'>

                {
                    data.map((item,index)=>{
                        const {image} = item
                        return <div className={`absolute  -translate-y-1/2 translate-x-[${((index) * 100)}%]`} key={index}>
                            <figure className='w-[200px] max-h-[300px] relative z-[0]'>
                                <img className="w-full h-full object-cover rounded-xl z-[0]" src={image} alt="" />
                            </figure>
                        </div>
                    })
                }
            </div>
            <div className=''><ChevronRight size={70} className='stroke-violet-600'/></div>

        </div>
    </section>
  )
}

export default My_projects