import styles from '@/app/style'
import { typestherapy } from '@/constants'

export const GetStarted = () => {
  return (
    <section id='getstared'>
        <div className='container border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='lg:p-4 md:w-full flex flex-auto justify-center mt-5'>
                
                    {
                        typestherapy.map((therapy, index) => (
                        <div key={therapy.id} className='max-w-sm rounded-2xl overflow-hidden shadow-lg'>
                            <img alt='content' src={`${therapy.img}`} />
                            <div className='px-6 py-4'>                                
                                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{`${therapy.title}`}</h2>
                                <p className='font-poppins mb-3 font-normal text-gray-700 dark:text-gray-400'>{`${therapy.content}`}</p>
                            </div>
                            
                        </div>

                        ))                        
                    }
                        
            </div>
        </div>
    </section>
  )
}

{/*

<section id='getstared' className='text-gray-600 body-font' >
        <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 sm:flex-col'>
                <div className={`p-4 sm:mb-0 mb-6 flex ${styles.flexStart}`}>
                    {
                        typestherapy.map((therapy, index) => (
                        <div key={therapy.id}>
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={`${therapy.img}`} />
                            </div>
                            <h2 className='text-xl font-bold font-poppins text-gradient title-font mt-5'>{`${therapy.title}`}</h2>
                            <p className='font-poppins text-base text-gray-700 leading-relaxed mt-2'>{`${therapy.content}`}</p>
                        </div>

                        ))                        
                    }
                </div>                
            </div>
        </div>
    </section>

*/}
