import React from 'react'
import Banner from './components/Banner'
import Title from './components/Title'
import MainContent from './components/MainContent'
import { getCategories } from '@/utils/fetchers/WooCommerce/getCategories';
import { getProducts } from '@/utils/fetchers/WooCommerce/getProducts';
import { getShippingMethodes } from '@/utils/fetchers/WooCommerce/getShippingMethodes';

async function page({searchParams}:{searchParams:{category:string, categoryId:string}}) {

  const categories = await getCategories();
  const productsData = await getProducts('100');

  let products = productsData.products;
  if(searchParams.categoryId){
    products = productsData.products && Array.isArray(productsData.products) && 
    productsData.products.filter((product:any) => product.categories.some((category:any) => 
      category.id === parseInt(searchParams.categoryId)));
  }


  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        {/* <Banner /> */}
        <Title />
        <MainContent categories={categories} products={products} 
        activeCategory={searchParams.category ?? ""} activeCategoryId={searchParams.categoryId ?? ""}/>
    </div>
  )
}

export default page