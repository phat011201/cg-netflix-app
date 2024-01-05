import React from "react";
import classNames from "classnames/bind";
import styles from "../../scss/restrictions.module.scss";
import { AVATAR_RESTRICTION } from "../../../../assets/images/settings/constantImg";
import "../../scss/restrictionRank.scss";

export default function RestrictionsRank() {
  const cx = classNames.bind(styles);

  return (
    <>
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
          <div className="box-RankAge">
            <h2 className="title-rank">
              Xếp hạng độ tuổi hồ sơ cho Main Profile
            </h2>
            <div className="options-age">
              <div className="content-age">
                <p className="detail-content-age">
                  Hiển thị phim và chương trình dành cho mọi độ tuổi cho hồ sơ
                  này.
                </p>
              </div>
              <div className="box-detail-content-age">
                <div className="content-restrictions-input-item">
                  <div className="content-restrictions-input">
                    <div className="content-restrictions-radio">
                      <input
                        type="radio"
                        id="rating-radio-35"
                        name="rating-radio-35"
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="rating-radio-35"
                    className="content-restrictions-label"
                  >
                    <div className="content-restriction-description">
                      <div>
                        <ul>
                          <li className="pin-rating-item">Tất cả</li>
                        </ul>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="content-restrictions-input-item">
                  <div className="content-restrictions-input">
                    <div className="content-restrictions-radio">
                      <input
                        type="radio"
                        id="rating-radio-42"
                        name="rating-radio-42"
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="rating-radio-42"
                    className="content-restrictions-label"
                  >
                    <div className="content-restriction-description">
                      <div>
                        <ul>
                          <li className="pin-rating-item">7+</li>
                        </ul>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <h2 className="title-children-profile">Hồ sơ trẻ em</h2>
            <div className="experience-children">
              <input
                type="checkbox"
                className="profile-children"
                id="profile-experience"
              />
              <label htmlFor="profile-experience">
                Hiển thị nội dung Trải nghiệm Netflix Trẻ em với các video chỉ
                dành cho trẻ em.
              </label>
            </div>
            <h2 className="title-restrictions">Giới hạn video cho User</h2>
            <p>
              Không hiển thị một số video cụ thể cho hồ sơ này dù Độ tuổi là gì
              đi nữa
            </p>
            <div className="content-restrictions-container">
              <div className="maturity-search">
                <div className="maturity-search-box">
                  <input
                    type="text"
                    name="pin-search"
                    placeholder="Nhập tên phim hoặc chương trình truyền hình"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("btn-restriction")}>
          <button className={cx("next")}>Lưu</button>
          <button className={cx("cancel")}>Hủy</button>
        </div>
      </div>
    </>
  );
}
