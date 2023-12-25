import React from "react";
import classNames from "classnames/bind";
import styles from "../scss/restrictions.module.scss";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  AVATAR_PROFILE_RESTRICTION,
  AVATAR_RESTRICTION,
  logoImg,
} from "../../../assets/images/settings/constantImg";

export default function Restrictions() {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const handleNavigateManageProfile = () => {
    navigate("/profiles/manage");
  };

  const handleNavigateBrowse = () => {
    navigate("/browse");
  };

  return (
    <>
      <div className={cx("box-mainRestrictions")}>
        <div className={cx("box-restrictions")}>
          <div className={cx("nav-restrictionProfile")}>
            <div className={cx("max-width")}>
              <div className={cx("logo-restrictionProfile")}>{logoImg}</div>
              <div className={cx("avatar-restrictionProfile")}>
                <img
                  src={AVATAR_RESTRICTION}
                  alt="Avatar Profile Restriction"
                />
                <FontAwesomeIcon icon={faCaretDown} />
                <div className={cx("list-profileRestriction")}>
                  <div className={cx("wrapper-lists")}>
                    <ul className={cx("list-profileUsers")}>
                      <li
                        onClick={handleNavigateBrowse}
                        className={cx("listItem-profileUser")}
                      >
                        <img
                          src={AVATAR_PROFILE_RESTRICTION}
                          alt="Avatar profile"
                        />
                        <span>Username</span>
                      </li>
                    </ul>
                    <ul className={cx("list-profileSettings")}>
                      <li
                        onClick={handleNavigateManageProfile}
                        className={cx("listItem-profileSetting")}
                      >
                        <span>Quản lý hồ sơ</span>
                      </li>
                      <li className={cx("listItem-profileSetting")}>
                        <span>Chuyển hồ sơ</span>
                      </li>
                      <li className={cx("listItem-profileSetting")}>
                        <span>Tài khoản</span>
                      </li>
                      <li className={cx("listItem-profileSetting")}>
                        <span>Trung tâm trợ giúp</span>
                      </li>
                    </ul>
                    <div className={cx("checkOut-restrictions")}>
                      <span>Đăng xuất khỏi Netflix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("content-restrictionProfile")}>
            <div className={cx("detail-content-maxwidth")}>
              <div className={cx("title-avatar")}>
                <div className={cx("title")}>
                  <h1>Giới hạn xem</h1>
                </div>
                <div className={cx("avatar")}>
                  <img
                    src={AVATAR_RESTRICTION}
                    alt="Avatar Profile Restriction"
                  />
                </div>
              </div>
              <div className={cx("checkPwd")}>
                <span className={cx("restriction-user")}>
                  Nhập mật khẩu tài khoản để chỉnh sửa Độ tuổi và Giới hạn video
                  cho hồ sơ của Username.
                </span>
                <div className={cx("input-checkPwd")}>
                  <input className={cx("input")} type="password" />
                  <span className={cx("forgetPwd")}>Bạn quên mật khẩu?</span>
                </div>
              </div>
              <div className={cx("btn-restriction")}>
                <button className={cx("next")}>Tiếp tục</button>
                <button className={cx("cancel")}>Hủy</button>
              </div>
            </div>
          </div>

          <div className={cx("question-contactUs-restrictionProfile")}>
            <div className={cx("max-width")}>
              <h1 className={cx("title-question")}>
                Bạn có câu hỏi? Liên hệ với chúng tôi.
              </h1>
              <ul className={cx("link-support")}>
                <li>Âm thanh và phụ đề</li>
                <li>Trung tâm trợ giúp</li>
                <li>Thẻ quà tặng</li>
                <li>Quan hệ với nhà đầu tư</li>
                <li>Trung tâm đa phương tiện</li>
                <li>Việc làm</li>
                <li>Tùy chọn cookie</li>
                <li>Điều khoản sử dụng</li>
                <li>Tuyên bố về quyền riêng tư</li>
              </ul>
              <span className={cx("code-service")}>Mã dịch vụ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
