
"use client"
import { Phudu } from "next/font/google";
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: 100 })
        .reverse();
    },
    { scope: holder }
  );

  return (
    <div className="p-4 max-w-6xl">
      <main>
        <section className="boxes-container" ref={holder}>
          <div>
            <button className="btn btn-ghost align-top text-4xl p-8 text-center" onClick={toggleTimeline}>
              <h1 className={phudu.className}>Welcome</h1>
            </button>
          </div>
          <div className="p-4">
            <div className="box text-center p-4">Box 1</div>
            <div className="box text-center p-4">Box 2</div>
            <div className="box text-center p-4">Box 3</div>
          </div>
        </section>
      </main>
    </div>
  );
}
