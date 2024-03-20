import { Component } from "react";
import styles from "../css/Artists.module.css"
class Artists extends Component{
    render(){
        const {currentArtist, currentArtistName} = this.props
        return(
            <>
            <div className={styles.ArtistContainer}>
                <div className={styles.ss}>
                    <img src={currentArtist}></img>
                </div>
                <h5>{currentArtistName}</h5>
            </div>
            </>
        )
    }
}

export default Artists;