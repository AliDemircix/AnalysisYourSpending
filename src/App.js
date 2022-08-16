import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import OutComeForm from './components/OutComeForm';
import { AnalysisChart } from './components/AnalysisChart';
import { Button } from 'antd';
import { calculateByMonths, dataFilteredByCategory, dataFilteredByDate } from './widgets/GroupData';

function App() {

  const [outComes,setOutComes] =useState([]);
  const [isAnalysis,setIsAnalysis]=useState(false);
  const [isMonthlyAnalysis,setIsMonthlyAnalysis]=useState({'isAnalysis':false,'months':[]});
  const currentYear = new Date().getFullYear();
  // console.log(currentYear);
  const handleAnalysis=()=> {
    setIsAnalysis(true)
    const dataByCategory=dataFilteredByCategory(outComes);
    //  console.log(dataByCategory)
  }

  const handleAnalysisMounths=()=> {
    //Get data filtered date
   const dataByYears= dataFilteredByDate(outComes);
   //Get data filtered cateory

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
setIsMonthlyAnalysis({'isAnalysis':true,'months':analysisMounths});

  //  console.log(dataByYears[`${currentYear}-01`].reduce((a,b)=> a+b.amount,0));
   
  }
  console.log(isMonthlyAnalysis)
  return (
    <div className="App">
<div className='analysisContainer'>
{isAnalysis &&  <div className='chart'><AnalysisChart data={outComes}></AnalysisChart></div>}
<div className='monthlyResults'>
  <h3>Monthly Total Values</h3>
<ul>{isMonthlyAnalysis.isAnalysis&& isMonthlyAnalysis.months.map(m=> <li><b>{Object.keys(m)}</b>: {Object.values(m)}</li>)}</ul>
</div>
</div>
    <div>
      <OutComeForm setOutComes={setOutComes} outComes={outComes}></OutComeForm>
      {outComes&& <div>Total:</div>}
      <Button type="dashed" onClick={handleAnalysis}>AnalysisChart</Button>
      <Button type="dashed" onClick={handleAnalysisMounths}>Analysis by Mounths</Button>

      
    </div>
    </div>
  );
}

export default App;
