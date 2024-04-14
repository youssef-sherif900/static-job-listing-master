function Filter({
  filter,
  click,
  clear,
}: {
  filter: string[];
  click: (f: string) => void;
  clear: () => void;
}) {
  return (
    <div className="relative bottom-14 w-[90%] md:w-3/4  md:h-[75px] flex items-center justify-between bg-white my-3 px-5 py-2 rounded-md ">
      <div className=" flex items-center center flex-wrap ">
        {filter.map((l) => (
          <div className="flex mx-2 my-1 "
          onClick={() => click(l)}
          >
            <div
              className="flex p-1 px-2 rounded-sm bg-slate-200 text-sm font-medium text-teel-600 hover:cursor-pointer"
            >
              {l}
            </div>
            <span className="bg-[#06768d] text-white p-1 px-2 rounded-r-md font-semibold hover:bg-black hover:cursor-pointer">
              X
            </span>
          </div>
        ))}
      </div>
      <p
        onClick={() => clear()}
        className="underline hover:cursor-pointer font-bold"
      >
        Clear
      </p>
    </div>
  );
}

export default Filter;
