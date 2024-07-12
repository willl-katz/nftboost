"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import 'swiper/css'

import Image from "next/image";
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CardNFT from '../card-nft';
import Arrow from "@/assets/arrow.svg";

export default function CarrouselCards({data}) {
    const swiperRef = useRef();

    const areaSlideRef = useRef(null);

    useEffect(() => {
        const areaSlide = areaSlideRef.current

        gsap.fromTo(areaSlide, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: areaSlide,
                start: 'top-=200 center'
            }
        })
    }, [])

    return (
        <div className='w-full relative opacity-0' ref={areaSlideRef}>
            <button className='w-12 h-12 bg-blue-primary rounded-full hidden @desktop:flex items-center justify-center  absolute z-10 top-1/2 -left-6 -mt-6 hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5' onClick={() => {
                swiperRef.current?.slidePrev()
            }}>
                <Image
                    src={Arrow}
                    alt='Arrow Previous'
                />
            </button>
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={32}
                speed={800}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.3,
                        spaceBetween: 24,
                    },
                    640: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.3,
                    },
                    1250: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                }}
                className='!px-3'
            >
                {
                    data.map(({name, thumbnail, valueEth, valueReal}, i) => (
                        <SwiperSlide key={i}>
                            <CardNFT
                                name={name}
                                thumbnail={thumbnail}
                                valueEth={valueEth}
                                valueReal={valueReal}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className='w-12 h-12 bg-blue-primary rounded-full hidden @desktop:flex items-center justify-center rotate-180 absolute z-10 top-1/2 -right-6 -mt-6 hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5' onClick={() => {
                swiperRef.current?.slideNext()
            }}>
                <Image
                    src={Arrow}
                    alt='Arrow Previous'
                />
            </button>
        </div>
    )
}