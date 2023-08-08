'use client'
// import "../styles/style.css"
import { useInView } from "react-intersection-observer";

export default function FadeInAnimation({
    children,
    rootMargin = "0px",
    animation,
    startClass = "",
    triggerOnce = false,
    className,
    style
}) { 
    const { ref, inView } = useInView({
        rootMargin: rootMargin,
        triggerOnce: triggerOnce
    });
    return (
        <div ref={ref} className={className} style={style}>
            <div className={inView ? animation : startClass}>{children}</div>
        </div>
    );
};