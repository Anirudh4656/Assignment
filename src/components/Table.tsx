import React, { FC } from 'react'
interface classStats{
    mean:number,
    median:number,
    mode:number
  
  }
  interface Data {
    [key: string]: classStats;
  }
  interface Props{
   flav:Data,
   name:string,
  }

const Table :FC<Props>=({flav, name}) => {
   
  return (
    <div> <table>
    <thead>
      <tr>
        <th>Measure</th>
        {Object.entries(flav).map(([className, stats], index) => (
        <th key={index}>
          {className}
         
        </th>
      ))}
      
     
    
      </tr>
    </thead>
    <tbody>
      <tr>
      <th> {name} Mean</th>
      {Object.entries(flav).map(([className, stats], index) => (
        <td key={index}>
        
          {stats.mean.toFixed(3)}
        
        </td>
      ))}
      </tr>
      <tr>
      <th>{name} Median</th>
      {Object.entries(flav).map(([className, stats], index) => (
        <td key={index}>
       
       
        {stats.median.toFixed(3)}
       
        
        </td>
        
      ))}
      </tr>
      <tr>
      <th>{name} Mode</th>
      {Object.entries(flav).map(([className, stats], index) => (
        <td key={index}>
       
       
          {stats.median.toFixed(3)}
       
        
        </td>
        
      ))}
      </tr>
   
    </tbody>
  </table></div>
  )
}

export default Table