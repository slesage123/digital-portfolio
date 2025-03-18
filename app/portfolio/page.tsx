"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import ImageViewer from "@/components/imageviewer";
import img1Path from "@/public/SleepTokenFull_PrintFlats_1_1.jpg";
import img2Path from "@/public/SleepTokenFull_PrintFlats_1_2.jpg";
import img3Path from "@/public/DarkMirror_PrintFlat.jpg";
import img4Path from "@/public/DarkMirror_SpotGloss.jpg";
import img5Path from "@/public/BoxRender.jpg";
import img6Path from "@/public/goodeats_1.jpg";
import img7Path from "@/public/goodeats_2.jpg";
import img8Path from "@/public/goodeats_3.jpg";
import img9Path from "@/public/teapackage.jpg";
import img10Path from "@/public/spreadsheets.jpg";
import img11Path from "@/public/Untitled-1.jpg";

export default function Page() {
    const [selectedImage, setSelectedImage] = useState < string | null > (null);
    const [currentImageIndex, setCurrentImageIndex] = useState < number > (0);

    const images: ImageProps[] = [
        { src: img1Path, alt: "Image 1" },
        { src: img2Path, alt: "Image 2" },
        { src: img3Path, alt: "Image 3" },
        { src: img4Path, alt: "Image 4" },
        { src: img5Path, alt: "Image 5" },
        { src: img6Path, alt: "Image 6" },
        { src: img7Path, alt: "Image 7" },
        { src: img8Path, alt: "Image 8" },
        { src: img9Path, alt: "Image 9" },
        { src: img10Path, alt: "Image 10" },
        { src: img11Path, alt: "Image 11" },
    ];

    const handleOnClicked = (src: string, index: number) => {
        setSelectedImage(src);
        setCurrentImageIndex(index);
    };

    const handleNextImage = () => {
        const nextIndex =
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        setSelectedImage(images[nextIndex].src as string);
        setCurrentImageIndex(nextIndex);
    };

    const handlePreviousImage = () => {
        const prevIndex =
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        setSelectedImage(images[prevIndex].src as string);
        setCurrentImageIndex(prevIndex);
    };

    return (
        <div className="min-h-screen flex flex-col p-4">
            {selectedImage && (
                <ImageViewer
                    selectedImage={selectedImage}
                    onNext={handleNextImage}
                    onPrev={handlePreviousImage}
                />
            )}
            <div className="flex flex-row flex-wrap gap-2 md:gap-3 justify-center px-3 md:px-0">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        {...image}
                        className="border-2 border-solid border-stone-900 h-20 w-20 lg:h-40 lg:w-40 overflow-hidden object-contain cursor-pointer hover:border-stone-500"
                        onClick={() => handleOnClicked(image.src as string, index)}
                    />
                ))}
            </div>
        </div>
    );
};