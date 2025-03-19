"use client"
import React, { useRef, useEffect } from 'react';

const MyCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Drawing logic here 
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(20, 20, 150, 100);
    }, []);

    return <canvas ref={canvasRef} width={800} height={800} />;
};

export default MyCanvas;