import { Component } from "react";
import styles from "../css/Screen.module.css"
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";
import UnlockScreen from "./UnlockScreen";
import Music from "./Music";
import Settings from "./Settings"
import Songs from "./Songs";
import Artists from "./Artists";
import Wallpaper from "./Wallpaper";
import WheelColour from "./WheelColor";
import NowPlaying from "./NowPlaying";
import Themes from "./Themes";
import { SiEpicgames } from "react-icons/si";
import { IoIosAlbums } from "react-icons/io";

class Screen extends Component{
    render(){
        const {menu,active , music, menuIndex, settings, songsName, currentSongName ,currentSongImg, currentSong, progress, currentArtist, currentArtistName, currentWallpaper, wallpaperNames, wheelColour, playing, currentIcon, themesItem} = this.props;
        return(
            <>
            <div className={styles.screenContainer} style={{backgroundImage: `url(${currentWallpaper})`}}>
                 <Navbar />
                {(menuIndex === -1) && <LockScreen />}
                {(menuIndex === 0) && <UnlockScreen menu={menu} active={active} currentIcon={currentIcon}/>}
                {(menuIndex === 1) && <NowPlaying playing={playing} currentSongName={currentSongName} currentSongImg={currentSongImg} /> }
                {(menuIndex === 2)&&<Music music={music} active={active}/>}
                {(menuIndex === 3) && (
                 <div style={{ "height": "88%", "width": "100%", "backgroundColor": "white" }}>
                 <h3>Games</h3>
                 <SiEpicgames style={{"fontSize":"5rem", "marginLeft":"30%", "marginTop": "5%"}} />
                </div>
                )}
                {(menuIndex === 4) && <Settings settings={settings} active={active} />} 
                {(menuIndex === 5) && <Songs songsName={songsName} 
                active={active} 
                currentSongName={currentSongName} 
                currentSongImg={currentSongImg} 
                currentSong={currentSong} 
                progress={progress} />}
                {(menuIndex === 6) && <Artists currentArtist={currentArtist} currentArtistName={currentArtistName} />}
                {(menuIndex === 7) && (
                 <div style={{ "height": "88%", "width": "100%", "backgroundColor": "white" }}>
                 <h3>Albums</h3>
                 <IoIosAlbums style={{"fontSize":"5rem", "marginLeft":"30%", "marginTop": "5%"}} />
                </div>
                )}
                {(menuIndex === 8) && <Wallpaper wallpaperNames={wallpaperNames} active={active} />}
                {(menuIndex === 9) && <WheelColour active={active} wheelColour={wheelColour} />}
                {(menuIndex === 10) && <Themes active={active} themesItem={themesItem} />}
            </div>
            </>
        )
    }
}
export default Screen;
