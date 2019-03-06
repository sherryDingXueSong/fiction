import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {func ,func2}from './utils/test'

class App extends React.PureComponent{
    private array:Array<any> = [];
    private num:number;
    private str:string;

    constructor(props){
        super(props);
        this.num=Math.floor(Math.random()*100000000);
        this.str= this.num.toString();
    }
    componentDidMount(){
        console.log(func(this.str));
        console.log("^^^^");
        console.log(func2(this.str))
    }

    render(){
        return(
            <div>
                hello world!
            </div>
        )
    }

}

ReactDOM.render(<App />,document.getElementById("app"))