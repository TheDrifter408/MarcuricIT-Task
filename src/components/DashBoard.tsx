"use client"
import { FiBarChart2, FiBookmark, FiCpu, FiFileText, FiGift, FiGrid, FiMap, FiPackage } from "react-icons/fi";
//Components import
import Header from "./Header";
import Table from "./Table";
import SideMenu from "./SideMenu";
//types import 
import { MenuItemProps } from "@/types";
import { records, invoiceData } from "../data";
import Form from "./Form";
import Accounting from "./Accounting";


const items:MenuItemProps[] = [
    {
        id:1,
        title:"Custom Pages",
        link:'#',
        chevron:true,
        icon:<FiFileText />,
        dropdown:[{id:1,title:"Pages Dropdown",link:"#",chevron:false}]
    },
    {
        id:2,
        title:"UI Components",
        link:'#',
        chevron:false,
        icon:<FiPackage />
    },
    {
        id:3,
        title:"Widgets",
        link:'#',
        chevron:false,
        icon: <FiGift />
    },
    {
        id:4,
        title:"Icons",
        link:'#',
        chevron:true,
        icon:<FiCpu />
    },
    {
        id:5,
        title:"Forms",
        link:'#',
        chevron:true,
        icon:<FiBookmark />
    },
    {
        id:6,
        title:"Charts",
        link:'#',
        chevron:true,
        icon:<FiBarChart2 />
    },
    {
        id:7,
        title:"Tables",
        link:'#',
        chevron:true,
        icon: <FiGrid />,
        dropdown:[
            {
                id:1,
                title:"Basic",
                link:'#',
                chevron:false
            },
            {
                id:2,
                title:"Advanced",
                link:"#",
                chevron:false
            }
        ]
    },
    {
        id:8,
        title:"Maps",
        link:'#',
        chevron:true,
        icon:<FiMap />
    },
    
]

export default function DashBoard(){

    return(
        <main className="h-full relative bg-gray-300">
            <Header />
            <SideMenu items={items} />
                <section className="w-4/5 h-4/5 mt-2 ml-[22rem] bg-white rounded-xl">
                    <Table headers={["ID","Name","Phone Number","Age","Company"]} data={records} page={1} rowsPerPage={5} />
                </section>
                <section className="p-3 w-4/5 h-4/5 mt-2 ml-[22rem] bg-white rounded-xl">
                <h1 className="font-semibold text-xl">Form Input</h1>
                    <Form />
                </section>
                <section className="p-3 w-4/5 h-4/5 mt-2 ml-[22rem] bg-white rounded-xl">
                    <Accounting {...invoiceData}  />
                </section>
        </main>
    )
}