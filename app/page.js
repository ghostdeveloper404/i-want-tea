import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <div className="flex gap-4 flex-col items-center text-xl md:text-base px-4 md:px-0 justify-center h-[44vh] text-white">
       <div className="font-bold flex text-5xl md:text-5xl text-xl justify-center items-center gap-2 ">Buy me a chai <span ><img className="invertImg" src="teacup.gif" width={76} alt="teacup" /></span></div>
       <p className="text-center md:text-left"> A crowndfunding platform for creator. Get funded by your fans and follower.Start now!</p>
       <div>
       <Link href={"/login"}>
       <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Start here</button>
       </Link>
       <Link href={"/about"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Read more</button>
       </Link>
        
       </div>
       
     </div>
     <div className="bg-white h-1 opacity-5"></div>
     <div className="text-white px-10 container m-auto py-8">
        <h2 className="text-2xl text-center mb-12 font-bold">Your Fans can buy you a chai</h2>
        <div className="flex gap-5  justify-around ">
              <div className="item flex flex-col items-center justify-center  space-y-3">
               <img className=" text-black bg-slate-400 p-2 rounded-full" src="manlaptop.gif" width={80} alt="img" />
               <p className="font-bold text-center">Your Fans want to help</p>
               <p className="text-center ">Your fan are avialable for youto help </p>
             </div>

             <div className="item flex flex-col items-center justify-center  space-y-3">
               <img className=" text-black bg-slate-400 p-2 rounded-full" src="manlaptop.gif" width={80} alt="img" />
              <p className="font-bold text-center">Your Fans want to help</p>
             <p className="text-center ">Your fan are avialable for youto help </p>
             </div>

             <div className="item flex flex-col items-center justify-center  space-y-3">
               <img className=" text-black bg-slate-400 p-2 rounded-full" src="manlaptop.gif" width={80} alt="img" />
              <p className="font-bold text-center">Your Fans want to help</p>
             <p className="text-center ">Your fan are avialable for youto help </p>
             </div>
        </div>
     </div>
     
       
     </>
  );
}
