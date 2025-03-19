"use client";
import React, { useState } from "react";
import ImageViewer from "@/components/imageviewer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { Phudu } from "next/font/google";

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
        </div>
    );
};