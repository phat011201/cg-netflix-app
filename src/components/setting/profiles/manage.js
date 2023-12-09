import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../scss/manage.module.scss";
import { faPen, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function Manage() {
  const [showList, setShowList] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [addProfile, setAddProfile] = useState(false);

  const handleAddNewProfile = () => {
    if (addProfile == false) {
      setAddProfile(true);
    }
  };

  const handleCancelBack = () => {
    if (addProfile) {
      setAddProfile(false);
    }
  };

  return (
    <>
      {(!showList) && (
        <div className={cx("main-box-profile")}>
          <div className={cx("box-profile")}>
            <h1 className={cx("title-profile")}>Quản lý hồ sơ:</h1>
            <ul className={cx("choose-profile")}>
              <li className={cx("profile")}>
                <div className={cx("manage-profile")}>
                  <a className={cx("profile-link")}>
                    <div className={cx("profile-avatar")}>
                      <div className={cx("detail-avatar")}>
                        <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUuLGcQufVfEdvvUAHLQsrM44kkQQ-ySZbbd8FLSC_AX52dznaYP1pR4Y4Pdi3LuX1rFFbTIt1sBxNYBQ3ZSz59Pg3fVgsLLU6H5.png?r=a82" />
                        <div className={cx("edit-profile")}>
                          <FontAwesomeIcon icon={faPen} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("profile-name")}>Name Profile</span>
                  </a>
                </div>
              </li>
              <li className={cx("profile")}>
                <div className={cx("manage-profile")}>
                  <a className={cx("profile-link")}>
                    <div className={cx("profile-avatar")}>
                      <div className={cx("detail-avatar")}>
                        <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUuLGcQufVfEdvvUAHLQsrM44kkQQ-ySZbbd8FLSC_AX52dznaYP1pR4Y4Pdi3LuX1rFFbTIt1sBxNYBQ3ZSz59Pg3fVgsLLU6H5.png?r=a82" />
                        <div className={cx("edit-profile")}>
                          <FontAwesomeIcon icon={faPen} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("profile-name")}>Name Profile</span>
                  </a>
                </div>
              </li>
              <li className={cx("profile")}>
                <div className={cx("manage-profile")}>
                  <a className={cx("profile-link")}>
                    <div className={cx("profile-avatar")}>
                      <div className={cx("detail-avatar")}>
                        <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUuLGcQufVfEdvvUAHLQsrM44kkQQ-ySZbbd8FLSC_AX52dznaYP1pR4Y4Pdi3LuX1rFFbTIt1sBxNYBQ3ZSz59Pg3fVgsLLU6H5.png?r=a82" />
                        <div className={cx("edit-profile")}>
                          <FontAwesomeIcon icon={faPen} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("profile-name")}>Name Profile</span>
                  </a>
                </div>
              </li>
              <li className={cx("profile")}>
                <div className={cx("manage-profile")}>
                  <a className={cx("profile-link")}>
                    <div className={cx("profile-avatar")}>
                      <div className={cx("detail-avatar")}>
                        <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUuLGcQufVfEdvvUAHLQsrM44kkQQ-ySZbbd8FLSC_AX52dznaYP1pR4Y4Pdi3LuX1rFFbTIt1sBxNYBQ3ZSz59Pg3fVgsLLU6H5.png?r=a82" />
                        <div className={cx("edit-profile")}>
                          <FontAwesomeIcon icon={faPen} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("profile-name")}>Name Profile</span>
                  </a>
                </div>
              </li>
              <li className={cx("profile")}>
                <div className={cx("manage-profile")}>
                  <a
                    onClick={handleAddNewProfile}
                    className={cx("profile-link")}
                  >
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
            <div className={cx("btn-profile")}>
              <a href="#">Hoàn tất</a>
            </div>
          </div>
        </div>
      )}

      {/* Thêm hồ sơ */}
      {addProfile && (
        <div className={cx("main-boxAddProfile")}>
          <div className={cx("box-addProfile")}>
            <h1 className={cx("title-addProfile")}>Thêm hồ sơ</h1>
            <span className={cx("slogan-addProfile")}>
              Thêm hồ sơ cho người xem khác.
            </span>
            <div className={cx("profile-metadata")}>
              <div className={cx("profile-addAvatar")}>
                <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZfhNS88u5ao0M3F5X4HRBGCFsqdb2nncDt32YQHoM-1BeLJq93H30hWyleqclSwt1jNGm6l0tkeefKiiCOLLL5gNjpSjS_Xlaij.png?r=bd7" />
              </div>
              <div className={cx("profile-inputName")}>
                <input type="text" placeholder="Tên" />
              </div>
              <div className={cx("profile-check")}>
                <input type="checkbox" id="profile-addKids" />
                <label htmlFor="profile-addKids"></label>
                <span className={cx("profile-kids-marker")}>Trẻ em?</span>
                <span className={cx("profile-kids-tooltip")}>
                  Nếu chọn, hồ sơ này sẽ chỉ thấy chương trình truyền hình và
                  phim với xếp hạng độ tuổi từ 12 trở xuống.
                </span>
              </div>
            </div>
            <div className={cx("btn-addProfile")}>
              <span className={cx("btn-nextAddProfile")}>Tiếp tục</span>
              <span
                onClick={handleCancelBack}
                className={cx("btn-cancelAddProfile")}
              >
                Hủy
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
