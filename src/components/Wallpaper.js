import { Component } from "react";
import styles from "../css/Wallpaper.module.css"
class Wallpaper extends Component{
    render(){
        let {wallpaperNames, active} = this.props
        return(
            <>
            <div className={styles.WallpaperContainer}>
                <ul className={styles.List}>
                    {wallpaperNames.map((item,index)=>(
                        <li className={styles.Item} style={{ backgroundColor: active === index ? "#3FA1E0" : null }}>{item}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}

export default Wallpaper;