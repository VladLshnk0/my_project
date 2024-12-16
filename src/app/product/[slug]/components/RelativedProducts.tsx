import ProductItem from "@/app/catalog/components/ProductItem";

export default function RelativedProducts({relproducts}:{relproducts: any[] | undefined}) {
    console.log(`relproducts`,relproducts);
  return (
    <>
        {relproducts && relproducts.length > 0 && 
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl lg:text-5xl font-medium">Relaterte produkter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relproducts.map((product, index) => (
                    <ProductItem key={index} data={product} />
                ))}
            </div>
        </div>}
    </>
  );
}