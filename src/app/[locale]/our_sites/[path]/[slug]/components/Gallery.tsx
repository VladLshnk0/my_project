"use client";
import type { GalleryACF } from "@/types/acf";
import ArrowLeftBlue from "@/utils/components/ArrowLeftBlue";
import ArrowRightBlue from "@/utils/components/ArrowRightBlue";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Gallery({
  images,
  text,
}: {
  images: GalleryACF[];
  text: string;
}) {
  const [currentX, setCurrentX] = useState(0);
  const carusel = useRef<HTMLDivElement>(null);
  const [moveCount, setMoveCount] = useState(1);
  const [widthCarusel, setWidthCarusel] = useState(0);
  useEffect(() => {
    if (carusel.current?.scrollWidth && carusel.current?.offsetWidth) {
      setWidthCarusel(carusel.current.offsetWidth);
    }
    const getwidth = () => {
      if (carusel.current?.scrollWidth && carusel.current?.offsetWidth) {
        setWidthCarusel(carusel.current.offsetWidth);
      }
    };

    window.addEventListener("resize", getwidth);
    return () => window.removeEventListener("resize", getwidth);
  }, [images]);

  const handlePrev = () => {
    if (moveCount > 1) {
      setCurrentX((prev) => prev + widthCarusel);
      setMoveCount((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (moveCount < images.length) {
      setCurrentX((prev) => prev - widthCarusel);
      setMoveCount((prev) => prev + 1);
    }
  };
  return (
    <div className="w-full xl:w-[700px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-medium">{text}</h3>
        <div className="flex items-center gap-8">
          <button onClick={handlePrev} disabled={moveCount === 1}>
            <ArrowLeftBlue disabled={moveCount === 1} />
          </button>
          <button
            onClick={handleNext}
            disabled={
              moveCount === images?.length
            }
          >
            <ArrowRightBlue
              disabled={
                moveCount === images?.length
              }
            />
          </button>
        </div>
      </div>
      <div className="relative flex">
        <motion.div className="min-w-full overflow-hidden" ref={carusel}>
          <motion.div
            className="flex"
            animate={{
              x: currentX,
            }}
            transition={{ duration: 1.0, type: "spring", delay: 0.2 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="min-w-full h-[400px]"
              >
                <motion.img
                  src={image.image}
                  alt={"Gallery foto"}
                  className={`w-full h-full object-cover`}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              moveCount === index + 1 ? "bg-turquoise" : "bg-gray"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
