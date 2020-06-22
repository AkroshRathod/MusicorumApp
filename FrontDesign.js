import React from 'react';
import ReactJKMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import musiccover from './Music/Aayat.jpg';
import Aayat from './Music/Aayat.mp3';
import musiccover1 from './Music/Chunar.jpg';
import Chunar from './Music/Chunar.mp3';
import musiccover2 from './Music/Manohari.jpg';
import Manohari from './Music/Manohari.mp3';
import musiccover3 from './Music/MareezEIshq.jpg';
import MareezEIshq from './Music/MareezEIshq.mp3';
import musiccover4 from './Music/Mera Ishq.jpg';
import MeraIshq from './Music/Mera Ishq.mp3';
//import Album from './Album';

function FrontDesign() {

    const audioList = [
        {
            cover:musiccover,
            musicSrc:Aayat,
            name:'Aayat',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover1,
            musicSrc:Chunar,
            name:'Chunar',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover2,
            musicSrc:Manohari,
            name:'Manohari',
            singer:'L V Revant'
        },
        {
            cover:musiccover3,
            musicSrc:MareezEIshq,
            name:'Mareez - E - Ishq',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover4,
            musicSrc:MeraIshq,
            name:'Mera Ishq',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover,
            musicSrc:Aayat,
            name:'Aayat',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover1,
            musicSrc:Chunar,
            name:'Chunar',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover2,
            musicSrc:Manohari,
            name:'Manohari',
            singer:'L V Revant'
        },
        {
            cover:musiccover3,
            musicSrc:MareezEIshq,
            name:'Mareez - E - Ishq',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover,
            musicSrc:Aayat,
            name:'Aayat',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover1,
            musicSrc:Chunar,
            name:'Chunar',
            singer:'Arijit Singh'
        },
        {
            cover:musiccover2,
            musicSrc:Manohari,
            name:'Manohari',
            singer:'L V Revant'
        },
        {
            cover:musiccover3,
            musicSrc:MareezEIshq,
            name:'Mareez - E - Ishq',
            singer:'Arijit Singh'
        }

    ]


    const onBeforeDestroy = (currentPlayId, audioLists, audioInfo) => {
        return new Promise((resolve, reject) => {
          // your custom validate
          if (window.confirm('Are you confirm destroy the player?')) {
            // if resolve, player destroyed
            resolve()
          } else {
            // if reject, skip.
            reject()
          }
        })
      }
       
      const onDestroyed = (currentPlayId, audioLists, audioInfo) => {
        console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
      }
    //   const onAudioListsChange = (currentPlayId,audioLists,audioInfo) => {
    //     console.log('onAudioListsChange:', currentPlayId, audioLists, audioInfo)
    //   }

    const imgMyimage = require('./Images/unnamed.png');
    const divStyle = {
        width: '98vw',
        height: '95vh',
        backgroundImage:`url(${imgMyimage})`,
        //backgroundSize:'cover',
        //backgroundRepeat:'no-repeat'
    };
      
    return (
        <>
        <div className="cComponent" style={divStyle}>
            <ReactJKMusicPlayer showMediaSession 
            audioLists={audioList} 
            autoPlay={false} 
            spaceBar={true} 
            showDestroy
            onBeforeDestroy={onBeforeDestroy}
            onDestroyed={onDestroyed}/>      
        </div>
        </>
    )
}
export default FrontDesign;


  