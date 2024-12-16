'use client'
import React, { useEffect } from 'react'

function TextComponent({ content }: { content: TrustedHTML }) {

  useEffect(() => {
    const container = document.getElementById('contentContainer');
    if (container) {
      const headers = container.getElementsByTagName('h1');
      for (let i = 0; i < headers.length; i++) {
        headers[i].style.fontSize = '44px';
        headers[i].style.fontWeight = '500';
        headers[i].style.color = '#002856';
      }
      const headers2 = container.getElementsByTagName('h2');
      for (let i = 0; i < headers2.length; i++) {
        headers2[i].style.marginTop = '20px'
        headers2[i].style.fontSize = '24px';
        headers2[i].style.fontWeight = '500';
        headers2[i].style.color = '#002856';
      }
      const paragraphs = container.getElementsByTagName('p');
      for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.marginTop = '20px';
        paragraphs[i].style.fontSize = '18px';
        paragraphs[i].style.color = '#002856';
      }
      const listItems = container.getElementsByTagName('li');
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.listStyleType = 'circle';
        listItems[i].style.marginLeft = '20px';
        listItems[i].style.color = '#002856';
      }
      const imageWithCaptions = container.getElementsByTagName('figure');
      for (let i = 0; i < imageWithCaptions.length; i++) {
        imageWithCaptions[i].style.marginTop = '20px';
        imageWithCaptions[i].style.marginBottom = '20px';
      }
      const links = container.getElementsByTagName('a');
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = '#002856';
        links[i].style.textDecoration = 'underline';
        links[i].style.fontWeight = '700';
      }
    }
  }, []);

  return (
    <div className='max-w-[1440px] mx-6'>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        id="contentContainer"
        className='my-16'
      />
    </div>
  )
}

export default TextComponent