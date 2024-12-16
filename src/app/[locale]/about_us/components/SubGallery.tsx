import type { ImageACF } from "@/types/acf";
import CloseIcon from "./CloseIcon";
import ChevronLeft from "./ChevronLeft";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function SubGallery({
  index,
  setIsOpenSubGallery,
  images,
}: {
  index: number;
  setIsOpenSubGallery: (value: boolean) => void;
  images: ImageACF[];
}) {
  const [currentX, setCurrentX] = useState(0);
  const carusel = useRef<HTMLDivElement>(null);
  const [moveCount, setMoveCount] = useState(index + 1);
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

  useEffect(() => {
    if(widthCarusel > 0){
      setCurrentX((prev) => prev - (widthCarusel * index ));
    }
  }, [widthCarusel]);


  const handlePrev = () => {
    if (moveCount > 1 && moveCount <= images.length) {
      setCurrentX((prev) => prev + widthCarusel);
      setMoveCount((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (moveCount > 0 && moveCount <= images.length) {
      setCurrentX((prev) => prev - widthCarusel);
      setMoveCount((prev) => prev + 1);
    }
  };
  return (
    <div className="fixed z-[1000] top-0 right-0 left-0 bottom-0 bg-[#002856]/60 flex flex-col gap-2 justify-center items-center">
      <ClickAwayListener onClickAway={() => {setIsOpenSubGallery(false); document.body.style.overflow = 'auto'}}>
      <div className="flex flex-col gap-3">
      <CloseIcon setIsOpenSubGallery={setIsOpenSubGallery} />
      <div className="flex gap-5 items-center justify-center mx-60">
        <button onClick={handlePrev} disabled={moveCount === 1} className="text-white transition-colors disabled:text-gray hover:text-blue">
          <ChevronLeft direction="left" />
        </button>
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
                <motion.div key={index} className="min-w-full h-[400px] flex justify-center">
                  <motion.img
                    src={image.image}
                    alt={"Gallery foto"}
                    className={`w-[600px] h-full object-fill`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <button
          onClick={handleNext}
          disabled={
            moveCount === images?.length
          }
          className="text-white transition-colors disabled:text-gray hover:text-blue"
        >
          <ChevronLeft
            direction="right"
          />
        </button>
      </div>
      </div>
      </ClickAwayListener>
    </div>
  );
}
