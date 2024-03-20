import { Component } from "react";
import { FaMusic } from "react-icons/fa";
import styles from "../css/NowPlaying.module.css";

class NowPlaying extends Component {
    render() {
        const { playing, currentSongName, currentSongImg } = this.props;
        return (
            <div className={styles.NPContainer}>
                <h3 className={styles.head}>Now Playing</h3>
                {playing ? (
                    <>
                        <div className={styles.Poster}>
                            <img src={currentSongImg} className={styles.image} alt="Poster" />
                        </div>
                        <h6>{currentSongName}</h6>
                    </>
                ) : (
                    <FaMusic className={styles.Icon}/>
                )}
            </div>
        );
    }
}

export default NowPlaying;
