import Wheel from "./components/wheel";
import Screen from "./components/Screen";
import { Component } from "react";
import styles from "./css/App.module.css";

import song1 from "./songs/song1.mp3";
import song2 from "./songs/song2.mp3";
import song3 from "./songs/song3.mp3";
import song4 from "./songs/song4.mp3"

import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";

import art1 from "./images/art1.jpeg"
import art2 from "./images/art2.png"
import art3 from "./images/art3.png"

import wp1 from "./images/wp1.jpeg"
import wp2 from "./images/wp2.webp"
import wp3 from "./images/wp3.jpeg"

import { GiMusicalNotes } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";

class App extends Component{
  constructor(){
    super();
    this.state={
      menu:[
        {
        NowPlaying:[]
        },
        {
          Music:["All Songs", "Artists", "Albums"]
        },
        {
          Games:[]
        },
        {
          Settings:["Wallpaper", "Wheel Colour" , "Themes"]
        }
      ],
      active: -1,
      menuIndex:-1,
      songIndex: 0,
      songs:[song1, song2, song3, song4],
      currentSong: song1,
      audio: new Audio(song1),
      songsName:["Arjan Vailly(From Animal)", "You and Me", "Cheques", "Yeah Naah"],
      currentSongName: "Arjan Vailly(From Animal)",
      songsImg:[img1, img2, img3, img4],
      currentSongImg: img1,
      playing: false,
      audioProgress: 0,
      artistList:[art1, art2, art3],
      currentArtist: art1,
      artistIndex: 0,
      artistNames:["Sidhu Moosewala", "karan Aujla", "Shubh"],
      currentArtistName: "Sidhu Moosewala",
      wallpaperList: [wp1, wp2, wp3],
      currentWallpaper: wp1,
      wallpaperNames:["Wallpaper 1", "Wallpaper 2", "Wallpaper 3"],
      wheelColour: ["White","Grey", "Black"],
      currentWheelColour: "White",
      icons:[GiMusicalNotes, FaMusic, CgGames, IoSettings],
      themesItem:["Theme 1", "Theme 2", "Theme 3"],
      themes:["#D2D2D2", "#60685B", "#C6ADAC"],
      currentTheme: "#D2D2D2"
    }
  }

  active = (index)=>{
    this.setState({
      active: index
    })
  }


  forwardMenu = (index)=>{
    const {active} = this.state;
    if(this.state.menuIndex === -1){
      this.setState({
        menuIndex: this.state.menuIndex+1
      })
    }
    if(this.state.menuIndex === 0){
    this.setState({
      menuIndex: this.state.active + 1
    })
  }
    if(this.state.menuIndex === 2){
      this.setState({
        menuIndex: this.state.active + 5,
      })
    }
    if(this.state.menuIndex === 4){
      this.setState({
        menuIndex: this.state.active + 8
      })
    }

    if(this.state.menuIndex === 8){
      this.changeWallpaper();
    }

    if(this.state.menuIndex === 9){
      this.changeWheelColor();
    }

    if(this.state.menuIndex === 10){
      this.changeTheme();
    }

  }

  backwardMenu = (index)=>{
    let {menuIndex} = this.state
    if(this.state.menuIndex === -1){
    return;
  }
  if(this.state.menuIndex === 0){
    this.setState({
      menuIndex: this.state.menuIndex - 1
    })
  }
  if(menuIndex === 1 || menuIndex === 2 || menuIndex === 3 || menuIndex === 4){
    this.setState({
      menuIndex:0
    })
  }

  if(menuIndex ===5 || menuIndex === 6 || menuIndex === 7){
    this.setState({
      menuIndex: 2
    })
  }

  if(menuIndex === 8 || menuIndex === 9 || menuIndex === 10){
    this.setState({
      menuIndex: 4
    })
  }
  

  }


  handlePlayPause = ()=>{
    if(this.state.menuIndex !== -1){
    if(this.state.playing){
      this.setState({
        playing: !this.state.playing
      })
      this.state.audio.pause();
    }
    else{
      this.setState({
        playing: !this.state.playing,
        menuIndex: 5
      })
      this.state.audio.play();
      this.state.audio.addEventListener('timeupdate', this.onTimeUpdate);
    }
  }
}

  songForward = () => {

    if (this.state.menuIndex === 6) {
      let { artistList, artistIndex, artistNames } = this.state;
      artistIndex = (artistIndex + 1) % artistList.length; // Increment index and wrap around if needed
      this.setState({
          currentArtist: artistList[artistIndex],
          currentArtistName: artistNames[artistIndex],
          artistIndex: artistIndex
      });
  }
    else{
    // Pause the audio of the current song
    this.state.audio.pause();
  
    this.setState(prevState => {
      let { songs, songIndex, songsName, songsImg, playing, audioProgress } = prevState;
      songIndex = (songIndex + 1) % songs.length;
      const newAudio = new Audio(songs[songIndex]);
      return {
        currentSong: songs[songIndex],
        currentSongName: songsName[songIndex],
        currentSongImg: songsImg[songIndex],
        audio: newAudio,
        songIndex: songIndex,
        playing: true,
        audioProgress: 0
      };
    }, () => {
      // After state has been updated, play the new song
      this.state.audio.play();
      this.state.audio.addEventListener('timeupdate', this.onTimeUpdate);
    });
  }
  };


  songBackward = () => {
    if (this.state.menuIndex === 6) {
        let { artistList, artistIndex, artistNames } = this.state;
        artistIndex = (artistIndex - 1 + artistList.length) % artistList.length; // Decrement index and wrap around if needed
        this.setState({
            currentArtist: artistList[artistIndex],
            currentArtistName: artistNames[artistIndex],
            artistIndex: artistIndex
        });
    } else {
        // Your existing logic for song navigation
        this.state.audio.pause(); // Pause the current song
        const { songs, songIndex, songsName, songsImg, playing, audioProgress } = this.state;
        let newSongIndex = songIndex - 1;
        if (newSongIndex < 0) {
            newSongIndex = songs.length - 1; // Wrap around to the last song if at the beginning
        }
        const newAudio = new Audio(songs[newSongIndex]);
        this.setState({
            currentSong: songs[newSongIndex],
            currentSongName: songsName[newSongIndex],
            currentSongImg: songsImg[newSongIndex],
            audio: newAudio,
            songIndex: newSongIndex,
            playing: true,
            audioProgress: 0
        }, () => {
            this.state.audio.play(); // Play the new song after state update
            this.state.audio.addEventListener('timeupdate', this.onTimeUpdate); // Add event listener for updating progress
        });
    }
};


   // Function to update audio progress
   onTimeUpdate=()=>{
    const currentTime = this.state.audio.currentTime;
    const duration = this.state.audio.duration;
    const progress = (currentTime / duration) * 100;
    console.log('Duration Time:', duration);
    console.log('Current Time:', currentTime);
    this.setState({
        audioProgress: progress
    });
};

changeWallpaper=()=>{
  if(this.state.active === 0){
    this.setState({
      currentWallpaper: this.state.wallpaperList[0]
    })
  }

  if(this.state.active === 1){
    this.setState({
      currentWallpaper: this.state.wallpaperList[1]
    })
  }
  else{
    this.setState({
      currentWallpaper: this.state.wallpaperList[2]
    })
  }
  
}

changeWheelColor = () => {
  if (this.state.active === 0) {
    this.setState({
      currentWheelColour: "White"
    });
  } else if (this.state.active === 1) {
    this.setState({
      currentWheelColour: "Grey"
    });
  } else {
    this.setState({
      currentWheelColour: "Black"
    });
  }
};

changeTheme=()=>{
  if (this.state.active === 0) {
    this.setState({
      currentTheme: "#D2D2D2"
    });
  } else if (this.state.active === 1) {
    this.setState({
      currentTheme: "#60685B"
    });
  } else {
    this.setState({
      currentTheme: "#C6ADAC"
    });
  }
}

  

  render(){
   const {menu,active , menuIndex, songsName, currentSongName, currentSongImg, currentSong , audioProgress, currentArtist, currentArtistName, currentWallpaper, wallpaperNames, currentWheelColour, wheelColour, playing, currentIcon, currentTheme, themesItem}= this.state;
   const {Music} = this.state.menu[1];
   const {Settings} = this.state.menu[3];
   console.log(active);
   console.log(currentSongName)
  return (
    <div className={styles.App} style={{backgroundColor: currentTheme}}>
      <Screen 
          menu={menu} 
          active={active} 
          menuIndex={menuIndex} 
          music={Music} 
          settings={Settings} 
          songsName={songsName} 
          currentSongName={currentSongName}
          currentSongImg={currentSongImg}
          currentSong={currentSong}
          progress = {audioProgress}
          currentArtist={currentArtist}
          currentArtistName={currentArtistName}
          currentWallpaper={currentWallpaper}
          wallpaperNames={wallpaperNames}
          wheelColour={wheelColour}
          playing={playing}
          currentIcon={currentIcon}
          themesItem={themesItem}
          />
      <Wheel active={this.active} 
      menuIndex={menuIndex} 
      forwardMenu={this.forwardMenu} 
      backwardMenu={this.backwardMenu} 
      handlePlayPause={this.handlePlayPause} 
      songForward={this.songForward} 
      songBackward={this.songBackward}
      currentWheelColour={currentWheelColour}
      />
    </div>
  );
}
}

export default App;
