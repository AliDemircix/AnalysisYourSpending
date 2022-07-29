import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import OutComeForm from './components/OutComeForm';
import { AnalysisChart } from './components/AnalysisChart';
import { Button } from 'antd';
import { calculateByMonths, dataFilteredByDate } from './widgets/GroupData';

function App() {

  const [outComes,setOutComes] =useState([]);
  const [isAnalysis,setIsAnalysis]=useState(false);
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  const handleAnalysis=()=> {
   const dataByYears= dataFilteredByDate(outComes);
// calculateByMonths(`${currentYear}-01`,dataByYears)
const calculateMounthlyData=(currentYear,dataByYears)=>{
  let mounths={};
  let mounthsArray=[]
  for(let i=1; i<=12;i++){
    if(i<10){
      if(dataByYears[`${currentYear}-0${i}`]){
        mounths[`${currentYear}-0${i}`]= dataByYears[`${currentYear}-0${i}`].reduce((a,b)=> a+b.amount,0)
               mounthsArray.push( mounths)
               mounths={}
      }
    }
    else{
      if(dataByYears[`${currentYear}-${i}`]){

        mounths[`${currentYear}-${i}`]= dataByYears[`${currentYear}-${i}`].reduce((a,b)=> a+b.amount,0)
        mounthsArray.push( mounths)
        mounths={}
      }
    }
   
  }
  return mounthsArray;
}
const analysisMounths=calculateMounthlyData(currentYear,dataByYears);
console.log(analysisMounths)
  //  console.log(dataByYears[`${currentYear}-01`].reduce((a,b)=> a+b.amount,0));
    setIsAnalysis(true)
  }

  return (
    <div className="App">
 {isAnalysis &&  <div className='chart'><AnalysisChart data={outComes}></AnalysisChart></div>}
    <div>
      <OutComeForm setOutComes={setOutComes} outComes={outComes}></OutComeForm>
      {outComes&& <div>Total:</div>}
      <Button type="dashed" onClick={handleAnalysis}>AnalysisChart</Button>
      
    </div>
    </div>
  );
}

export default App;
