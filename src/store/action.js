import { TYPE_CATEGORIES } from "./type";
import { TYPE_CATS } from "./type";
import axios from "axios";


export const allCats=(value)=>{


    return {type:TYPE_CATS,value}
}
export const allCategories=(value)=>{


    return {type:TYPE_CATEGORIES,value}
}

