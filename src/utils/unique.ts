export default class Unique{
    public unique(array:Array<any>):Array<any>{
         if(!(array instanceof Array) || array.length ===0){
             return []
         }
         let newArr:Array<any> = [];
         for(let i =0 ;i <array.length; i++){
             if(newArr.indexOf(array[i])===-1){
                 newArr.push(array[i])
             }
         }
         return newArr;
    }

    public unique2(array:any[]):any[]{
        if(!(array instanceof Array) || array.length === 0){
            return []
        }
        let newArr:any[]=[];
        for(let i = 0; i<array.length;i++){
            let isUnique = true;
            for(let j=i+1;j<array.length;j++){
                if(array[i]===array[j]){
                    isUnique = false;
                    break;
                }
            }
            if(isUnique){
                newArr.push(array[i])
            }
           
        }
        return newArr;
    }
}