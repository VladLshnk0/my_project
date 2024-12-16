"use client";
import type { ImageACF } from "@/types/acf";
import ChevronLeft from "./ChevronLeft";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SubGallery from "./SubGallery";
import ItemGallery from "./ItemGallery";

export default function Gallery({ images }: { images: ImageACF[] }) {
  const [currentX, setCurrentX] = useState(0);
  const carusel = useRef<HTMLDivElement>(null);
  const [moveCount, setMoveCount] = useState(1);
  const [widthCarusel, setWidthCarusel] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const [isOpenSubGallery, setIsOpenSubGallery] = useState(false);
  function handlerClick(index: number) {
    setCurrentIndex(index);
    setIsOpenSubGallery(true);
    document.body.style.overflow = "hidden";
  }
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
    <>
    {isOpenSubGallery && currentIndex !== null && <SubGallery index={currentIndex} 
    setIsOpenSubGallery={setIsOpenSubGallery} images={images}/>}
    <div className="basis-full md:basis-1/2 flex flex-col gap-4">
      <div className="flex gap-4 self-end">
        <button
          onClick={handlePrev}
        disabled={moveCount === 1}
          className="disabled:text-gray transition-colors hover:text-turquoise hover:border-turquoise"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
        disabled={moveCount === images?.length}
          className="disabled:text-gray transition-colors hover:text-turquoise hover:border-turquoise"
        >
          <ChevronLeft
            direction="right"
          />
        </button>
      </div>
      <div className="relative flex">
      <motion.div 
          className="min-w-full overflow-hidden" ref={carusel}>
        <motion.div className="flex" 
            animate={{
              x: currentX,
            }} 
            transition={{ duration: 1.0, type: "spring", delay: 0.2}}
            >
        {images.map((image, index) => (
            <ItemGallery key={index} image={image.image} index={index} handlerClick={handlerClick} widthCarusel={widthCarusel}/>
        ))}
        </motion.div>
      </motion.div>
      </div>
    </div>
    </>
  );
}
