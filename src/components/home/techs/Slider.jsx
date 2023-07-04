"use client"
import { techsIcon } from '@/utils/techs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css/navigation"
import 'swiper/css'
import './style.css'

function TechSlider({ techs }) {

    const renderTech = (tech) => {
        const getTech = techsIcon.find(t => t.name === tech.name)
        if (getTech) {
            const { Icon, name, color, border, background } = getTech
            return (
                    <div className='grid items-center justify-center gap-y-3'>
                        <div className={`flex items-center justify-center w-28 h-28 bg-zinc-200 rounded-full border ${border} relative`}>
                            <Icon size={50} className={`${color}`} />
                            <div className={`absolute -top-1.5 -right-1.5 w-24 h-24 ${background} rounded-full`} />
                        </div>
                        <p className={`${color === 'text-black' ? 'text-zinc-300':color} text-sm font-semibold text-center`}>{name.toLocaleUpperCase('TR')}</p>
                    </div>
            )
        }
        return null
    }

    return (
        <div className=''>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination-custom',
                    dynamicBullets: true,
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                spaceBetween={1}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }}
            >
                {techs.map((tech, i) => (
                <SwiperSlide key={i} className="border border-zinc-700 rounded-lg py-6 px-14 ">
                    {renderTech(tech)}
                </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-custom absolute" />
        </div>
    )
}

export default TechSlider