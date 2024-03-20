import { Component } from "react";
import styles from "../css/Settings.module.css"

class Settings extends Component{
    render(){
        const{settings,active}= this.props
        return(
            <>
            <div className={styles.settingsContainer}>
                <h3>Settings</h3>
                <ul className={styles.List}>
                    {settings.map((item, index)=>(
                        <li key={index} className={styles.Item} style={{ backgroundColor: active === index ? "#3FA1E0" : null }}>{item}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }

}
export default Settings;