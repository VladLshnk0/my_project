import { motion } from "framer-motion";
export default function ItemGallery({ image, index, handlerClick, widthCarusel}: { image: string, index: number, handlerClick: (index: number) => void, widthCarusel: number }){
    function isPCScreen(): boolean {
        if (typeof window === "undefined") return false;
        const screenWidth = window.innerWidth;
        const pcScreenWidthThreshold = 768; 
        return screenWidth >= pcScreenWidthThreshold;
    }
  return (
    <motion.div
            className="min-w-full h-[400px] md:px-2 md:cursor-pointer md:transition-opacity md:hover:opacity-80"
            onClick={isPCScreen() ? ()=>handlerClick(index) : undefined}
            >
            <motion.img
              src={image}
              alt={"Gallery foto"}
              className={`w-full h-full overflow-hidden object-fill`}
            />
            {/* <motion.div className="h-full w-full overflow-hidden" style={{
              backgroundImage: `url(${image.image})`,
              backgroundPositionX: `${100}%`,
              backgroundSize: "600px 500px",
              backgroundRepeat: "no-repeat"
            }}></motion.div> */}
            </motion.div>
  );
}