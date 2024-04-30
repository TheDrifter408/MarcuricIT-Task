"use client"
import { Records } from "@/types";
import { BiSortAlt2 } from "react-icons/bi";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { TableProps } from "@/types";

//Pagination Logic
function calculateRange(data:Records[],rowsPerPage:number) {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for(let i = 1; i <= num; i++){
        range.push(i);
    }
    return range;
}

function dataSlice(data:Records[],page:number,rowsPerPage:number){
    return data.slice((page - 1) * rowsPerPage,page * rowsPerPage);
}


//Separate 'Rows' Component
function Rows({id,age,name,company,phone}:Records){
    return(
        <tr className="border border-b-2 border-t-0 border-r-0 border-l-0">
            <td className="w-1/5 text-center py-8 p-2">{id}</td>
            <td className="w-1/5 text-center py-8 p-2">{name}</td>
            <td className="w-1/5 text-center py-8 p-2">{phone}</td>
            <td className="w-1/5 text-center py-8 p-2">{age}</td>
            <td className="w-1/5 text-center py-8 p-2">{company}</td>
        </tr>
    )
}

export default function Table({headers,data, page, rowsPerPage}:TableProps){

    const [totalPages,setTotalPages] = useState<number[]>([]);
    const [slice,setSlice] = useState<Records[]>([]);
    const [currentPage,setCurrentPage] = useState(() => 1); 

    
    useEffect(() => {
        const range = calculateRange(data,rowsPerPage); //set the No of pages 
        setTotalPages([...range]);

        if(slice.length < 1 && currentPage !== 1){
            setCurrentPage((prev) =>(prev - 1));
        }

    },[slice,setTotalPages, currentPage,setSlice])

    function setNewSlices(CurrentPage:number){
        setCurrentPage(CurrentPage);
        const newSlice = dataSlice(data,CurrentPage,rowsPerPage);
        setSlice([...newSlice]);
    }

    return(
        <div className="p-3 border bg-white w-full h-full rounded-xl ">
            <div>
                <h1 className="font-semibold uppercase">Search</h1>
                <h1 className="font-medium text-slate-300 mb-4">
                    A Table allowing search
                </h1>
            </div>
            <form className="mb-3">
                <label className="mx-1">Search:</label>
                <input className=" w-1/4 p-2 border border-slate-300 rounded" placeholder={`${data.length} records...`} type="search" name="table-search" id="table-search" />
            </form>
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                    {
                        headers.map((header,idx) => (
                            <th className="font-semibold border border-b-4 border-t-0 border-r-0 border-l-0" key={idx}>{header}
                            <button>
                                <BiSortAlt2 style={{color:"rgb(148 163 184)"}} />
                            </button>
                            </th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        slice.map((user:Records) => (
                            <Rows key={user.id} id={user.id} name={user.name} age={user.age} phone={user.phone} company={user.company} />
                        ))
                    }
                </tbody>
            </table>
            <div className="mt-16 flex items-center justify-between">
                <div className="flex items-center gap-2 justify-evenly">
                    <p>Display: </p>
                    <select className="border border-slate-300 rounded">
                        <option value="5">5</option>
                    </select>
                    <div className="flex items-center w-36">
                    <p className="mx-1">Page</p><p className="font-semibold">{page} of {totalPages.length}</p>
                    </div>
                    <div className="w-36 flex items-center gap-1">
                    <label htmlFor="pages">Go to page: </label>
                    <select className="border border-slate-300 rounded" name="pages" id="pages">
                        {
                            totalPages.map((page,idx) => (
                                <option key={idx}>{page}</option>
                            ))
                        }
                    </select>
                    </div>
                </div>
                <div className="flex items-center">
                    <button>
                        <FiChevronLeft />
                    </button>
                    <div className="flex gap-1">
                        {
                            totalPages.map((buttonPage,idx) => (
                                <button className={`rounded-3xl w-[30px] ${buttonPage === currentPage ? 'bg-indigo-600 text-white' : 'bg-white'}`} key={idx} onClick={() => setNewSlices(buttonPage)}>{buttonPage}</button> 
                            ))
                        }
                    </div>
                    <button>
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </div> 
    )
}   