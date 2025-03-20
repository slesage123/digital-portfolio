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
    { pic: "/digital-portfolio/DarkMirror_PrintFlat.jpg", text: "Print-ready flat for a cosmetics package featuring spot gloss."},
    { pic: "/digital-portfolio/DarkMirror_SpotGloss.jpg", text: "Print-ready flat for a cosmetics package, spot gloss layer."},
    { pic: "/digital-portfolio/BoxRender.jpg", text: "Render of a cosmetics box design."},
    { pic: "/digital-portfolio/goodeats1.jpg", text: "Magazine cover layout front cover"},
    { pic: "/digital-portfolio/goodeats2.jpg", text: "Magazine cover layout back cover."},
    { pic: "/digital-portfolio/goodeats3.jpg", text: "Magazine central print spread."},
    { pic: "/digital-portfolio/TeaPackage.jpg", text: "Print-ready flat of an experimental package for tea."},
    { pic: "/digital-portfolio/spreadsheets_1.jpg", text: "Poster featuring Bodoni 72."},
    { pic: "/digital-portfolio/Untitled-1.jpg", text: "Mock-up of a social media ad campaign post."},
    { pic: "/digital-portfolio/nightprint1.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/digital-portfolio/nightprint2.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/digital-portfolio/nightprint3.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/digital-portfolio/nightprint4.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/digital-portfolio/nightprint5.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/digital-portfolio/nightprint6.jpg", text: "Digital photography and photo manipulation." },
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