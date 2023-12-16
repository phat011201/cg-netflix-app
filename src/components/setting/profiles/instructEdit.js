import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AVATAR, iconNickname } from "./Images/logoImage";
import "../scss/instruct.scss";

export default function InstructEdit() {
  const [isHover, setIsHover] = useState();
  const [currentBox, setCurrentBox] = useState(1);

  const handleContinue = () => {
    setCurrentBox(currentBox + 1);
  };

  const handleGoBack = () => {
    setCurrentBox(currentBox - 1);
  };

  const handleClose = () => {
    if (currentBox == 1) {
      setCurrentBox(false);
    }
  };

  return (
    <>
      {currentBox === 1 && (
        <div className="box-mainInstruct">
          <div className="align-self">
            <div className="box-instruct">
              <div className="close">
                <button
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                  onClick={handleClose}
                >
                  <FontAwesomeIcon icon={faXmark} />
                  {isHover && <div className="des-close">đóng</div>}
                </button>
              </div>
              <div className="content-instruct">
                <div className="avatar">
                  <img src={AVATAR.src} alt={AVATAR.alt} />
                  <span className="name">Alex</span>
                  <span className="nickname">
                    {iconNickname}
                    <span>SassyCat</span>
                  </span>
                </div>
                <div className="title-nickname">
                  <h1 className="title">Tên của bạn trong trò chơi</h1>
                  <span className="description">
                    Biệt hiệu trong trò chơi sẽ đại diện cho bạn trên Trò chơi
                    Netflix.
                  </span>
                </div>
                <div className="btn-instruct">
                  <button onClick={handleContinue}>Tiếp theo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
