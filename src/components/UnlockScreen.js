import { Component } from "react";
import styles from "../css/Unlock.module.css";
import { FaChevronRight } from "react-icons/fa";
class UnlockScreen extends Component{
    constructor(){
        super();
        this.state={
            curActive:null
        }
    }

    render(){
        const{menu, active, menuIndex, menuScreen, currentIcon} = this.props;
        
        return(
            <>
            <div className={styles.Container}>
            <h3>IPod App</h3>
            <div className={styles.dp}>
            <ul className={styles.List}>
                {menu.map((item, index)=>
               (
                
               <li key={index} className={styles.Item} style={{ backgroundColor: active === index ? "#3FA1E0" : null }}>
                 {Object.keys(menu[index])} 
                <FaChevronRight  className={styles.right}/>
               </li>
               
               )
                )}
            </ul>
            </div>
            </div>
            </>
        )
    }

    componentDidMount(){
        
    }

}

export default UnlockScreen;