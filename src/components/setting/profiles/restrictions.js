import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../scss/restrictions.module.scss";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Restrictions() {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const handleNavigateManageProfile = () => {
    navigate("/manage-profiles");
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
              <div className={cx("logo-restrictionProfile")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1024"
                  height="276.742"
                  viewBox="0 0 1024 276.742"
                >
                  <path
                    d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
                    fill="#d81f26"
                  />
                </svg>
              </div>
              <div className={cx("avatar-restrictionProfile")}>
                <img
                  src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUDri_Ssyw2XNjs9siC5CqPEQvcqnUvWhIabgK4_r62aJ4qXC0l9N7BwEL34r9bx1OaCMzLCfYneXdacUM8gc94Dq7ePdo8.png?r=e6e"
                  alt="Avatar Profile"
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
                          src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTMiZwRhh5FJfP3aZxAPx3Um3gL-gt38U0Txelj-JIiLvU-9M9i4rjnFRNbpUgCFkZxk_60QwarCVVgnUbHMyp66r7h6dWE.png?r=a82"
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
                    src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUDri_Ssyw2XNjs9siC5CqPEQvcqnUvWhIabgK4_r62aJ4qXC0l9N7BwEL34r9bx1OaCMzLCfYneXdacUM8gc94Dq7ePdo8.png?r=e6e"
                    alt="Avatar Profile"
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
