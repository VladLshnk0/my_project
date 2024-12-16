import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
  props: any;
};

function ChooseCategory(props: CategoryProps) {
  const data = props.props;
  const categories = data.map((category: any) => ({
    name: category.name as string,
    image: category.image.src as string,
    slug: category.slug as string,
    id: category.id as number,
  }));

  return (
    <div className="h-full w-full max-w-[1440px] flex flex-col mt-8 md:mt-16 px-2 sm:px-4">
      <h2 className="uppercase text-5xl font-medium">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 lg:gap-y-16">
        {categories.map((category: any) => (
          <Link href={'/catalog?category=' + category?.slug + '&categoryId=' + category?.id} key={category.slug} className="h-[336px] w-full flex flex-col justify-center group">
            <Image
              src={category.image}
              alt={category.name}
              width={336}
              height={336}
              className="w-full h-full overflow-hidden object-cover"
            />
            <h3 className="text-[16px] font-medium text-black group-hover:text-[#2CCECE] transition-colors duration-200 uppercase">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChooseCategory;
