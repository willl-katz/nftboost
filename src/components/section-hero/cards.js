'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import CardsLeft from '@/assets/cards-left.png';
import CardsRight from '@/assets/cards-right.png';

export function CardsHero() {
    const areaCardsRef = useRef(null)
    const cardsLeftRef = useRef(null)
    const cardsRightRef = useRef(null)

    useEffect(() => {
        const areaCards = areaCardsRef.current
        const cardsLeft = cardsLeftRef.current
        const cardsRight = cardsRightRef.current

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: areaCards,
                start: "-=50% center",
                end: "55% center",
                scrub: true
            }
        })

        tl.to(cardsLeft, {
            left: 0,
            duration:2.5,
            ease: "black.out",
        }).to(cardsRight, {
            right: 0,
            duration:2.5,
            ease: "black.out",
        }, "<")
    }, [])

    return (
        <div className='relative w-area-cards-mobile h-area-cards-mobile mt-12 @laptop:w-full @laptop:h-area-cards-desk' ref={areaCardsRef}>
            <Image
                src={CardsLeft}
                alt='Cards Left'
                className='absolute top-0 left-8 @laptop:left-[25%] w-1/2 @laptop:w-auto z-10 '
                quality='100'
                ref={cardsLeftRef}
            />
            <Image
                src={CardsRight}
                alt='Cards Right'
                className='absolute top-0 right-8 @laptop:right-[25%] w-1/2 @laptop:w-auto'
                quality='100'
                ref={cardsRightRef}
            />
        </div>
    )
}