import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//IMPORT ICON

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover,  Profile} from "./index";
import { Button } from "../componentsindex";
import images from "../../img";

const NavBar = () => {
  //----USESTATE COMPONENTS

  //starting state - false
  const [discover, setDiscover] = useState(false);

  const [profile, setProfile] = useState(false);
  

  //text in the button clicked will be matched and accordingly displays the component
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Explore NFTs") {
      setDiscover(true);
      
      setProfile(false);
    } else {
      setDiscover(false);
     
      setProfile(false);
    }
  };



  const openProfile = () => {
    if (!profile) {
      setProfile(true);
    
      setDiscover(false);
    
    } else {
      setProfile(false);
    }
  };



  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.WildCardlogo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}//**** */
            >Explore NFTs</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
              <Discover />
              </div>
            )}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* USER PROFILE */}

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          
        </div>
      </div>

     
    </div>
  );
};

export default NavBar;
