"use client"
import { useRef } from "react"
import CardCollectors from "../card-collectors"

import Thumb01 from "@/assets/img-neft/01.jpg"
import Thumb02 from "@/assets/img-neft/03.jpg"
import Thumb03 from "@/assets/img-neft/05.jpg"
import Thumb04 from "@/assets/img-neft/07.jpg"
import Thumb05 from "@/assets/img-neft/09.jpg"
import Thumb06 from "@/assets/img-neft/10.jpg"
import Thumb07 from "@/assets/img-neft/11.jpg"
import Thumb08 from "@/assets/img-neft/12.jpg"

const collectors = [
    {
        image: Thumb01,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    },
    {
        image: Thumb02,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    },
    {
        image: Thumb03,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    },
    {
        image: Thumb04,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    },
    {
        image: Thumb05,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    },
    {
        image: Thumb06,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    },
    {
        image: Thumb07,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    },
    {
        image: Thumb08,
        name: 'Lorem Ipsum',
        percent: '20',
        valueEth: '0.721',
    }
]

export default function AreaCardCollectors() {
    const areaCardCollectorsRef = useRef()

    return (
        <div className="overflow-hidden w-full flex flex-col flex-wrap gap-x-8 gap-y-4 h-auto @desktop:h-area-card-collectors" ref={areaCardCollectorsRef}>
            {
                collectors.map(({image, name, percent, valueEth}, i) => (
                    <CardCollectors
                        image={image}
                        name={name}
                        percent={percent}
                        valueEth={valueEth}
                        position={i + 1}
                        daleyTime={i}
                        areaCardCollectorsRef={areaCardCollectorsRef}
                        key={i}
                    />
                ))
            }
        </div>
    );
};