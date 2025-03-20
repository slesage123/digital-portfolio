import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
    ssr: false,
});

const images = [
    {pic: "/SleepTokenFull_PrintFlats_1_1.jpg", text: "12 inch 2-pocket vinyl record sleeve outside."},
    { pic: "/SleepTokenFull_PrintFlats_1_2.jpg", text: "12 inch 2-pocket vinyl record sleeve inside."},
    {pic: "/DarkMirror_PrintFlat.jpg", text: "Print-ready flat for a cosmetics package featuring spot gloss."},
    { pic: "/DarkMirror_SpotGloss.jpg", text: "Print-ready flat for a cosmetics package, spot gloss layer."},
    {pic: "/BoxRender.jpg", text: "Render of a cosmetics box design."},
    {pic: "/goodeats1.jpg", text: "Magazine cover layout front cover"},
    {pic: "/goodeats2.jpg", text: "Magazine cover layout back cover."},
    {pic: "/goodeats3.jpg", text: "Magazine central print spread."},
    {pic: "/teapackage.jpg", text: "Print-ready flat of an experimental package for tea."},
    {pic: "/spreadsheets_1.jpg", text: "Poster featuring Bodoni 72."},
    {pic: "/Untitled-1.jpg", text: "Mock-up of a social media ad campaign post."},
    { pic: "/nightprint1.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/nightprint2.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/nightprint3.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/nightprint4.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/nightprint5.jpg", text: "Digital photography and photo manipulation." },
    { pic: "/nightprint6.jpg", text: "Digital photography and photo manipulation." },
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