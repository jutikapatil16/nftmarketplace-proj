import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = () => {
  const featureArray = [1, 2, 3];

  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.NFTCard}>
      {featureArray.map((el, i) => (
        <div className={Style.NFTCard_box} key={i + 1}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={images.panda
              }
              alt="NFT images"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>

          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={() => likeNft()}
              >
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                
              </div>
            </div>
          </div>

          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>


                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>

                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >

                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;