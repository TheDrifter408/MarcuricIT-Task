import { InvoiceTypes } from "@/types"
import { Fragment } from "react"
export default function Accounting({invoice_id,customer,invoice_date,notes,due_date,address,items,sub_total,discount,total}:InvoiceTypes){
    return(
        <div className="p-1">
            <div className="grid justify-center">
                <h1 className="font-bold text-4xl">Accounting Report</h1>
                <h2 className="font-semibold text-2xl">Due Date: {due_date}</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                <h1 className="text-2xl">Invoice Date: {invoice_date}</h1>
                <h1 className="text-2xl my-1">Address:</h1>
                <p><span className="font-semibold">Invoice ID:</span>{invoice_id}</p>
                <p><span className="font-semibold">Owner:</span> {address.owner}</p>
                <p><span className="font-semibold">Line:</span> {address.line_1}</p>
                <p><span className="font-semibold">City:</span> {address.city}</p>
                <p><span className="font-semibold">State:</span> {address.state}</p>
                <p><span className="font-semibold">Zip:</span> {address.zip}</p>
                <p><span className="font-semibold">Phone:</span> {address.phone}</p>
                </div>  
                <div>
                    <h1 className="text-2xl my-1">Items:</h1>
                    <dl>
                    {
                        items.map((item) => (
                            <Fragment key={item.id}>
                                <div>
                                    <p className="italic">{item.id}.</p>
                                </div>
                                <div className="flex gap-1">
                                <dt className="font-semibold">Name:</dt>
                                <dd>{item.name}</dd>
                                </div>
                                <div className="flex gap-1">
                                <dt className="font-semibold">Description:</dt>
                                <dd>{item.description}</dd>
                                </div>
                                <div className="flex gap-1">
                                <dt className="font-semibold">Hours:</dt>
                                <dd>{item.hours}</dd>
                                </div>
                                <div className="flex gap-1">
                                <dt className="font-semibold">Rate:</dt>
                                <dd>{item.hour_rate}</dd>
                                </div>
                                <div className="flex gap-1">
                                <dt className="font-semibold">Total:</dt>
                                <dd>{item.total}</dd>
                                </div>
                            </Fragment>
                        ))
                    }
                    </dl>
                </div>
                <div className="">
                    <h1 className="text-3xl my-2">Summary:</h1>
                    <p><span className="font-semibold">Sub total:</span>{sub_total}</p>
                    <p><span className="font-semibold">Discount:</span>{discount}</p>
                    <p><span className="font-semibold">Total:</span>{total}</p>
                    <p className="text-sm"><span className="block italic">Note:</span>{notes}</p>
                </div>
            </div>
        </div>
    )
}