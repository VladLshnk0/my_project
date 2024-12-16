'use server';

// import { googleTranslate } from "@/lib/googleTranslate";

export async function searchGlobal(query: string, lang: string) {
    if (!query) return [];
    if (query.trim() === "") return [];
    // const pp = (perPage=100, page=1)=>`per_page=${perPage}&page=${page}`
    const res = await fetch(`${process.env.WORDPRESS_PUBLIC_URL}/wp-json/wp/v2/pages`);
    const pages = await res.json();
    // const slugsById = Object.fromEntries(pages.map((page:any)=> [page.id, page.slug]));
    const acfContent = await (async()=>{
        const data =  new Map()
        for await (const page of pages){
            if (page.id === 11 || page.id === 141) continue
        //   const pageAcf = await fetch(`${process.env.WORDPRESS_PUBLIC_URL}/wp-json/wp/v2/pages/${page.id}?${pp(100,1)}`).then(res=> res.json())
          data.set(page.slug, page.acf)
        }
        return [...data]
      })();
    let multiQuery = query;
    //   if (lang !== 'en') {
    //     multiQuery = await googleTranslate(query, 'en');
    //     console.log('multiQuery: ', multiQuery)
    //   }
    const searchResult = searchArray(acfContent, multiQuery);
    return searchResult;
}

function searchArray(array: any[], searchText: string) {
    const results: any[] = [];
    // Define a recursive function to search through nested arrays
    function searchInArray(arr: any[], text: string) {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (typeof item === 'object') {
                // If the item is an object, search its values recursively
                searchInObject(item, text);
            } else if (Array.isArray(item)) {
                // If the item is an array, search it recursively
                searchInArray(item, text);
            }
        }
    }

    // Define a function to search through object values
    function searchInObject(obj: any, text: string) {
        for (const key in obj) {
            if (typeof obj[key] === 'string' && !obj[key].includes('https://') && !obj[key].includes('@') && obj[key].toLowerCase().includes(text.toLowerCase())) {
                results.push(obj);
                break;
            } else if (typeof obj[key] === 'object') {
                searchInObject(obj[key], text);
            } else if (Array.isArray(obj[key])) {
                searchInArray(obj[key], text);
            }
        }
    }

    // Start the search from the top-level array
    searchInArray(array, searchText);
    return results;
}