import React from 'react'

export const Shouldnt = () => {
  return (
    <section id='shouldnt' className="text-gray-600 body-font overflow-hidden">
        <div className='container bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-wrap -m-12'>
                <div className='p-12 w-full flex flex-col items-start'>            
                    <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Quién no debería usarlo</h2>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Aunque generalmente es seguro para la mayoría de las personas usar imanes estáticos de baja intensidad, no es una buena idea someterse a una terapia de campo magnético si usted:</p>
                    <ul className='max-w-md space-y-1 px-8 text-gray-700 list-disc list-inside dark:text-gray-400'>
                        <li>Usa un marcapasos</li>
                        <li>Tener una bomba de insulina</li>
                        <li>Estas embarazada</li>
                    </ul>
                    <br />
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>También debe quitarse los imanes antes de hacerse una radiografía o una resonancia magnética.</p>
                </div>          
            </div>
        </div>
        <div className='container bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-wrap -m-12'>
                <div className='p-12 w-full flex flex-col items-start'>            
                    <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Efectos secundarios</h2>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Algunas personas que reciben terapia de campo magnético tienen efectos secundarios como:</p>
                    <ul className='max-w-md space-y-1 px-8 text-gray-700 list-disc list-inside dark:text-gray-400'>
                        <li>Dolor</li>
                        <li>Náuseas</li>
                        <li>Mareo</li>
                    </ul>
                    <br />
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Sin embargo, estos efectos secundarios son raros.</p>
                </div>          
            </div>
        </div>
    </section>
  )
}


