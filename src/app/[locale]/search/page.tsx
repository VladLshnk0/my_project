import { searchGlobal } from '@/utils/fetchers/searchGlobal';
import { cookies } from 'next/headers'
import SearchInput from './SearchInput';
import NoResult from './NoResult';
import Result from './Result';
import ReloadComponent from '@/utils/components/ReloadComponent';

export default async function Search({ searchParams }: { searchParams: { searchText: string } }) {
    const cookieStore = cookies();
    const lang = cookieStore.get('currentLang');
    const globalLang = cookieStore.get('norseaLang');
    const results = await searchGlobal(searchParams.searchText, lang?.value ?? globalLang?.value ?? 'en');
  return (
    <div className='max-w-[1440px] mx-auto px-5 flex flex-col gap-8 py-8 items-center text-blue'>
      <h1 className='font-semibold text-4xl md:text-6xl'>Search</h1>
      <div className="w-[100px] h-[4px] bg-turquoise" />
      <SearchInput text={searchParams.searchText ?? ""}/>
      <div className='w-full md:w-[80%] bg-white p-4 md:p-8 flex flex-col gap-8'>
        {results && results.length > 0 ? <Result text={searchParams.searchText} results={results}/> : <NoResult text={searchParams.searchText} />}
      </div>
      <ReloadComponent />
    </div>
  );
}