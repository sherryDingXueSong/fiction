import testTime from './testdirector';

class Func{
    public func(str2:string):string{
        let newStr:string="";
        while (str2.length > 3) {
            newStr = ',' + str2.slice(-3) + newStr;
            str2 = str2.slice(0, str2.length - 3);
        }
        if (str2) { newStr = str2 + newStr; }
        return newStr;
    }
    public func2(str:string):string{
        let newStr:string="";
        for(let i=0;i<Math.ceil(str.length/3);i++){
            if(i==Math.ceil(str.length/3)-1){
                newStr=newStr + str.slice(i*3,(i+1)*3);
                break;
            }
            newStr=newStr + str.slice(i*3,(i+1)*3) + ",";
        }
        return newStr;
    }
    public func3(str:string):string{
        let arr=Array.from(str);
        for(let i=arr.length-1;i>0;i--){
            if(i%3==2){
                arr[i]=","+arr[i];
            }
        }
        return arr.join("");
    }
}

export{Func}