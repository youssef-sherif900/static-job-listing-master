import React from "react";

function Tags({ l, click }: { l: string; click: (l: string) => void }) {
  return (
    <div
      onClick={() => click(l)}
      className="p-1 px-2 mr-4 my-1 md:my-0 md:mr-0 md:mx-2 rounded-sm text-[#06768d] bg-slate-200 text-xs md:text-sm font-bold md:font-medium text-teel-600 hover:cursor-pointer text-semibold hover:bg-[#06768d] hover:text-white"
    >
      {l}
    </div>
  );
}

export default Tags;
