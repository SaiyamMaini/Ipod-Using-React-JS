import { Component } from "react";
import styles from "../css/Navbar.module.css";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

class Navbar extends Component{
    render(){
        return(
            <>
            <div className={styles.navContainer}>
                <div className={styles.left}>Ipod </div>
                <FaApple />
                <div className={styles.right}>
                    <FaWifi className={styles.mr}/>
                    <FaBatteryFull />
                </div>
                </div>
            </>
        )
    }
}

export default Navbar