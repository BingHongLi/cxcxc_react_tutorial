import * as React from "react";



interface ICxcxcFormProps{

    formDescription:string
}

class CxcxcForm extends React.Component<ICxcxcFormProps, any>{

    public render(){
        return(
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {this.props.formDescription}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }

}

export default CxcxcForm;