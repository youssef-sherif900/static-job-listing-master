import "./App.css";
import { ReactComponent as DesktopHeader } from "./images/bg-header-desktop.svg";
import { ReactComponent as MobileHeader } from "./images/bg-header-mobile.svg"
import jsonData from "./data.json";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";

type map = {
    [key:string] : {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }[];
}


function App() {
  const [filter, setFilter] = useState<string[]>([]);
  const [data, setData] = useState([...jsonData]);
  const [map , setMap] = useState<map>({})
  useEffect(()=>{
    if(filter.length === 0 ){
      setMap({})
    }
  },[filter])

  return (
    <div className=" relative App w-[375px] md:w-[1440px] h-full flex flex-col items-center">
      <div className="hidden md:block">
      <DesktopHeader/>
      </div>
      <div className="block md:hidden w-full h-full">
        <MobileHeader />
      </div>
      {filter.length > 0 && (
        <Filter
          filter={filter}
          click={(f) => {
            setFilter(
              filter.filter((el) => {
                return el !== f;
              })
            );
            setData((prev) => {
              return [...prev, ...map[f]];
            });
          }}
          clear={() => {
            setFilter([]);
            setData([...jsonData]);
          }}
        />
      )}
      <div
        className={` ${
          filter.length === 0 && "mt-16"
        } w-full h-full flex flex-col items-center`}
      >
        {data.map((c) => (
          <Card
            click={(f) => {
              !filter.includes(f) && setFilter((prev) => [...prev, f]);
              let filterd = data.filter(
                (el) => el.tools.includes(f) || el.languages.includes(f) || el.level === f || el.role === f
              );
              let filterdExtracted = data.filter(
                (el) => !el.tools.includes(f) && !el.languages.includes(f) && el.level !== f && el.role !== f
              );
              setData( filterd );
              setMap((prev)=>{ return {...prev, [f]:filterdExtracted}});
            }}
            key={c.id}
            nEw={c.new}
            logo={require(`${c.logo}`)}
            company={c.company}
            featured={c.featured}
            position={c.position}
            role={c.role}
            level={c.level}
            postedAt={c.postedAt}
            contract={c.contract}
            languages={c.languages}
            location={c.location}
            tools={c.tools}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
