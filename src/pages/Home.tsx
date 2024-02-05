import React,{useState,useEffect} from 'react';
//imported mean,mode,median functions
import {calculateMedian, calculateMean ,calculateMode } from "../utilities/functions"
import Table from '../components/Table';
import {dataset} from "./Wine-Data";
const Home = () => {
const [flav, setFlav] = useState<{[key:string]:classStats}>({});
const [gamma, setGamma] = useState<{[key:string]:classStats}>({});
const myString=["Flavanoids","Gamma"];

  interface DataItem{
    Alcohol:number,
   "Malic Acid": number,
      Ash: number| string,
      "Alcalinity of ash": number,
      Magnesium:number ,
      "Total phenols": number,
      Flavanoids: number|string,
      "Nonflavanoid phenols": number|string,
      Proanthocyanins:  string ,
      "Color intensity":number|string,
      Hue: number,
     "OD280/OD315 of diluted wines": number | string,
      Unknown:number
  }
  interface classStats{
    mean:number,
    median:number,
    mode:number
  
  }
 
useEffect(() => {
  // Calculated the statistics when the component mounts
  const response= calculateClasswiseGamma(dataset);
  const res= calculateClasswise(dataset);
 
  setFlav(res);
  setGamma(response);

}, []); 
const calculateClasswise=(dataset:DataItem[]):{[key:string]:classStats}=>{
  const classData:{[key:string]:number[]}={ };
  dataset.forEach((item)=>{
    const className=`Class ${item.Alcohol}`;
    if(!classData[className]){
      classData[className]=[];
    }
   
   if(typeof(item.Flavanoids)== "string"){
   
    classData[className].push(parseFloat(item.Flavanoids));
    
   }else{
    classData[className].push(item.Flavanoids);
   
   }
    
  });
 
  const result:{[key:string]:classStats}={ };
  for(const className in classData){
    const data=classData[className];
    
    result[className]={
      mean:calculateMean(data),
      median:calculateMedian(data),
     mode:calculateMode(data),
    }

  }
  return result;
}
const calculateClasswiseGamma=(dataset:DataItem[]):{[key:string]:classStats}=>{
  const classData:{[key:string]:number[]}={ };
  dataset.forEach((item)=>{
    const className=`Class ${item.Alcohol}`;
    if(!classData[className]){
      classData[className]=[];
    }
    if(typeof(item.Ash)=="string"){
      const gamma=((parseFloat(item.Ash))*(item.Hue))/((item.Magnesium));
      classData[className].push(gamma);
    }
    else{
      const gamma=((item.Ash)*(item.Hue))/((item.Magnesium));
      classData[className].push(gamma);
    }
   
      
  });
  const result:{[key:string]:classStats}={ };
  for(const className in classData){
    const data=classData[className];


    result[className]={
      mean:calculateMean(data),
      median:calculateMedian(data),
      mode:calculateMode(data)

    }

  }
  return result;
}



  return (
    <>

    <div>
  <Table flav={flav} name={myString[0]}/>
  <Table flav={gamma} name={myString[1]}/>
  </div>
   
   </>
  
  )
}

export default Home;