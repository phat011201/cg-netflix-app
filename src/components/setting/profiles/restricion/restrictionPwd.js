import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../scss/restrictions.module.scss";
import { AVATAR_RESTRICTION } from "../../../../assets/images/settings/constantImg";
import RestrictionsRank from "./restrictionRank";

export default function Restrictions() {
  const [restrictionsPwd, setRestrictionsPwd] = useState(true);
  const [restrictionsRank, setRestrictionsRank] = useState(true);
  
  const cx = classNames.bind(styles);

  const handleShowRestrictionRank = () => {
    setRestrictionsPwd(false);
    setRestrictionsRank(false);
  };

  return (
    <>
      {restrictionsPwd && (
        <div className={cx("detail-content-maxWidth")}>
          <div className={cx("title-avatar")}>
            <div className={cx("title")}>
              <h1>Giới hạn xem</h1>
            </div>
            <div className={cx("avatar")}>
              <img src={AVATAR_RESTRICTION} alt="Avatar Profile Restriction" />
            </div>
          </div>
          <div className={cx("checkPwd")}>
            <span className={cx("restriction-password")}>
              Nhập mật khẩu tài khoản để chỉnh sửa Độ tuổi và Giới hạn video cho
              hồ sơ của Username.
            </span>
            <div className={cx("input-checkPwd")}>
              <input className={cx("input")} type="password" />
              <span className={cx("forgetPwd")}>Bạn quên mật khẩu?</span>
            </div>
          </div>
          <div className={cx("btn-restriction")}>
            <button className={cx("next")} onClick={handleShowRestrictionRank}>
              Tiếp tục
            </button>
            <button className={cx("cancel")}>Hủy</button>
          </div>
        </div>
      )}
      {!restrictionsRank && <RestrictionsRank />}
    </>
  );
}
