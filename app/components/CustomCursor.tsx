'use client';

import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(false);
            }
        };

        let animationFrameId: number;

        const render = () => {
            // Smooth dot movement
            dotPos.current.x = mousePos.current.x;
            dotPos.current.y = mousePos.current.y;

            // Smooth ring movement with interpolation (lerp)
            const lerpFactor = 0.15;
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed w-3 h-3 rounded-full bg-[#16A850] pointer-events-none z-[9999] transition-transform duration-0"
                style={{ left: 0, top: 0, willChange: 'transform' }}
            />
            <div
                ref={ringRef}
                className={`fixed rounded-full pointer-events-none z-[9998] transition-[width,height,border-color,border-width] duration-300 ease-out ${isHovering ? 'w-[60px] h-[60px] border-2 border-[#16A850]' : 'w-10 h-10 border border-[#f5f2ec]/40'
                    }`}
                style={{ left: 0, top: 0, willChange: 'transform' }}
            />
        </>
    );
}
