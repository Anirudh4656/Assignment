
export const calculateMean=(data:string[]):number=>{
    const sum=data.reduce((acc,item)=>acc+parseInt(item,10),0);
    return(sum/data.length);
    }
    export const calculateMode = (data: string[]): number => {
        const countMap: { [key: string]: number } = {};
        data.forEach((item) => {
          countMap[item] = (countMap[item] || 0) + 1;
        });
      
        let mode: string = '';
        let maxCount: number = 0;
      
        for (const key in countMap) {
          if (countMap[key] > maxCount) {
            mode = key;
            maxCount = countMap[key];
          }
        }
        const Intmode=parseInt(mode);
        return Intmode;
      };
    export const calculateMedian = (data: string[]): number => {
      const numData: number[] = data.map(Number);
      numData.sort((a, b) => a - b);
      const mid: number = Math.floor(numData.length / 2);
    
      if (numData.length % 2 === 0) {
        return (numData[mid - 1] + numData[mid]) / 2;
      } else {
        return numData[mid];
      }
    };