import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../scss/manage.module.scss";
import {
  faPen,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "../scss/removeProfile.scss";
import { Link, useNavigate } from "react-router-dom";
import { CHOOSE_PROFILE_M } from "../../../assets/images/settings/constantImg";
import ShowListEdit from "./showListEdit";
import AvatarEdit from "./avatar/avatarEdit";
import ModalProfile from "./modalProfile";
import Header from "./headerProfile";

const cx = classNames.bind(styles);

export default function ProfileMain() {
  const [isCheckedNext, setIsCheckedNext] = useState(true);
  const [isCheckedPreview, setIsCheckedPreview] = useState(true);
  const [componentProfile, setComponentProfile] = useState("");
  const [stateModal, setStateModal] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [inputValueNickname, setInputValueNickname] = useState("");
  const [isValidNickname, setIsValidNickname] = useState(true);
  const [isCount, setIsCount] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 16;
  const navigate = useNavigate();

  const changeProfile = (type) => {
    setComponentProfile(type);
  };

  let currentComponent;
  if (componentProfile === "backShowListEdit") {
    currentComponent = <ShowListEdit />;
  } else if (componentProfile === "goToAvatarEdit") {
    currentComponent = <AvatarEdit />;
  }

  const openModal = (Id) => {
    setStateModal(Id);
  };

  const closeModal = () => {
    setStateModal(null);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(value.trim() !== "");
  };

  const handleInputChangeNickname = (e) => {
    const value = e.target.value;

    if (value.length <= maxChars) {
      setInputValueNickname(value);
      setIsValidNickname(value.trim() !== "");
      setCharCount(value.length);
    }
  };

  const handleClickCount = () => {
    setIsCount(true);
  };

  // Xử lý checkBox
  const checkNext = cx("marker-checkAuto-next", { checkedNext: isCheckedNext });
  const checkPreview = cx("marker-checkAuto-preview", {
    checkedPreview: isCheckedPreview,
  });

  const handleCheckboxChangeNext = () => {
    setIsCheckedNext((prevChecked) => !prevChecked);
  };

  const handleCheckboxChangePreview = () => {
    setIsCheckedPreview((prevCheckedPrw) => !prevCheckedPrw);
  };

  return (
    <>
      {/* Profile Edit main */}
      <div className={cx("box-mainEditProfile")}>
        <div className={cx("box-actionEditProfile")}>
          <Header />
          <h1 className={cx("title-editProfile")}>Chỉnh sửa hồ sơ</h1>
          <div className={cx("content-editProfile")}>
            <div className={cx("img-editProfile")}>
              <img
                className={cx("position-imgEdit")}
                src={CHOOSE_PROFILE_M}
                alt="Img Profile Main"
              />
              <Link onClick={() => changeProfile("goToAvatarEdit")}>
                <FontAwesomeIcon
                  className={cx("actionEditAvatar-editProfile")}
                  icon={faPen}
                />
              </Link>
            </div>
            <div className={cx("profile-editParent")}>
              <div className={cx("input-editProfile")}>
                <input
                  className={cx("name-editProfile")}
                  type="text"
                  placeholder="Tên"
                  value={inputValue}
                  style={{ borderColor: isValid ? "" : "red" }}
                  onChange={handleInputChange}
                />
                {!isValid && (
                  <p className={cx("checkName-editProfile")}>
                    Vui lòng nhập tên
                  </p>
                )}
              </div>

              <div className={cx("dropdown-editProfile")}>
                <h2 className={cx("title-editProfile")}>Ngôn ngữ</h2>
                <select className={cx("select-langue")} id="langue-editProfile">
                  <option value={"Tiếng Việt"}>Tiếng Việt</option>
                  <option value={"English"}>English</option>
                </select>
              </div>

              <div className={cx("nickname-editProfile")}>
                <h2 className={cx("title-editProfile")}>
                  Biệt hiệu trong trò chơi:
                </h2>
                <p className={cx("content-nickname")}>
                  Biệt hiệu của bạn là một cái tên đặc biệt, sẽ được sử dụng để
                  chơi cùng các thành viên Netflix khác xuyên suốt các trò chơi
                  Netflix.
                </p>
                <button
                  className={cx("findOutMore-editProfile")}
                  onClick={() => openModal(1)}
                >
                  Tìm hiểu thêm
                </button>
                <div className={cx("createNickName-editProfile")}>
                  <input
                    className={cx("createNickNameInput")}
                    type="text"
                    placeholder="Tạo biệt hiệu trong trò chơi"
                    value={inputValueNickname}
                    style={{ borderColor: isValidNickname ? "" : "red" }}
                    onChange={handleInputChangeNickname}
                    onClick={handleClickCount}
                  />
                  <div className={cx("checkCreateNickName")}>
                    {!isValidNickname && (
                      <p className={cx("checkTool")}>
                        <FontAwesomeIcon icon={faTriangleExclamation} />
                        <span className={cx("warning-icon")}>
                          Phải dài hơn 2 ký tự
                        </span>
                      </p>
                    )}
                    <p
                      className={cx("checkCharacters")}
                      style={{ opacity: isCount ? "1" : "0" }}
                    >
                      {charCount}/{maxChars}
                    </p>
                  </div>
                </div>
              </div>

              <div className={cx("settingAge-editProfile")}>
                <h2 className={cx("title-editProfile")}>Cài đặt độ tuổi:</h2>
                <button className={cx("allAge")}>Mọi độ tuổi</button>
                <p className={cx("display")}>
                  Hiển thị phim và chương trình ở <b>mọi độ tuổi</b> cho hồ sơ
                  này.
                </p>
                <button
                  className={cx("btn-settingEditAge")}
                  onClick={() => navigate("/settings/restrictions")}
                >
                  Chỉnh sửa
                </button>
              </div>

              <div className={cx("autoPlay-editProfile")}>
                <h2 className={cx("title-editProfile")}>
                  Điều chỉnh tự động phát
                </h2>

                <div className={cx("marker-next")}>
                  <span
                    className={checkNext}
                    onClick={handleCheckboxChangeNext}
                  ></span>
                  <span
                    className={cx("content-autoPlay-next")}
                    onClick={handleCheckboxChangeNext}
                  >
                    Tự động phát tập tiếp theo của một loạt phim trên tất cả các
                    thiết bị.
                  </span>
                </div>

                <div className={cx("marker-preview")}>
                  <span
                    className={checkPreview}
                    onClick={handleCheckboxChangePreview}
                  ></span>
                  <span
                    className={cx("content-autoPlay-preview")}
                    onClick={handleCheckboxChangePreview}
                  >
                    Tự động phát nội dung xem trước trong khi duyệt tìm trên tất
                    cả các thiết bị.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("btn-editUpdate")}>
            <span
              className={cx("btn-saveEditProfile")}
              onClick={() => changeProfile("backShowListEdit")}
            >
              Lưu
            </span>
            <span
              className={cx("btn-cancelEditProfile")}
              onClick={() => changeProfile("backShowListEdit")}
            >
              Hủy
            </span>
          </div>
        </div>
      </div>
      {stateModal === 1 && (
        <ModalProfile isOpen={stateModal} onClose={closeModal} />
      )}
      {currentComponent}
    </>
  );
}
