import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { my_projects } from './data.ts';
import { Link } from 'react-router-dom';

  type DataType = {
    title:string,
    link: string,
    frontend_link?:string,
    backend_link?:string,
    image?:string,
    technologies:string[]
}

const My_project = () => {
    const [data, useData] = useState<DataType[]>(my_projects);
    const {name} = useParams();



     const{title, link, frontend_link, backend_link, image, technologies}: DataType = data.find((item)=>item.title == name) as DataType;

    //  console.log(title)
  return (
    <section className='flex justify-center'>


      <div className='relative flex justify-center rounded-2xl flex-1 text-black dark:text-white bg-white dark:bg-black h-full max-w-4xl p-4 text-2xl gap-4'>
          <Link to='..' relative='path' className='text-white bg-green-500 rounded-md p-1 absolute right-0.5'>
            Go back
          </Link>
          <figure className='relative h-full aspect-[2/4]'>
            <img src={image} alt="" className='rounded-2xl object-cover absolute h-full w-full'/>
          </figure>
          <ul>
            <li>Title: <span className='uppercase text-blue-600 dark:text-[#8b5cf6]'>{title}</span></li>
            <li>Link: <span className='text-blue-600 dark:text-[#8b5cf6] cursor-pointer'>{link}</span></li>
          {frontend_link &&  <li>Frontend_link: <span className='text-blue-600 dark:text-[#8b5cf6] cursor-pointer'>{frontend_link}</span></li>}
          {backend_link &&  <li>Backend_link: <span className='text-blue-600 dark:text-[#8b5cf6] cursor-pointer'>{backend_link}</span></li>}
            <li>Technologies :<ul className='border-[1px] border-blue-600 dark:border-[#8B5CF6] rounded-2xl p-2 mt-2 list-[">_"] list-inside'>
                             {technologies.map(item=>{
              return<li>{item}</li>
            })}
              </ul>
            </li>
          </ul>
      </div>
    </section>
  )
}

export default My_project