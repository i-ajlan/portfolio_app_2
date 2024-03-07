import { SocialIcon } from 'react-social-icons'


const Footer = () => {
  return (
    <footer className="bg-black flex justify-center">
        <section className="flex flex-1 justify-between max-w-4xl text-white text-2xl items-center">
            <h2>Contacts</h2>

            <ul className="list-none flex gap-10 text-xl">
                <li className='relative'><a href=""><SocialIcon network='vk' className='hover:show-title icon-styles' bgColor='black' fgColor='#8B5CF6'/><span className='hidden bg-gray-700 absolute rounded-xl px-2 right-0 bottom-full'> VK</span></a></li>
                <li className='relative'><a href=""><SocialIcon network='whatsapp' className='hover:show-title icon-styles' bgColor='black' fgColor='#8B5CF6'/><span className='hidden bg-gray-700 absolute rounded-xl px-2 right-0 bottom-full'> WhatsApp</span></a></li>
                <li className='relative'><a href=""><SocialIcon network='telegram' className='hover:show-title icon-styles' bgColor='black' fgColor='#8B5CF6'/><span className='hidden bg-gray-700 absolute rounded-xl px-2 right-0 bottom-full' > Telegram</span></a></li>
                <li className='relative'><a href="">    <SocialIcon network= "github" className="hover:show-title icon-styles" bgColor='black' fgColor='#8B5CF6'/>
<span className='hidden bg-gray-700 absolute rounded-xl px-2 right-0 bottom-full'> Github</span></a></li>
                

            </ul>
        </section>
    </footer>
  )
}

export default Footer