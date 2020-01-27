import * as React from "react";

interface ICxcxcAppState {
    clickFreq:number
}

class CxcxcApp extends React.Component<any, ICxcxcAppState>{

    constructor(props) {
        super(props);
        this.state={
            clickFreq:0
        }
    }

    public addClickFreq(){
        this.setState({
            clickFreq:this.state.clickFreq+1
        })
    }

    public render(){
        return(
            <input type={"button"}  onClick={()=>this.addClickFreq()} value={this.state.clickFreq} />
        )
    }
}

export default CxcxcApp;