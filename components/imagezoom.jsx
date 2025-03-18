import React, { useState } from "react";
import './imagezoom.css';

const ImageZoom = ({ imageUrl }) => {
    const [position, setPosition] = useState({ x : 0, y : 0 });
    const [showZoom, setShowZoom] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x : 0, y : 0 });

    const handleMouseHover = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = ((e.pageX - left - window.scrollX) / width) * 100
        const y = ((e.pageY - top - window.scrollY) / height) * 100
        let cursorX = e.pageX - left - window.scrollX
        let cursorY = e.pageY - top - window.scrollY

        setPosition({ x, y })

        setCursorPos({ x: cursorX, y: cursorY })
    }

    return(
        <div className="image-zoom-container" 
            onMouseEnter={() => setShowZoom(true)} 
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseHover}
        >
            <img className="zoomed-img" src={imageUrl} alt="" />
            {showZoom && <div style={{
                position: "absolute",
                left: `${cursorPos.x - 100}px`,
                top: `${cursorPos.y - 100}px`,
                pointerEvents: "none",
            }}>
                <div className="zoom-img" style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: `${position.x}% ${position.y}%`,
                    }} 
                />
            </div>}
        </div>
    );
};

export default  ImageZoom