import { Component } from "react";
import styles from "../css/Wheel.module.css";
import { FaFastForward } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import ZingTouch from 'zingtouch';

class Wheel extends Component{
    render(){
        const { menuIndex, forwardMenu, backwardMenu, handlePlayPause, songForward, songBackward, currentWheelColour } = this.props;
        return(
            <>
                <div className={styles.wheelContainer}>
                    <div className={styles.wheel} style={{ backgroundColor: currentWheelColour }}  id="wheel">
                        <div className={styles.btn}  id={styles.menu}>
                            <div onClick={() => backwardMenu(menuIndex)} onTouchStart={() => backwardMenu(menuIndex)}>MENU</div>
                        </div>
                        <div className={styles.btn} id={styles.forward}>
                            <FaFastForward onClick={songForward} onTouchStart={songForward}/>
                        </div>
                        <div className={styles.btn} id={styles.pp}>
                            <FaPlay className={styles.mr} onClick={handlePlayPause} onTouchStart={handlePlayPause} />
                            <FaPause onClick={handlePlayPause} onTouchStart={handlePlayPause} />
                        </div>
                        <div className={styles.btn} id={styles.backward}>
                            <FaFastBackward onClick={songBackward} onTouchStart={songBackward}/>
                        </div>
                        <div className={styles.btn} id={styles.cenBtn} onTouchStart={() => forwardMenu(menuIndex)} onClick={() => forwardMenu(menuIndex)}></div>
                    </div>
                </div>
            </>
        )
    }

    rotateWheel = (e) => {
        const { active } = this.props;
        const angle = e.detail.angle;
        console.log(e.detail.angle);
        if (angle >= 0 && angle <= 90) {
            active(0);
        }
        if (angle >= 91 && angle <= 180) {
            active(3);
        }
        if (angle >= 181 && angle <= 270) {
            active(2);
        }
        if (angle >= 271 && angle <= 360) {
            active(1);
        }
        
        console.log("wheel");
    }

    componentDidMount(){
        const wheel = document.getElementById('wheel');
        const activeregion = ZingTouch.Region(wheel);
        activeregion.bind(wheel, 'rotate', (e) => {
            this.rotateWheel(e);
        })
    }
}

export default Wheel;

