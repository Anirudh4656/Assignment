
export const calculateMean=(data:number[]):number=>{
  
    //return type is number
    const sum=data.reduce((acc,item)=>acc+item ,0);
    return(sum/data.length);
    }
    export const calculateMode = (data: number[]): number => {
        const countMap: { [key: string]: number } = {};
        data.forEach((item) => {
          countMap[item] = (countMap[item] || 0) + 1;
        });
      
        let mode: number = 0;
        let maxCount: number = 0;
      
        for (const key in countMap) {
          if (countMap[key] > maxCount) {
            mode = parseFloat(key);
            maxCount = countMap[key];
          }
        }
        const Intmode=mode;
        return Intmode;
      };
    export const calculateMedian = (data: number[]): number => {
      const numData: number[] = data.map(Number);
      numData.sort((a, b) => a - b);
      const mid: number = Math.floor(numData.length / 2);
    
      if (numData.length % 2 === 0) {
        return (numData[mid - 1] + numData[mid]) / 2;
      } else {
        return numData[mid];
      }
    };