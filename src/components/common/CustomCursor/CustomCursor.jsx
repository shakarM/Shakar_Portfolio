import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.scss";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === "a" ||
                e.target.tagName.toLowerCase() === "button" ||
                e.target.closest("a") ||
                e.target.closest("button") ||
                e.target.classList.contains("magnetic") ||
                e.target.classList.contains("hover-target")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: 1,
            backgroundColor: "var(--cursor-color)",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                stiffness: 700,
                damping: 30,
                mass: 0.5,
            },
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1.5,
            backgroundColor: "var(--accent-color)",
            opacity: 0.8,
            mixBlendMode: "normal",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
            },
        },
    };

    return (
        <>
            <motion.div
                className="custom-cursor"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
        </>
    );
};

export default CustomCursor;
