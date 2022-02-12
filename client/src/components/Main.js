import React, { useEffect, useState } from 'react';
import  twitterLogo  from '../assets/owner/twitter.png';
import  instagramLogo  from '../assets/owner/instagram.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css';


const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

  return (
      <div className="main">
          <div className="punkHighlight">
                    <img
                        src={activePunk.image_url}
                        alt=""
                        className="selectedPunk"
                    />
            </div>

          <div className="mainContent">
              <div className="punkDetails" style={{color:'#fff'}}>
                  <h1 className="title">{activePunk.name}  <span className="itemNumber">.#{activePunk.token_id}</span></h1>
              </div>
              <div className="owner">
                  <div className="ownerImageContainer">
                      <img src={activePunk.owner.profile_img_url} alt="" />
                  </div>
                  <div className="ownerNameAndHandle">
                    <p>{activePunk.owner.address}</p>
                    <p className="ownerHandle">@oyin_dawodu</p>
                </div>
              </div>
          </div>
          <div className="ownerDetails">
                <div className="ownerLink">
                    <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                    <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                    <img src={moreIcon} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Main