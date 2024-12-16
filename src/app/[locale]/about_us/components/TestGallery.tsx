// "use client";
// import type { ImageACF } from "@/types/acf";
// import ChevronLeft from "./ChevronLeft";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// export default function Gallery({ images }: { images: ImageACF[] }) {
//   const [currentX, setCurrentX] = useState(0);
//   const carusel = useRef<HTMLDivElement>(null);
//   const [moveCount, setMoveCount] = useState(1);
//   const [widthCarusel, setWidthCarusel] = useState(0);
//   const [imagePosition, setImagePosition] = useState(50);
//   const [switcher, setSwitcher] = useState(false);
//   function moveImageRight() {
//     if(!switcher && imagePosition < 60){
//       setImagePosition((prev) => prev + 1);
//     }else{
//       setSwitcher(true);
//     }
//     if(switcher){
//       setImagePosition((prev) => prev - 1);
//       if(imagePosition === 50){
//         setSwitcher(false);
//         return;
//       }
//     }
//   }
//   function moveImageLeft() {
//     if(!switcher && imagePosition > 40){
//       setImagePosition((prev) => prev - 1);
//     }else{
//       setSwitcher(true);
//     }
//     if(switcher){
//       setImagePosition((prev) => prev + 1);
//       if(imagePosition === 50){
//         setSwitcher(false);
//         return;
//       }
//     }
//   }
//   function moveImage(func: Function) {
//     const interval = setInterval(func, 30);
//     setTimeout(() => {clearInterval(interval);setSwitcher(false);}, 1200);
//   }
//   useEffect(() => {
//     if (carusel.current?.scrollWidth && carusel.current?.offsetWidth) {
//       setWidthCarusel(carusel.current.offsetWidth);
//     }
//     const getwidth = () => {
//       if (carusel.current?.scrollWidth && carusel.current?.offsetWidth) {
//         setWidthCarusel(carusel.current.offsetWidth);
//       }
//     };
//     window.addEventListener("resize", getwidth);
//     return () => window.removeEventListener("resize", getwidth);
//   }, [images]);
//   function getCurrentItemWidth() {
//     if (widthCarusel > 890) {
//       return widthCarusel / 3;
//     } else if (widthCarusel > 620) {
//       return widthCarusel / 2;
//     } else {
//       return widthCarusel;
//     }
//   }
//   function getSizeIndex() {
//     if (widthCarusel > 890) {
//       return 3;
//     } else if (widthCarusel > 620) {
//       return 2;
//     } else {
//       return 1;
//     }
//   }
//   const handlePrev = () => {
//     if (moveCount > 1 && moveCount <= images.length - getSizeIndex() + 1) {
//       setCurrentX((prev) => prev + getCurrentItemWidth());
//       setMoveCount((prev) => prev - 1);
//     }
//     moveImage(moveImageLeft);
//   };
//   const handleNext = () => {
//     if (moveCount > 0 && moveCount <= images.length - getSizeIndex()) {
//       setCurrentX((prev) => prev - getCurrentItemWidth());
//       setMoveCount((prev) => prev + 1);
//     }
//     moveImage(moveImageRight);
//   };
//   return (
//     <div className="flex flex-col w-full gap-4 pr-4 pl-6">
//       <div className="flex gap-4 self-end">
//         <button
//           onClick={handlePrev}
//         disabled={moveCount === 1}
//           className="disabled:text-gray"
//         >
//           <ChevronLeft disabled={moveCount === 1} />
//         </button>
//         <button
//           onClick={handleNext}
//         disabled={moveCount === images?.length - getSizeIndex() + 1 || images?.length <= getSizeIndex()}
//           className="disabled:text-gray"
//         >
//           <ChevronLeft
//             direction="right"
//             disabled={moveCount === images?.length - getSizeIndex() + 1 || images?.length <= getSizeIndex()}
//           />
//         </button>
//       </div>
//       <div className="relative flex">
//       <motion.div 
//           className="min-w-full overflow-hidden" ref={carusel}>
//         <motion.div className="flex" 
//             animate={{
//               x: currentX,
//             }} 
//             transition={{ duration: 1.0, type: "spring", delay: 0.2}}
//             >
//         {images.map((image, index) => (
//             <motion.div key={index} 
//             className="min-w-full h-[500px] px-2 sm:min-w-[50%] lg:min-w-[33.33%]"
//             >
//             {/* <motion.img
//               src={image.image}
//               alt={"Gallery foto"}
//               className={`w-full object-cover`}
//             /> */}
//             <motion.div className="h-full w-full overflow-hidden" style={{
//               backgroundImage: `url(${image.image})`,
//               backgroundPositionX: `${imagePosition}%`,
//               backgroundSize: "600px 500px",
//               backgroundRepeat: "no-repeat"
//             }}></motion.div>
//             </motion.div>
//         ))}
//         </motion.div>
//       </motion.div>
//       </div>
//     </div>
//   );
// }