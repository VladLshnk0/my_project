import Image from "next/image";
import RabattButton from "./RabattButton";

function Banner() {
  return (
    <div className="w-full max-w-[1440px] relative bg-[#1F6451] flex flex-col md:flex-row">
      <div className="flex flex-col items-start w-full md:w-1/2 p-8">
        <h2 className="text-xl lg:text-3xl font-light uppercase text-white">
          Spesialtilbud for bedriftskunder -{" "}
        </h2>
        <h2 className="text-xl lg:text-3xl font-semibold uppercase text-white mt-2">
          15% rabatt på komplette tjenester
        </h2>
        <RabattButton />
      </div>
      <div className="absolute flex w-full h-full justify-center items-end z-0">
        <svg
          width="218"
          height="125"
          viewBox="0 0 218 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.7803 87.8124C64.8765 91.8144 74.2858 92.3742 79.7914 93.1139L146.447 165.975C146.447 165.975 158.84 167.956 161.326 165.375C163.811 162.793 161.358 150.483 161.358 150.483L86.6259 86.0132C86.6259 86.0132 82.8699 71.8284 79.594 66.1883C76.3182 60.5482 42.8857 35.2077 42.8857 35.2077L41.3324 36.8214C51.222 45.9258 71.1253 64.0054 69.1371 66.071C67.1489 68.1366 47.5977 49.6912 38.2259 40.0489L36.362 41.9854C46.3672 51.6156 65.7199 69.6212 63.856 71.5577C61.9921 73.4942 42.8344 54.64 33.2555 45.2128L31.702 46.8268C41.3844 56.1464 60.7493 74.7854 58.5749 77.0444C56.4006 79.3034 38.0711 59.5887 28.9064 49.7313L27.3529 51.3453C36.3306 62.4736 52.6842 83.8105 58.7803 87.8124Z"
            stroke="white"
          />
          <path
            d="M183.967 139.913C181.731 142.237 172.574 140.553 168.108 138.949C168.108 138.949 127.297 92.206 112.128 77.6054L50.483 18.271C53.8761 13.4541 73.7346 18.0153 90.6896 33.344C111.967 52.5802 116.727 69.5972 118.03 71.4732C119.073 72.974 161.791 106.754 183.019 123.457C184.379 128.289 186.204 137.589 183.967 139.913Z"
            stroke="white"
          />
        </svg>
      </div>
      <div className="w-full md:w-1/2 z-10">
        <Image src={"/images/Catalog1.png"} alt={""} width={1440} height={455} className="md:object-cover object-center w-[1440px] md:w-full h-full" />
      </div>
    </div>
  );
}

export default Banner;
