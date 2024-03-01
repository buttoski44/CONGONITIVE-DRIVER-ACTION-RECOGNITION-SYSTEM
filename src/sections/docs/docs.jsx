import React from "react";
import Block from "./block";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronsRight } from "lucide-react";
import Indexes from "./indexes";

const INDEX_LIST = [
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
];

function Docs() {
  return (
    <div className="flex bg-black snap-center h-screen">
      <div className="space-y-6 bg-black rounded-tr-xl w-3/4 h-full overflow-y-scroll relatie'">
        <div className="absolute bg-gray-200/10 backdrop-blur-sm py-6 w-3/4 h-20">
          <p className="px-20 2xl:px-40 font-extrabold font-libre text-3xl text-gray-200">
            DOCUMENTATION
          </p>
        </div>
        <div className="px-20 2xl:px-40 pt-20">
          <Block id="block" />
        </div>
      </div>
      <div className="text-right space-y-6 bg-gray-200 rounded-bl-2xl w-1/4 h-full text-black overflow-y-scroll ">
        <div className="z-20 absolute flex justify-between bg-black/10 backdrop-blur-sm py-6 pr-6 pl-3 w-1/4 h-20">
          <div className="flex justify-start items-center gap-4">
            <div className="flex">
              <Button className="bg-white hover:bg-white shadow-md px-2 rounded-r-none">
                <Search className="text-gray-200" />
              </Button>

              <Input
                type="text"
                className="rounded-l-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md placeholder:text-gray-300"
                placeholder="Quick Search..."
              />
            </div>
          </div>
          <p className="font-extrabold font-libre text-3xl text-black">Index</p>
        </div>
        <div className="relative z-10 flex flex-col justify-end ">
          <Button className="top-20 sticky bg-white hover:bg-black px-1 rounded-none w-8">
            <ChevronsRight className="text-gray-200" />
          </Button>
          <ul className="px-6 2xl:px-20 pt-16 ">
            {INDEX_LIST.map((index) => (
              <Indexes index={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Docs;
