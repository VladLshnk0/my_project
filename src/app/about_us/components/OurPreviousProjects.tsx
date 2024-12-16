"use client";
import { OurWorkType } from "@/types/acf";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  props: OurWorkType;
};

function OurPreviousProjects(props: Props) {

  const data = props.props;
  const [galleryWidth, setGalleryWidth] = useState(0);
  const [parrentWidth, seParrentWidth] = useState(0);
  const [percent, setPercent] = useState('100%');
  const [sizeGallery, setSizeGallery] = useState(0);  
  const [step, setStep] = useState<number | null>(null);
  const [differntSize, setDifferntSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const gallery = document.getElementById('gallery');
      const parrent = document.getElementById('parrent');
      if(gallery && parrent){
        const children = gallery.children;
        let width = 0;
        let gaps = children.length - 1;
        for(let i = 0; i < children.length; i++){
          width += children[i].clientWidth;
        }
        setGalleryWidth(width + gaps * 16);
        seParrentWidth(parrent?.offsetWidth || 0);
        console.log("Parrent: ", parrent);
        setPercent(((parrent?.offsetWidth / (width + gaps * 16)) * 100).toString() + '%');
        setDifferntSize(width + gaps * 16 - parrent?.offsetWidth || 0);
        setSizeGallery(children.length);
      }  
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(galleryWidth > 0 && parrentWidth > 0 && galleryWidth > parrentWidth){
      setPercent(((parrentWidth/ galleryWidth) * 100).toString() + '%');
      setDifferntSize(galleryWidth - parrentWidth);
    }
  }, [parrentWidth, galleryWidth]);

  console.log("Percent: ", percent);
  console.log("Gallery width: ", galleryWidth);
  console.log("parrentWidth: ", parrentWidth);
  console.log("DifferntSize: ", differntSize);

  function handleClickRight() {
    if(step !== null)
      {
        setStep(step - 1);
        setPercent((((parrentWidth + (differntSize/(step-1)))/ galleryWidth) * 100).toString() + '%');
      }
    else
      {
        setStep(sizeGallery);
        setPercent((((parrentWidth + (differntSize/(sizeGallery)))/ galleryWidth) * 100).toString() + '%');
      }
  }

  function handleClickLeft() {
    if(step !== null){
      setStep(step + 1);
      setPercent((((parrentWidth + (differntSize/(step+1)))/ galleryWidth) * 100).toString() + '%');};
  }

  return (
    <div className="w-full max-w-[1440px] mb-4 lg:mb-8 px-2 sm:px-4">
      <div className="flex items-start">
        <div className="border border-[#009999] py-2 md:py-4 px-4 md:px-8 rounded-full my-16 max-w-64">
          <p className="text-sm md:text-lg font-normal text-[#009999] w-full text-center">
            {data.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:gap-16 w-full">
        <h2 className="text-black text-2xl md:text-3xl lg:text-5xl font-medium uppercase">
          {data.title}
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 justify-between">
            <p className="text-sm md:text-lg w-full lg:w-[60%]">
              {data.text}
            </p>
            <div className="flex flex-row items-end gap-4">
              <button
              disabled={step === sizeGallery + 1 || step === null}
              onClick={handleClickLeft}
                className="p-2 rounded-full disabled:opacity-50 border border-[#707070] enabled:hover:text-[#009999] enabled:hover:border-[#009999] transition-all duration-75 ease-in-out"
              >
                <div className="lg:w-12 lg:h-12 w-8 h-8">
                  <svg
                    width="current"
                    height="current"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3248 28.2655L34.1323 42.7093C34.3429 42.9006 34.6213 43.0048 34.909 42.9998C35.1967 42.9949 35.4712 42.8812 35.6747 42.6827C35.8782 42.4842 35.9948 42.2165 35.9998 41.9358C36.0049 41.6552 35.8981 41.3836 35.7019 41.1782L21.681 27.5L35.7019 13.8218C35.8981 13.6164 36.0049 13.3448 35.9998 13.0642C35.9948 12.7835 35.8782 12.5158 35.6747 12.3173C35.4712 12.1188 35.1967 12.0051 34.909 12.0002C34.6213 11.9952 34.3429 12.0994 34.1323 12.2907L19.3248 26.7345C19.1168 26.9376 19 27.2129 19 27.5C19 27.7871 19.1168 28.0624 19.3248 28.2655Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
              <button
                disabled={step === 1}
                onClick={handleClickRight}
                className="p-2 rounded-full disabled:opacity-50 border border-[#707070] enabled:hover:border-[#009999] enabled:hover:text-[#009999] transition-all duration-75 ease-in-out"
              >
                <div className="lg:w-12 lg:h-12 w-8 h-8">
                <svg
                  width="current"
                  height="current"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.6752 28.2655L20.8677 42.7093C20.6571 42.9006 20.3787 43.0048 20.091 42.9998C19.8033 42.9949 19.5288 42.8812 19.3253 42.6827C19.1218 42.4842 19.0052 42.2165 19.0002 41.9358C18.9951 41.6552 19.1019 41.3836 19.2981 41.1782L33.319 27.5L19.2981 13.8218C19.1019 13.6164 18.9951 13.3448 19.0002 13.0642C19.0052 12.7835 19.1218 12.5158 19.3253 12.3173C19.5288 12.1188 19.8033 12.0051 20.091 12.0002C20.3787 11.9952 20.6571 12.0994 20.8677 12.2907L35.6752 26.7345C35.8832 26.9376 36 27.2129 36 27.5C36 27.7871 35.8832 28.0624 35.6752 28.2655Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
              </button>
            </div>
          </div>

            <div className="w-full h-1 bg-[#F5F5F5]" >
              <div className={`h-1 bg-[#009999]`} style={{width: percent}}/>
              </div>
        </div>

      </div>
      <div id="parrent" className={`mt-8 h-[400px] lg:h-[590px] flex flex-row overflow-hidden`}>
        <div id="gallery"
          className={"h-full min-w-fit flex flex-row gap-4 transition-all duration-500 ease-in-out"} 
          style={{transform: `translateX(-${!step ? 0 : (differntSize/step)}px)`}}    
        >
          <Image
            src={data.image_1.url}
            alt={""}
            width={590}
            height={590}
            className="object-cover w-full h-full"
          />
          <Image
            src={data.image_2.url}
            alt={""}
            width={590}
            height={590}
            className="object-cover w-full h-full"
          />
          <Image
            src={data.image_3.url}
            alt={""}
            width={590}
            height={590}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default OurPreviousProjects;
