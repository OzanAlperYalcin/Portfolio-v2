import { fetchTechs } from '@/services/techs'
import TechSlider from './Slider'

async function Techs() {
    const { techs } = await fetchTechs()
    return (
        <div className="grid gap-5">
            <h1 className='title'>Teknolojiler</h1>
            <div className='grid justify-center relative pb-10'>
                <div className='w-[400px] md:w-[650px] lg:w-[900px] xl:w-[1150px]'>
                    <TechSlider techs={techs.sort((a, b) => a.sort - b.sort)} />
                </div>
            </div>
        </div>
    )
}

export default Techs