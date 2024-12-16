import type { GalleryACF, ParagraphsACF } from "@/types/acf";
import Image from "next/image";
import Gallery from "./Gallery";

type MainBlockProps = {
  subtitle: string;
  paragraphs: ParagraphsACF[];
  images: GalleryACF[];
  gallery_text: string;
};
export default function MainBlock(props: MainBlockProps) {
  return (
    <div className="text-blue h-full max-w-[1440px] mx-auto pr-4 pl-6">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-2xl md:text-4xl font-medium md:ml-[10%] md:mr-[20%]">
          {props.subtitle}
        </h2>
        <div className="flex flex-col gap-5 md:ml-[15%] lg:w-[700px]">
          <p id={props.paragraphs[0].content_id}>
            {props.paragraphs[0].paragraph}
          </p>
          <div className="flex flex-col w-full md:flex-row gap-5">
                {props.images.slice(0,2).map((image, index) => (
                    <Image key={index} src={image.image} width={260} height={315} alt="Foto" className="basis-full md:basis-1/2"/>
                ))}
            </div>
            {props.paragraphs.slice(1).map((paragraph, index) => (
                <p key={index} id={paragraph.content_id}>
                    {paragraph.paragraph}
                </p>
            ))}
            <Gallery images={props.images} text={props.gallery_text}/>
        </div>
      </div>
    </div>
  );
}
