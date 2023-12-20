import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AVATAR_EDIT, CLASSIC, IMG_TITLE_1 } from "./Images/constantImg";
import Slider from "react-slick";
import ConfirmChangeAvt from "./confirmChangeAvt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/avatarEdit.scss";

export default function AvatarEdit() {
  const [confirmChangeAvt, setConfirmChangeAvt] = useState(false);
  const [slider, setSlider] = useState(null);

  const sliderRef = useRef([]);

  const settings = {
    draggable: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
  };

  const handleNext = (carouselIdx) => {
    if (sliderRef.current[carouselIdx]) {
      sliderRef.current[carouselIdx].slickNext();
    }
  };

  const handlePrev = (carouselIdx) => {
    if (sliderRef.current[carouselIdx]) {
      sliderRef.current[carouselIdx].slickPrev();
    }
  };

  const showModalConfirm = () => {
    if (confirmChangeAvt == false) {
      setConfirmChangeAvt(true);
    } else {
      setConfirmChangeAvt(false);
    }
  };

  return (
    <>
      <div className="box-mainAvatar">
        <div className="box-avatar">
          <div className="header-container"></div>
          <div className="header-bg"></div>
          <div className="header-nav">
            <div className="title">
              <div className="icon">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="title-editProfileAvatar">
                <h1>Chỉnh sửa hồ sơ</h1>
                <h2>Chọn biểu tượng cho hồ sơ.</h2>
              </div>
            </div>
            <div className="avatar">
              <div className="username">
                <h2>User Name</h2>
              </div>
              <div className="avatar-username">
                <img src={AVATAR_EDIT.src} alt={AVATAR_EDIT.alt} />
              </div>
            </div>
          </div>
          <div className="wrapper-list-avatars">
            <div className="box-avatar-container">
              <ul className="list-avatars-themed">
                <li className="detail-list-avatars-themed">
                  <h2>Kinh điển</h2>
                  <div className="list-slider-avatars">
                    {slider !== null && (
                      <span
                        id="icon-left-pre"
                        className="icon-left handle-slide "
                        onClick={() => handlePrev(0)}
                      >
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </span>
                    )}
                    {/* slide */}
                    <div className="slider-avatarsEdit">
                      <div className="slider-img-avatars">
                        <Slider
                          ref={(el) => (sliderRef.current[0] = el)}
                          {...settings}
                        >
                          {CLASSIC.map((data) => (
                            <div
                              className="slide-item"
                              onClick={showModalConfirm}
                            >
                              <div className="slide-pick">
                                <img src={data.src} alt={data.alt} />
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    <span
                      id="icon-left-next"
                      className="icon-right handle-slide icon-next"
                      onClick={() => handleNext(0)}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </div>
                </li>
                <li className="detail-list-avatars-themed">
                  <h2>
                    <img src={IMG_TITLE_1.src} alt={IMG_TITLE_1.alt} />
                  </h2>
                  <div className="list-slider-avatars">
                    {slider === 1 && (
                      <span
                        className="icon-left handle-slide"
                        onClick={() => handlePrev(1)}
                      >
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </span>
                    )}
                    {/* slide */}
                    <div className="slider-avatarsEdit">
                      <div className="slider-img-avatars">
                        <Slider
                          ref={(el) => (sliderRef.current[1] = el)}
                          {...settings}
                        >
                          {CLASSIC.map((data) => (
                            <div
                              className="slide-item"
                              onClick={showModalConfirm}
                            >
                              <div className="slide-pick">
                                <img src={data.src} alt={data.alt} />
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    <span
                      className="icon-right handle-slide"
                      onClick={() => handleNext(1)}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </div>
                </li>
                <li className="detail-list-avatars-themed">
                  <h2>
                    <img src={IMG_TITLE_1.src} alt={IMG_TITLE_1.alt} />
                  </h2>
                  <div className="list-slider-avatars">
                    {slider === 2 && (
                      <span
                        className="icon-left handle-slide"
                        onClick={() => handlePrev(2)}
                      >
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </span>
                    )}
                    {/* slide */}
                    <div className="slider-avatarsEdit">
                      <div className="slider-img-avatars">
                        <Slider
                          ref={(el) => (sliderRef.current[2] = el)}
                          {...settings}
                        >
                          {CLASSIC.map((data) => (
                            <div
                              className="slide-item"
                              onClick={showModalConfirm}
                            >
                              <div className="slide-pick">
                                <img src={data.src} alt={data.alt} />
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    <span
                      className="icon-right handle-slide"
                      onClick={() => handleNext(2)}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {confirmChangeAvt && <ConfirmChangeAvt />}
    </>
  );
}
