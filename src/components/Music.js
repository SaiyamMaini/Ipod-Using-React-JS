import { Component } from "react";
import styles from "../css/Music.module.css"

class Music extends Component{
    render(){
        const{music,active}= this.props
        return(
            <>
            <div className={styles.MusicContainer}>
                <h3>Music</h3>
                <ul className={styles.List}>
                    {music.map((item, index)=>(
                        <li key={index} className={styles.Item} style={{ backgroundColor: active === index ? "#3FA1E0" : null }}>{item}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }

}

export default Music;