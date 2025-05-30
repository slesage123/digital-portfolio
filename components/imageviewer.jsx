import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
    ssr: false,
});

const images = [
    {pic: "/digital-portfolio/SleepTokenFull_PrintFlats_1_1.jpg", text: "12 inch 2-pocket vinyl record sleeve outside."},
    { pic: "/digital-portfolio/SleepTokenFull_PrintFlats_1_2.jpg", text: "12 inch 2-pocket vinyl record sleeve inside."},
    { pic: "/digital-portfolio/stmockup.jpg", text: "12 inch 2-pocket vinyl record sleeve mockup w/ record." },
    { pic: "/digital-portfolio/jarrender.jpg", text: "Render of a conceptual cosmetics jar design." },
    { pic: "/digital-portfolio/DarkMirror_PrintFlat.jpg", text: "Print-ready flat for a conceptual cosmetics package featuring spot gloss."},
    { pic: "/digital-portfolio/BoxRender.jpg", text: "Render of a conceptual cosmetics box design."},
    { pic: "/digital-portfolio/logo.jpg", text: "Conceptual branding for a tea company." },
    { pic: "/digital-portfolio/brandingstickers.jpg", text: "Conceptual branding stickers for a tea company." },
    { pic: "/digital-portfolio/teatins.png", text: "Conceptual packaging for tea company." },
    { pic: "/digital-portfolio/tumbler.png", text: "Conceptual merchandise for a tea company in the form of a tea tumbler." },
    { pic: "/digital-portfolio/bf_logo.png", text: "Logo and branding concepts for a high end law firm." },
    { pic: "/digital-portfolio/businesscards.png", text: "Logo and branding concepts for a high end law firm." },
    { pic: "/digital-portfolio/letterheadpen.png", text: "Logo and branding concepts for a high end law firm." },
    { pic: "/digital-portfolio/webplaced.png", text: "Web page concept for a high end law firm." },
    { pic: "/digital-portfolio/goodeats_1.jpg", text: "Conceptual magazine cover layout front cover"},
    { pic: "/digital-portfolio/goodeats_3.jpg", text: "Conceptual magazine central spread."},
    { pic: "/digital-portfolio/nightprint1.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/digital-portfolio/nightprint2.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/digital-portfolio/nightprint3.jpg", text: "Digital photography and photo manipulation." },
];

function ImageViewer() {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            <div className="columns-1 md:columns-3 gap-2 lg:gap-4">
                {images.map((image, index) => (
                    <div key={index} onClick={() => {
                        setPhotoIndex(index);
                        setOpen(true);
                    }} style={{ cursor: 'pointer' }}>
                        <div className="p-2 md:p-4">
                            <Image src={image.pic} alt={`Image ${index + 1}`} width={500} height={300} />
                        </div>
                    </div>
                ))}
            </div>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={photoIndex}
                    plugins={[Captions]}
                    slides={images.map(image => ({ src: image.pic, description: image.text }))}
                />
            )}
        </>
    );
}

export default ImageViewer;