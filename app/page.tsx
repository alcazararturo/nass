import Image from 'next/image';
import { GetStarted } from '@/components/GetStarted';
import { Work } from '@/components/Work';
import { History } from '@/components/History';
import { Shouldnt } from '@/components/Shouldnt';
import { ItWork } from '@/components/ItWork';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
            <Image className='object-cover object-center rounded' alt='hero' src='https://fisiomarket.com/blog-de-fisioterapia/wp-content/uploads/2016/12/magnetoterapia_en_fisioterapia-1.jpg' />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <h1 className='title-font font-poppins sm:text-4xl text-3xl mb-4 font-bold dark:text-white'>¿Qué es la Terapia 
              <br/>
              <span className='hidden lg:inline-block font-poppins font-bold dark:text-white'>de campo Magnético? </span>
            </h1>
            <p className='mb-8 leading-relaxed font-poppins font-semibold text-gray-700 dark:text-gray-400' >La terapia de campo magnético utiliza diferentes tipos de imanes en el cuerpo para ayudar a mejorar su salud en general. 
              También puede ayudar a tratar ciertas condiciones. Hay varios tipos, entre ellos</p>
          </div>
        </div>
      
      </section>

      <div>
          <GetStarted />
          <History />
          <Work /> 
          <Shouldnt /> 
          <ItWork />
          <About />
          <Contact />
      </div>
    
    </main>
  )
}

{/*

*/}