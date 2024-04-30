import { FiMenu, FiChevronDown, FiMaximize, FiGrid, FiGlobe,FiSearch,FiBell,FiSettings } from "react-icons/fi"
import Image from "next/image"
/*
style={{backgroundColor:"rgb(203 213 225)",height:"32px",width:"10%",borderTopRightRadius:"0.25rem",borderBottomRightRadius:"0.25rem",paddingRight:"0.125rem",boxSizing:"border-box",color:"rgb(100 116 139)"}}
*/
export default function Header(){
    return(
        <header className="p-3 rounded-xl flex items-center justify-between mx-1 w-[80%] ml-[350px] bg-white">
            <div className="flex items-center gap-2 ">
                <FiMenu />
                <h1>Create new</h1>
                <FiChevronDown />
            </div>
            <div className="flex items-center">
                <div className="">
                    <form className="flex items-center">
                        <input className="bg-slate-300 text-slate-500 p-1 rounded-l rounded-r-0 w-full" placeholder="Search..." type="search" name="header-search" id="header-search" />
                        <div className="bg-slate-300 h-full pr-3 rounded-r">
                        <FiSearch style={{height:"32px",color:"rgb(100 116 139)"}}  />
                        </div>
                    </form>
                </div>  
                <div>
                    <nav className="flex items-center">
                        <a className="mx-2">
                            <FiMaximize />
                        </a>
                        <a className="mx-2">
                            <FiGrid />
                        </a>
                        <a className="mx-2">
                            <FiGlobe />
                        </a>
                        <a className="mx-2">
                            <FiBell />
                        </a>
                    </nav>
                </div>
                <div className="flex items-center gap-1 mr-3">
                    <Image className="rounded-full" src="/users/avatar-1.jpg" height={30} width={30} alt="profile-picture" />
                    <h1>Nik Patel</h1>
                    <FiChevronDown />
                </div>
                <FiSettings />
            </div>
        </header>
    )
}