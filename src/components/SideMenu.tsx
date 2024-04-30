import { FiChevronDown, FiFilePlus } from "react-icons/fi";
import { MenuItemProps,MenuProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function SideMenu({items}:MenuProps){

    return(
        <aside className="bg-white h-full w-[18%] absolute fixed top-0">
            <div className="h-32 w-full p-1">
                <Image className="mx-2 my-1" src="/logo/logo-dark.png" width={217} height={48} alt="logo" />
            </div>
            <div>
                <div>
                    <Link className="flex items-center gap-2 w-full p-3  active:text-purple-500" href="#">
                        <FiFilePlus />
                        File Manager
                    </Link>
                </div>
                <div className=" py-2 mx-1 my-1 border border-t-3 border-r-0 border-l-0 border-b-3">
                    <p className="font-semibold text-slate-400 uppercase">Custom</p>
                    <Link className="flex items-center gap-2 w-full p-3 active:text-purple-500" href="#">
                        <FiFilePlus />
                        Pages
                    </Link>
                </div>
            </div>
            <nav className="">
                {
                    items.map((item:MenuItemProps) => {
                        if(item.chevron === true){
                            return(
                                <button onClick={() => !item.active} key={item.id} className="w-full flex items-center justify-between">
                                    <Link className="flex items-center gap-2 w-full p-3 active:text-purple-500" key={item.id} href={item.link}>
                                    {item.icon}
                                    {item.title}
                                    </Link>
                                    <FiChevronDown style={{display:"inline-block", marginRight:"10px"}} />
                                </button>
                            )
                        }
                        else {
                            return(
                                <button onClick={() => !item.active} key={item.id} className="w-full flex items-center justify-between">
                                    <Link className="flex items-center gap-2 w-full p-3 active:text-purple-500" key={item.id} href={item.link}>
                                        {item.icon}
                                        {item.title}
                                        </Link>
                                        <FiChevronDown style={{color:"white",display:"inline-block"}} />
                                </button>
                            )
                        }

                    })
                }   
            </nav>
        </aside>
    )
}

