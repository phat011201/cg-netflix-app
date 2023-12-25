import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../scss/manage.module.scss";
import "../scss/removeProfile.scss";
import ShowListEdit from "./showListEdit";
import { IMG_ADD_NEW } from "../../../assets/images/settings/constantImg";

const cx = classNames.bind(styles);

export default function AddNewProfile() {
  const [isCheckedChildren, setIsCheckedChildren] = useState(false);
  const [showListEdit, setShowListEdit] = useState(true);

  const backToShowListEdit = () => {
    setShowListEdit(!showListEdit);
  };

  // handle checkBox
  const checkChildren = cx("profile-kids-marker", {
    checkedChildren: isCheckedChildren,
  });

  const handleCheckboxChangeChildren = () => {
    setIsCheckedChildren((prevCheckedChDr) => !prevCheckedChDr);
  };

  return (
    <>
      {showListEdit ? (
        <div className={cx("main-boxAddProfile")}>
          <div className={cx("box-addProfile")}>
            <h1 className={cx("title-addProfile")}>Thêm hồ sơ</h1>
            <span className={cx("slogan-addProfile")}>
              Thêm hồ sơ cho người xem khác.
            </span>
            <div className={cx("profile-metadata")}>
              <div className={cx("profile-addAvatar")}>
                <img src={IMG_ADD_NEW} alt="Img Add New Profile" />
              </div>
              <div className={cx("profile-inputName")}>
                <input type="text" placeholder="Tên" />
              </div>
              <div className={cx("profile-check")}>
                <input type="checkbox" id="profile-addKids" />
                <label
                  htmlFor="profile-addKids"
                  onClick={handleCheckboxChangeChildren}
                ></label>
                <span
                  className={checkChildren}
                  onClick={handleCheckboxChangeChildren}
                >
                  Trẻ em?
                </span>
                <span className={cx("profile-kids-tooltip")}>
                  Nếu chọn, hồ sơ này sẽ chỉ thấy chương trình truyền hình và
                  phim với xếp hạng độ tuổi từ 12 trở xuống.
                </span>
              </div>
            </div>
            <div className={cx("btn-addProfile")}>
              <span
                className={cx("btn-nextAddProfile")}
                onClick={backToShowListEdit}
              >
                Tiếp tục
              </span>
              <span
                className={cx("btn-cancelAddProfile")}
                onClick={backToShowListEdit}
              >
                Hủy
              </span>
            </div>
          </div>
        </div>
      ) : (
        <ShowListEdit />
      )}
    </>
  );
}
