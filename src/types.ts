import { ReactElement } from "react";

export interface Records {
    id: number;
    age: number;
    name: string;
    company: string;
    phone: string;
  }
  
export interface ExpandableRecords {
    id: number;
    age: number;
    name: string;
    company: string;
    phone: string;
    subRows: Records[];
  }

//Components Prop Logic
export type MenuItemProps = {
    id:number;
    title:string;
    link:string;
    chevron:boolean;
    active?:boolean;
    icon?:ReactElement;
    dropdown?:MenuItemProps[];
}

export type MenuProps = {
    items:MenuItemProps[];
}

export type TableProps = {
  headers:string[];
  data:Records[];
  page:number;
  rowsPerPage:number;
}

interface InvoiceItem {
  id: number;
  name: string;
  description: string;
  hours: number;
  hour_rate: number;
  total: number;
}

interface Address {
  owner: string;
  line_1: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
}

export interface InvoiceTypes {
  customer?: string;
  notes?: string;
  invoice_date?: string;
  due_date?: string;
  invoice_id?: string;
  address: Address;
  items: InvoiceItem[];
  sub_total?: number;
  discount?: number;
  total?: number;
}

export interface PlanItemsTypes {
  id: number;
  name: string;
  icon: string;
  price: number;
  duration: string;
  features: Array<string>;
  isRecommended: boolean;
}
