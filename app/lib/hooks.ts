'use client';

import { useState, useEffect, useRef } from 'react';

export function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);
    return { ref, visible };
}

export function useCounter(target: number, duration = 1800) {
    const [count, setCount] = useState(0);
    const { ref, visible } = useInView(0.5);
    useEffect(() => {
        if (!visible) return;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.round(current));
            if (current >= target) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [visible, target, duration]);
    return { ref, count };
}
