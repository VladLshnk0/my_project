export default function NoResult({text}: {text: string}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="font-medium text-3xl">{"Search results for " + text}</div>
        <div className="font-medium text-2xl text-turquoise">{0 + " hits"}</div>
      </div>
      <div className="font-medium text-2xl">No results matched your search</div>
    </div>
  );
}