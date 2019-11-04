import React from "react";

class Detail extends React.PureComponent<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            name:'Detail.tsx'
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