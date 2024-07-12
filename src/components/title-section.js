'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";

export default function TitleSection({ subtitle, title }) {
    const titleRef = useRef(null)

    useEffect(() => {
        const title = titleRef.current

        gsap.fromTo(title, {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: title,
                start: 'top-=200 center'
            }
        })
    }, [])

    return (
        <div className="px-3 @laptop:px-0 mb-12 @laptop:mb-14 space-y-1" ref={titleRef}>
            <span className="text-sm @laptop:text-xl font-semibold text-opacity-70 text-white">{subtitle}</span>
            <h2 className="font-poppins text-3xl/tight @desktop:text-5xl">{title}</h2>
        </div>
    );
}