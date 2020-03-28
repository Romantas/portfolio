import React from "react";
import Wave from "react-wavify";
import './background.css';
export default class Background extends React.Component {
    render() {
        return (
            <div className='background'>
                <div className="topbackground">
                    <Wave
                        fill='#F2B899'
                        paused={false}
                        options={{
                            height: 50,
                            amplitude: 60,
                            speed: 0.15,
                            points: 3
                        }}
                    />
                </div>
                <div className="bottombackground">
                    <Wave
                        fill='#99D0F2'
                        paused={false}
                        options={{
                            height: 50,
                            amplitude: 60,
                            speed: 0.15,
                            points: 3
                        }}
                    />
                </div>
            </div>
        )
    }
}
