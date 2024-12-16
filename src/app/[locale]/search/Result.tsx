'use client';

export default function Result({text, results}: {text: string, results: any[]}) {
    const handlerClick = (str: string) => {
        sessionStorage.setItem("yakor", str.split("#")[1] || "");
        window.location.href = str;
    };
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="font-medium text-3xl">{"Search results for " + text}</div>
          <div className="font-medium text-2xl text-turquoise">{results.length + " hits"}</div>
        </div>
        <ul className="font-medium text-xl flex flex-col gap-8">
          {results.map((result, index) => (
            <>{result.content_id
                && (result.title ||
                  result.description ||
                  result.paragraph ||
                  result.text ||
                  result.fullname) && <li className="flex flex-col gap-2">
                <span>{result.content_id
                && (result.title ||
                  result.description?.slice(0, 30) ||
                  result.paragraph?.slice(0, 30) ||
                  result.text?.slice(0, 30) ||
                  result.fullname)}</span>
            <div onClick={()=>handlerClick(result.content_id || "")} key={index} className="text-turquoise cursor-pointer font-normal underline hover:no-underline">
              Read more
            </div>
            </li>}</>
          ))}
        </ul>
      </div>
    );
  }