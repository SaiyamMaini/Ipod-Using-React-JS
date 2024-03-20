import { Component } from "react";
import styles from "../css/LockScreen.module.css"
import { FaCar } from "react-icons/fa";
class LockScreen extends Component{
    constructor(){
        super();
        this.state = {
            time: this.getTime()
        }
    }    


    getTime = ()=>{
        const Today = new Date();
        var Time = Today.getHours() + ":" + Today.getMinutes();
        if(Today.getMinutes()<10){
             Time = Today.getHours() + ":0" + Today.getMinutes();
        }
        return Time;
    }

    render(){
        const {time} = this.state;
        return(
            <>
                <div className={styles.Container}>
                    <h6>Press Center Button to Unlock</h6>
                    <div className={styles.time}><h2>{time}</h2></div>
                    <div className={styles.footer}>
                        <div className={styles.left}>
                            <FaCar /> <span>47</span>
                            <div className={styles.loc}>New Delhi</div>
                            <div className={styles.dash}>__________</div>
                        </div>
                        <div className={styles.right}>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LockScreen;