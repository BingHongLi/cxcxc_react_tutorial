import * as React from "react";
import CxcxcForm from "./CxcxcForm";
import CxcxcButton from "./CxcxcButton";



const fakeData:string[] =['fake1','fake2']

interface ICxcxcAppState {
    clickFreq:number;
    questionIndex:number
}

class CxcxcApp extends React.Component<any, ICxcxcAppState>{

    constructor(props) {
        super(props);
        this.state={
            clickFreq:0,
            questionIndex:0
        }
    }

    public addClickFreq(){
        this.setState({
            clickFreq:this.state.clickFreq+1
        })
    }

    public nextQuestion(){
        this.setState({
            questionIndex:this.state.questionIndex+1
        })
    }

    public backQuestion(){
        this.setState({
            questionIndex:this.state.questionIndex-1
        })
    }

    public render(){
        return(
            <div>
                {/*<CxcxcForm formDescription={fakeData[0]}/>*/}
                <CxcxcForm formDescription={fakeData[this.state.questionIndex]}/>
                <input type={"button"}  onClick={()=>this.addClickFreq()} value={this.state.clickFreq} />
                <CxcxcButton onClick={()=>this.nextQuestion()} buttonValue={"下一位用戶"} />
                <CxcxcButton onClick={()=>this.backQuestion()} buttonValue={"前一位用戶"} />
            </div>

        )
    }
}

export default CxcxcApp;