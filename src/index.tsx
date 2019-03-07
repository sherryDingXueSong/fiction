import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Func}from './utils/test';
import Main from './main';

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
        console.log(new Func().func(this.str));
        console.log("^^^^");
        console.log(new Func().func2(this.str));
        console.log("^^^^");
        console.log(new Func().func3(this.str))
    }

    render(){
        return(
            <div>
                hello world!
                <Main />
            </div>
        )
    }

}

ReactDOM.render(<App />,document.getElementById("app"))