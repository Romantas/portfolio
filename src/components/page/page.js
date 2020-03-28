import React from "react";
import './page.css';
import gsap from 'gsap';
import Header from "../header/header";
import MainContent from "../mainContent/main";
import Background from "../background/background";
import Us from "../usContent/us";
class Page extends React.Component {
    constructor(props){
        super(props);

        //reference pages DOM
        this.pageDOM = [];

        //props from child
        this.state = {page: ""}

    }

    //callback function from child
    callbackFunction = (childData) => {
        this.setState({page: childData})
    }

    componentDidMount() {
        gsap.from(this.pageDOM[0], {duration:2, y: 265, autoAlpha: 0, ease: "back"});
    }

    componentDidUpdate(prevState, prevProps) {
        if(prevProps.page === ""){
             gsap.timeline({defaults:{duration:2, force3D:false}})
             .to(this.pageDOM[0], {y: -235, autoAlpha: 0})
             .to(this.pageDOM[parseInt(this.state.page)], { y: 0, autoAlpha: 1, ease: "back"}, ">-1")
        }
        else if (prevProps.page !== this.state.page){
        }

    }

    render() {
        return (
            <div className='page'>
                <Background/>
                <Header parentCallback = {this.callbackFunction}/>
                <div className='content-border'>
                    <div ref={ div => this.pageDOM[0] = div } className="main-wrapper">
                        <MainContent/>
                    </div>
                    <div ref={ div => this.pageDOM[1] = div } className="us-wrapper">
                        <Us/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page;
