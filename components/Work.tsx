import React from 'react'
import { usedfor } from '@/constants';

export const Work = () => {
  return (
  
    <section id='work' className="text-gray-600 body-font overflow-hidden">
        <div className='container bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-wrap -m-12'>
                <div className='p-12 w-full flex flex-col items-start'>            
                    <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Cómo funciona</h2>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Tu cuerpo naturalmente tiene campos magnéticos y eléctricos. Todas sus moléculas tienen una pequeña cantidad de energía magnética en ellas. La idea detrás de la terapia de campo magnético es que ciertos problemas ocurren porque sus campos magnéticos están desequilibrados.</p>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Si coloca un campo magnético cerca de su cuerpo, se cree que las cosas volverán a la normalidad. Los iones como el calcio y el potasio ayudan a las células a enviar señales.</p> 
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>En las pruebas, los científicos han visto que los imanes cambian la forma en que actúan estos iones. Sin embargo, hasta el momento, no hay evidencia de que los imanes tengan el mismo efecto en las células cuando están en su cuerpo.</p>                    
                </div>          
            </div>
        </div>
        {/* Lista para que se usa   */}
        <div className='container bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Usado para</h2>
            <ul className='list-none sm:flex '>
            {
                usedfor.map((used, index) => (
                    <li 
                        key={used.id}
                        className={`font-poppins text-[16]` }                             
                    >
                        <h2 className='text-xl font-bold font-poppins text-gradient title-font mt-5'>{`${used.title}`}</h2>
                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{`${used.content}`}</p>                      
                    </li>
                ))
            }
            </ul>
        </div>
    </section>
  )
}

