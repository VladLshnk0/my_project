'use client';

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchParamsControlled() {
    let source = {source_name: 'Direkte', source_source: 'https://www.dekketbord.no/'};
    const searchParams = useSearchParams();
    useEffect(() => {
      console.log('SearchParams', sessionStorage.getItem('source_name'), sessionStorage.getItem('source_source'));
  if(sessionStorage && !sessionStorage.getItem('source_name') && !sessionStorage.getItem('source_source')){
    if(searchParams.has('gclid')){
      source = {source_name: 'Google Ads', source_source: 'https://www.google.com/'};
    }
    if(searchParams.has('fbclid')){
      source = {source_name: 'Facebook', source_source: 'https://www.facebook.com/'};
    }
    if(searchParams.has('srsltid')){
      source = {source_name: 'Google', source_source: 'https://www.google.com/'};
    }
    if(searchParams.has('utm_source') && searchParams.get('utm_source') === 'Klaviyo'){
      source = {source_name: 'Klaviyo', source_source: 'https://www.klaviyo.com/'};
    }
    if(searchParams.has('pjclid')){
      source = {source_name: 'Prisjakt', source_source: 'https://www.prisjakt.no/'};
    }
    if(sessionStorage){
      sessionStorage.setItem('source_name', source.source_name);
      sessionStorage.setItem('source_source', source.source_source);
    }
  }
  }, []);
  return (
    <>
    </>
  );
}