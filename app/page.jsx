
"use client"
import { Phudu } from "next/font/google";
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";

gsap.registerPlugin(useGSAP);

const phudu = Phudu({
    subsets: ["latin"],
    weight: "500"
});


export default function Home() {
  const holder = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 75, rotation: 360 })
        .to(boxes[1], { x: -75, rotation: -360 })
        .to(boxes[2], { x: 75, rotation: 360 })
        .reverse();
    },
    { scope: holder }
  );

  return (
    <div className="p-4">
      <section className="boxes-container" ref={holder}>
        <div className="text-center">
          <button className="align-top text-6xl md:text-8xl p-8 text-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={toggleTimeline}>
            <h1 className={phudu.className}>Welcome</h1>
          </button>
        </div>
        <div className="py-10 p-4">
          <div className="box text-center py-6 text-xl md:text-3xl md:py-10">
            <Link href="/about">
              About
            </Link>
          </div>
          <div className="box text-center py-6 text-xl md:text-3xl md:py-10">
            <Link href="/portfolio">
              Portfolio
            </Link>
          </div>
          <div className="box text-center py-6 text-xl md:text-3xl md:py-10">
            <Link href="/web">
              Web Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
