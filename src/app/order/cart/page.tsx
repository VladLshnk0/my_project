import { getShippingMethodes } from '@/utils/fetchers/WooCommerce/getShippingMethodes';
import Title from '../components/Title';
import Cart from './components/Cart';

async function page() {

  const methodes = await getShippingMethodes();
  return (
    <div className='min-h-screen w-full flex flex-col items-center px-2 sm:px-4'>
      <Title active={'cart'} />
      <Cart methodes={methodes}/>
    </div>
  )
}

export default page