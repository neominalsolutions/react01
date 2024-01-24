import { Component, ReactNode } from "react";
import ClassComponentLifeCycleMethods from "./ClassComponentLifeCycleMethods";

export default class AppClassComponent extends Component {
    state: any = {
        visible: false
    }
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ visible: !this.state.visible });
    }
    render(): ReactNode {
        // if(this.state.visible){
        //     return <>
        //     <button onClick={this.toggle}>Toggle</button>
        //     <ClassComponentLifeCycleMethods />
        //     </>
            
        // }
        // else {
        //     return <>
        //     <button onClick={this.toggle}>Toggle</button>
        //     </>
        // }

        return <>
            <button onClick={this.toggle}>Toggle</button>
            { this.state.visible && <ClassComponentLifeCycleMethods /> }
        </>
    }
}