type Props = {
  props: string
};

function OurPhilosophy(props: Props) {
  const text = props.props
    return (
    <div className="flex flex-col items-center px-2 md:px-16">
      <div className="w-full md:w-[80%] h-[1px] bg-[#04306E4D]/30 my-32" />
      <div id="yakor" className="flex flex-col text-lg md:text-2xl font-normal text-[#333333] text-center w-full md:w-2/3">
        {text.split("\n").map((t, i) => (
          <p key={i} className="">
            {t}
          </p>
        ))}
      </div>
      <div className="w-full md:w-[80%] h-[1px] bg-[#04306E4D]/30 mt-32" />
    </div>
  );
}

export default OurPhilosophy;
