import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../scss/manage.module.scss";
import { Link } from "react-router-dom";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "../scss/removeProfile.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export default function ChooseProfile() {
  const navigate = useNavigate();

  const handleManageProfile = () => {
    navigate("/profiles/manage");
  };

  return (
    <>
      <div className={cx("main-box-profile")}>
        <div className={cx("box-profile")}>
          <h1 className={cx("title-profile")}>Ai đang xem?</h1>
          <ul className={cx("choose-profile")}>
            <li className={cx("profile")}>
              <div className={cx("manage-profile")}>
                <a href="#" className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div
                      className={cx("detail-avatar", "choose-profile-browse")}
                    >
                      <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUuLGcQufVfEdvvUAHLQsrM44kkQQ-ySZbbd8FLSC_AX52dznaYP1pR4Y4Pdi3LuX1rFFbTIt1sBxNYBQ3ZSz59Pg3fVgsLLU6H5.png?r=a82" />
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Name Profile</span>
                </a>
              </div>
            </li>
            <li className={cx("profile")}>
              <div className={cx("manage-profile")}>
                <a href="#" className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div
                      className={cx("detail-avatar", "choose-profile-browse")}
                    >
                      <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYmm-ATwKte0yDKZrjQctLqfq-DKbmHaG-b0kw-WCBljB4_seGydhXDwo57rw-bHXCp6_laFFHDZp691qpVaX9HrdhQ7o3kxUb6W.png?r=d73" />
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Name Profile</span>
                </a>
              </div>
            </li>
            <li className={cx("profile")}>
              <div className={cx("manage-profile")}>
                <a href="#" className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div className={cx("detail-avatar")}>
                      <div className={cx("add-profile")}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </div>
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Thêm hồ sơ</span>
                </a>
              </div>
            </li>
          </ul>
          <div className={cx("btn-profile", "btn-chooseProfile-browse")}>
            <Link to="/profiles/manage">Quản lý hồ sơ</Link>
          </div>
        </div>
      </div>
    </>
  );
}
