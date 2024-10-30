import './OurHead.css'
import uk from '../../../assets/about/desktop/illustration-uk.svg'
import canada from '../../../assets/about/desktop/illustration-canada.svg'
import australia from '../../../assets/about/desktop/illustration-australia.svg'

export const Ourhead = () => {
  return (
    <section className='ourhead flex flex-col items-center  lg:items-start   gap-20'>

        <div><h3 className='  text-gray-500 text-3xl font-bold  '>Our headquarters</h3></div>

        <div className='flex flex-col gap-28 md:flex-row  md:items-center md:justify-center '>
            <div className='flex flex-col items-center justify-center gap-6 md:items-center md:justify-center'>
                <img src={uk} className='lg:text-left  lg:relative lg:right-24'/>
                <h3 className='text-3xl text-gray-800 font-bold w-26 '>United Kingdom</h3>
                <div className='text-gray-800 flex flex-col items-center w-full  lg:items-start gap-2'>
                    <span className='' >68 Asfordby Rd</span>
                    <span>Alcaston</span>
                    <span>SY61YA</span>
                    <span>+44 1241 918425</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-6'>
                <img src={canada} className=' lg:relative lg:right-16'/>
                <h3 className='text-3xl text-gray-800 font-bold  lg:relative lg:right-7'>Canada</h3>
                <div className='text-gray-800 flex flex-col items-center gap-2 w-full  lg:items-start'>
                    <span >1528 Eglinton Avenue</span>
                    <span>Toronto</span>
                    <span>Ontario M4P 1A6</span>
                    <span>+1 416 485 2997</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-6'>
                <img src={australia} className='lg:relative lg:right-10'/>
                <h3 className='text-3xl text-gray-800 font-bold'>Australia</h3>
                <div className='text-gray-800 flex flex-col items-center  md:text-left gap-2 w-full  lg:items-start '>
                    <span className='md:text-left'>36 Swanston Street</span>
                    <span className='md:text-left'>Kewell</span>
                    <span>Victoria</span>
                    <span>+61 4 9928 3629</span>
                </div>
            </div>
        </div>
    </section>
  )
}
