import * as React from "react";


interface ICxcxcButtonProps {
    onClick:()=>void
    buttonValue:string
}

class CxcxcButton extends React.Component<ICxcxcButtonProps, any>{


    public render(){
        return(
            <input type={"button"} onClick={()=>this.props.onClick()} value={this.props.buttonValue} />
        )
    }

}

export default CxcxcButton;