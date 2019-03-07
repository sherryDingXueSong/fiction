import * as React from 'react';

export default class Main extends React.PureComponent<any,any>{
    private array:Array<any>=[];

    constructor(props){
        super(props);
        for(let i=0;i<100000000;i++){
            this.array.push(this.getRandomData(10,20))
        }
        console.log("this is page main:")
        console.log(this.array)
    }
    getRandomData=(min:number,max:number)=>{
         let range=max-min;
         let res=min+Math.random()*range;
         return res
    }
    render(){
        return(
            <div>
                welcome!
            </div>
        )
    }
}