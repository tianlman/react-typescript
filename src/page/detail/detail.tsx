import React from "react";

class Detail extends React.PureComponent<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            name:''
        }
    }
    render(){
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}
export default Detail