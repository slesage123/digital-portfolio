"use client";
import React, { useState } from "react";
import ImageViewer from "@/components/imageviewer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { Phudu } from "next/font/google";
import VideoComponent from '@/components/vidiframe.jsx'
import Link from "next/link";

const phudu = Phudu({
    subsets: ["latin"],
    weight: "500"
});

export default function Page() {

    return (
        <div>
            <div className="align-top text-4xl py-4 text-center">
                <h1 className={phudu.className}>Portfolio</h1>
            </div>
            <div className="min-h-screen flex flex-col p-4">
                <ImageViewer />
            </div>
            <div className="align-top text-2xl py-4 text-center">
                <h2 className={phudu.className}>Motion Design</h2>
            </div>
            <div className="flex mx-auto p-4 md:max-w-1/2 items-center relative">
                <VideoComponent videoId="334769991" />
            </div>
        </div>
    );
};