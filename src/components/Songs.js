import React from "react";
import { Component } from "react";
import styles from "../css/Songs.module.css"

class Songs extends Component {
    
    render() {
        const { songsName, active, currentSongName, currentSongImg, currentSong, progress } = this.props;
        return (
            <>
                <div className={styles.SongContainer}>
                    <h3>Songs</h3>
                    <div className={styles.Poster}>
                        <img src={currentSongImg} className={styles.image} alt="Poster"></img>
                    </div>
                    <h6>{currentSongName}</h6>
                    <div className={styles.ProgressBar}>
                    <div className={styles.Progress} style={{ width: `${progress}%` }}></div>
                </div>
                    {/* <audio id="audio" src={currentSong} ref={this.audioRef} onChange={this.change}></audio> */}
                </div>
            </>
        );
    }
}

export default Songs;
