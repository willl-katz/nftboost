'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import IconVerify from '@/assets/verify.svg';
import IconEth from '@/assets/icon-eth.svg';


export default function CardCollectors({image, name, valueEth, percent, position, daleyTime, areaCardCollectorsRef}) {
    const areaCollectorRef = useRef(null)

    useEffect(() => {
        const areaCollector = areaCollectorRef.current
        const areaCardsCollectors = areaCardCollectorsRef.current

        gsap.fromTo(areaCollector, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 1,
            delay: daleyTime/3,
            scrollTrigger: {
                trigger: areaCardsCollectors,
                start: 'top-=200 center'
            }
        })
    }, [])

    return (
        <div className='bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5 w-full max-w-full @desktop:max-w-card-collector max-[320px]:justify-center max-[320px]:gap-4 max-[320px]:rounded-3xl max-[320px]:flex-col opacity-0' ref={areaCollectorRef}>
            <div className='flex items-center gap-4 @tablet:gap-6 max-[320px]:flex-col'>
                <strong className='font-semibold'>{position}</strong>
                <div className='flex flex-wrap items-center gap-4 max-[320px]:flex-col'>
                    <div className='w-10 h-10 relative'>
                        <div className='w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5'>
                            <Image
                                src={image}
                                alt='Image NFT'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <Image
                            src={IconVerify}
                            alt='Icon Verify'
                            className='absolute -bottom-0 -right-0'
                        />
                    </div>
                    <div className='space-y-1'>
                        <h4>{name}</h4>
                        <p className='flex flex-col @tablet:flex-row items-start @tablet:items-center gap-1 text-sm text-white text-opacity-70 max-[320px]:items-center'>
                            Preço mínimo
                            <span className='flex items-center gap-1 font-semibold text-sm'>
                                <Image
                                    src={IconEth}
                                    alt='Icon Ethereum'
                                    className='h-[1rem]'
                                />
                                {valueEth} BTC
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='space-y-1 text-right max-[320px]:text-center'>
                <strong className='text-green-primary font-bold'>+{percent}%</strong>
                <span className='flex items-center gap-1 font-semibold text-sm'>
                    <Image
                        src={IconEth}
                        alt='Icon Ethereum'
                        className='h-[1rem]'
                    />
                    {valueEth} BTC
                </span>
            </div>
        </div>
    );
}