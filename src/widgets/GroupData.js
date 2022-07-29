import { groupBy } from "../components/GroupReduce";

export const dataFilteredByDate= (data)=> groupBy(data, "date");
export const dataFilteredByCategory= (data)=> groupBy(data, "category");
export const calculateByMonths=(date,data)=>{
const filteredData=dataFilteredByDate(data);
console.log(filteredData[date]);

}