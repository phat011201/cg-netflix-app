import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../scss/manage.module.scss";
import {
  faPen,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "../scss/removeProfile.scss";

const cx = classNames.bind(styles);

export default function ProfileMain() {
  const [isCheckedNext, setIsCheckedNext] = useState(true);
  const [isCheckedPreview, setIsCheckedPreview] = useState(true);

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
            <h1 className={cx("title-editProfile")}>Chỉnh sửa hồ sơ</h1>
            <div className={cx("content-editProfile")}>
              <div className={cx("img-editProfile")}>
                <img
                  className={cx("position-imgEdit")}
                  src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUuLGcQufVfEdvvUAHLQsrM44kkQQ-ySZbbd8FLSC_AX52dznaYP1pR4Y4Pdi3LuX1rFFbTIt1sBxNYBQ3ZSz59Pg3fVgsLLU6H5.png?r=a82"
                />
                <a href="#">
                  <FontAwesomeIcon
                    className={cx("actionEditAvatar-editProfile")}
                    icon={faPen}
                  />
                </a>
              </div>
              <div className={cx("profile-editParent")}>
                <div className={cx("input-editProfile")}>
                  <input
                    className={cx("name-editProfile", "checkInput-editProfile")}
                    type="text"
                    placeholder="Tên"
                  />
                  <p className={cx("checkName-editProfile")}>
                    Vui lòng nhập tên
                  </p>
                </div>

                <div className={cx("dropdown-editProfile")}>
                  <h2 className={cx("title-editProfile")}>Ngôn ngữ</h2>
                  <select
                    className={cx("select-langue")}
                    id="langue-editProfile"
                  >
                    <option value={"Tiếng Việt"}>Tiếng Việt</option>
                    <option value={"English"}>English</option>
                  </select>
                </div>

                <div className={cx("nickname-editProfile")}>
                  <h2 className={cx("title-editProfile")}>
                    Biệt hiệu trong trò chơi:
                  </h2>
                  <p className={cx("content-nickname")}>
                    Biệt hiệu của bạn là một cái tên đặc biệt, sẽ được sử dụng
                    để chơi cùng các thành viên Netflix khác xuyên suốt các trò
                    chơi Netflix.
                  </p>
                  <button
                    className={cx("findOutMore-editProfile")}
                  >
                    Tìm hiểu thêm
                  </button>
                  <div className={cx("createNickName-editProfile")}>
                    <input
                      className={cx(
                        "createNickNameInput",
                        "checkInput-editProfile"
                      )}
                      type="text"
                      placeholder="Tạo biệt hiệu trong trò chơi"
                    />
                    <div className={cx("checkCreateNickName")}>
                      <p className={cx("checkTool")}>
                        <FontAwesomeIcon icon={faTriangleExclamation} />
                        <span className={cx("warning-icon")}>
                          Phải dài hơn 2 ký tự
                        </span>
                      </p>
                      <p className={cx("checkCharacters")}>0/16</p>
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
                      Tự động phát tập tiếp theo của một loạt phim trên tất cả
                      các thiết bị.
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
                      Tự động phát nội dung xem trước trong khi duyệt tìm trên
                      tất cả các thiết bị.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("btn-editUpdate")}>
              <span
                className={cx("btn-saveEditProfile")}
              >
                Lưu
              </span>
              <span
                className={cx("btn-cancelEditProfile")}
              >
                Hủy
              </span>
            </div>
          </div>
        </div>
    </>
  );
}
