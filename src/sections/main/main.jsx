import { Separator } from "@/components/ui/separator";

function Main() {
  return (
    <div className="flex p-20 snap-start 2xl:p-40 w-full h-screen">
      <div className="bg-black px-20 py-10 rounded-br-2xl w-3/4 h-full">
        <h1 className="font-extrabold font-frank text-7xl text-center text-gray-200">
          CONGONITIVE DRIVER ACTION RECOGNITION SYSTEM
        </h1>
      </div>
      <div className="text-right flex flex-col gap-10 bg-gray-200 p-10 rounded-2xl w-1/4 2xl:w-[20%] h-full text-black">
        <span className="space-y-4">
          <h2 className="font-extrabold font-libre text-5xl">Team</h2>
          <ul className="space-y-1 font-biryani font-bold text-xl">
            <li>ADITYA ADHANE</li>
            <li>ARYAN GAIKAWAD</li>
            <li>VEDANT MORE</li>
            <li>VISHAL SANGOLE</li>
          </ul>
        </span>
        <Separator className="bg-black" />
        <span className="space-y-4">
          <h2 className="font-extrabold font-libre text-5xl">Guide</h2>
          <p className="font-biryani font-bold text-xl">S. P. JADHAV</p>
        </span>
      </div>
    </div>
  );
}

export default Main;
