import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="flex gap-4 flex-col items-center justify-center h-[44vh] text-white">
       <div className="font-bold flex text-5xl justify-center items-center gap-2 ">Buy me a chai <span ><img src="teacup.gif" width={76} alt="teacup" /></span></div>
       <p> A crowndfunding platform for creator. Get funded by your fans and follower.Start now!</p>
       <div>
       <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Start here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Read more</button>
        
       </div>
       
     </div>
     <div className="bg-white h-1 opacity-5"></div>
     <div className="text-white container  py-5">
        <h2 className="text-2xl text-center mb-12 font-bold">Your Fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around ">
              <div className="item flex flex-col items-center justify-center  space-y-3">
               <img className=" text-black bg-slate-400 p-2 rounded-full" src="manlaptop.gif" width={80} alt="img" />
               <p className="font-bold">Your Fans want to help</p>
               <p className="text-center ">Your fan are avialable for youto help </p>
             </div>

             <div className="item flex flex-col items-center justify-center  space-y-3">
               <img className=" text-black bg-slate-400 p-2 rounded-full" src="manlaptop.gif" width={80} alt="img" />
              <p className="font-bold">Your Fans want to help</p>
             <p className="text-center ">Your fan are avialable for youto help </p>
             </div>

             <div className="item flex flex-col items-center justify-center  space-y-3">
               <img className=" text-black bg-slate-400 p-2 rounded-full" src="manlaptop.gif" width={80} alt="img" />
              <p className="font-bold">Your Fans want to help</p>
             <p className="text-center ">Your fan are avialable for youto help </p>
             </div>
        </div>
     </div>
     <div className="bg-white h-1 opacity-5"></div>
         
     
       
     </>
  );
}
