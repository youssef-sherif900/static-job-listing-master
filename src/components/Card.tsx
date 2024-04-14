import Tags from "./Tags";

type CardProp = {
  nEw : boolean,
  logo: string,
  company: string,
  featured: boolean,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[],
  position: string,
  click: (f:string) => void
};

function Card({
  nEw,
  logo,
  company,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  click,
}: CardProp
) {
  return (
    <div className=" h-max relative w-3/4 md:h-[150px] flex flex-col md:flex-row items-start md:items-center md:justify-between bg-white my-6 md:my-3 px-5 py-2 rounded-md">
      <div className="flex flex-col md:flex-row pt-5 pb-3 md:pb-0 md:pt-0 md:w-[500px]">
         <img className="absolute md:static top-[-25px] md:mx-3 w-10 h-10 md:w-auto md:h-auto " src={logo} alt="ooo" />
        <div className="h-full flex flex-col justify-between">
            <div className="flex items-center w-3/4 py-1 md:py-0">
                <p className="font-semibold mr-3 text-sm md:text-lg text-[#06768d] text-nowrap">{company}</p>
                <div className="flex">
                { nEw && <div className="rounded-full bg-[#06768d] text-white text-xs font-medium px-2 py-1 mx-1 ">NEW!</div>}
                { featured && <div className="rounded-full bg-black text-white text-xs font-medium px-2 py-1 mx-1" > FEATURED </div> }
                </div>
            </div>
            <h1 className="font-bold md:text-xl hover:text-[#06768d] hover:cursor-pointer py-1 md:py-0">{position}</h1>
            <div className="flex text-nowrap w-3/4 md:w-full justify-between text-xs md:text-lg text-gray-400  mt-1">
                <p>{postedAt}</p>.
                <p>{contract}</p>.
                <p>{location}</p>
            </div>
        </div>
      </div>
      <hr className="bg-slate-400 h-[1px] w-full block md:hidden" />
      <div className="flex items-start flex-wrap py-2 pt-3 md:pt-0 md:py-0">
        { languages.map((l)=> <Tags click={()=>click(l)} l={l} />) }
        { tools.map((l)=><Tags click={()=>click(l)} l={l} />) }
        <Tags click={()=>click(role)} l={role} />
        <Tags click={()=>click(level)} l={level} />
      </div>
    </div>
  );
}

export default Card;
