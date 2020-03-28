import React from "react";
import './us.css';
import gsap from 'gsap';
import usPhoto from '../../assets/us-photo.jpg';
class Page extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        //this.animation = gsap.to(this.mainContent, {duration:2, y: -290, opacity: 1});
    }

    render() {
        return (
            <div className='us'>
                <div className="main-us">
                    <div className="photo">
                    </div>
                    <div className="us-text">
                        <h2>Our Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur earum harum molestiae nam placeat quas sunt suscipit temporibus voluptate voluptatum?</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page;
