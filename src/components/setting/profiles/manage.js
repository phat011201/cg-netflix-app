import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../scss/manage.module.scss";
import {
  faPen,
  faCirclePlus,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import InstructEdit from "./instructEdit";
import Header from "./headerProfile";

const cx = classNames.bind(styles);

export default function Manage() {
  const [showList, setShowList] = useState(false);
  const [addProfile, setAddProfile] = useState(false);
  const [addEditProfile, setAddEditProfile] = useState(false);
  const [editChildrenProfile, setEditChildrenProfile] = useState(false);
  const [instruct, setInstruct] = useState(false);
  const [listItems, setListItems] = useState([]);
  const navigate = useNavigate();

  const handleAddNewProfile = () => {
    if (addProfile == false) {
      setAddProfile(true);
    } else if (addProfile) {
      setAddProfile(false);
    }
  };

  const handleAddEditProfile = () => {
    if (addEditProfile == false) {
      setAddEditProfile(true);
    } else if (addEditProfile) {
      setAddEditProfile(false);
    }
  };

  const handleEditChildrenProfile = () => {
    if (editChildrenProfile == false) {
      setEditChildrenProfile(true);
    } else {
      setEditChildrenProfile(false);
    }
  };

  const navigateSettingRestriction = () => {
    navigate("/settings/restrictions");
  };

  const handleShowInstruct = () => {
    if (instruct == false) {
      setInstruct(true);
    } else {
      setInstruct(false);
    }
  };

  return (
    <>
      {/* Danh sách chỉnh sửa hồ sơ */}
      {!showList && (
        <div className={cx("main-box-profile")}>
          <div className={cx("box-profile")}>
            <h1 className={cx("title-profile")}>Quản lý hồ sơ:</h1>
            <ul className={cx("choose-profile")}>
              <li onClick={handleAddEditProfile} className={cx("profile")}>
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
              <li onClick={handleEditChildrenProfile} className={cx("profile")}>
                <div className={cx("manage-profile")}>
                  <a className={cx("profile-link")}>
                    <div className={cx("profile-avatar")}>
                      <div className={cx("detail-avatar")}>
                        <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYmm-ATwKte0yDKZrjQctLqfq-DKbmHaG-b0kw-WCBljB4_seGydhXDwo57rw-bHXCp6_laFFHDZp691qpVaX9HrdhQ7o3kxUb6W.png?r=d73" />
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
                onClick={handleAddNewProfile}
                className={cx("btn-cancelAddProfile")}
              >
                Hủy
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Chỉnh sửa hồ sơ */}
      {addEditProfile && (
        <div className={cx("box-mainEditProfile")}>
          <Header />
          <div className={cx("box-actionEditProfile")}>
            <h1 className={cx("title-editProfile")}>Chỉnh sửa hồ sơ</h1>
            <div className={cx("content-editProfile")}>
              <div className={cx("img-editProfile")}>
                <img
                  className={cx("position-imgEdit")}
                  src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUuLGcQufVfEdvvUAHLQsrM44kkQQ-ySZbbd8FLSC_AX52dznaYP1pR4Y4Pdi3LuX1rFFbTIt1sBxNYBQ3ZSz59Pg3fVgsLLU6H5.png?r=a82"
                />
                <a>
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
                    onClick={handleShowInstruct}
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
                    onClick={navigateSettingRestriction}
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
                    <input
                      type="checkbox"
                      className={cx("autoPlay-next")}
                      id="checkAuto-next"
                    />
                    <span
                      id="markerCheckNext"
                      className={cx("marker-checkAuto-next")}
                    ></span>
                    <span
                      id="markerCheckNext"
                      className={cx("content-autoPlay-next")}
                    >
                      Tự động phát tập tiếp theo của một loạt phim trên tất cả
                      các thiết bị.
                    </span>
                  </div>
                  <div className={cx("marker-preview")}>
                    <input
                      type="checkbox"
                      className={cx("autoPlay-preview")}
                      id="showMarkerCheckPreview"
                    />
                    <span
                      id="markerCheckPreview"
                      className={cx(
                        "marker-checkAuto-preview",
                        "showIconCheckPreview"
                      )}
                    ></span>
                    <span className={cx("content-autoPlay-preview")}>
                      Tự động phát nội dung xem trước trong khi duyệt tìm trên
                      tất cả các thiết bị.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("btn-editUpdate")}>
              <span
                onClick={handleAddEditProfile}
                className={cx("btn-saveEditProfile")}
              >
                Lưu
              </span>
              <span
                onClick={handleAddEditProfile}
                className={cx("btn-cancelEditProfile")}
              >
                Hủy
              </span>
              <span className={cx("btn-deleteEditProfile")}>Xóa hồ sơ</span>
            </div>
          </div>
        </div>
      )}

      <div className={cx("instruct")}>{instruct && <InstructEdit />}</div>

      {/* Chỉnh sừa hồ sơ trẻ em*/}
      {editChildrenProfile && (
        <div className={cx("box-mainEditProfile")}>
          <div className={cx("header")}></div>
          <div
            className={cx("box-actionEditProfile", "box-childrenEditProfile")}
          >
            <h1 className={cx("title-editProfile")}>Chỉnh sửa hồ sơ</h1>
            <div className={cx("content-editProfile")}>
              <div className={cx("img-editProfile")}>
                <img
                  className={cx("position-imgEdit")}
                  src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYmm-ATwKte0yDKZrjQctLqfq-DKbmHaG-b0kw-WCBljB4_seGydhXDwo57rw-bHXCp6_laFFHDZp691qpVaX9HrdhQ7o3kxUb6W.png?r=d73"
                />
                <a>
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

                <div className={cx("settingAge-editProfile")}>
                  <h2 className={cx("title-editProfile")}>Cài đặt độ tuổi:</h2>
                  <button className={cx("allAge")}>Trẻ em</button>
                  <button className={cx("ageChildren")}>10+</button>
                  <p className={cx("display")}>
                    Chỉ hiển thị các video có mức xếp hạng độ tuổi từ
                    <b>10+ trở xuống</b> cho hồ sơ này.
                  </p>
                  <button
                    onClick={navigateSettingRestriction}
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
                    <input
                      type="checkbox"
                      className={cx("autoPlay-next")}
                      id="checkAuto-next"
                    />
                    <span
                      id="markerCheckNext"
                      className={cx("marker-checkAuto-next")}
                    ></span>
                    <span
                      id="markerCheckNext"
                      className={cx("content-autoPlay-next")}
                    >
                      Tự động phát tập tiếp theo của một loạt phim trên tất cả
                      các thiết bị.
                    </span>
                  </div>
                  <div className={cx("marker-preview")}>
                    <input
                      type="checkbox"
                      className={cx("autoPlay-preview")}
                      id="showMarkerCheckPreview"
                    />
                    <span
                      id="markerCheckPreview"
                      className={cx(
                        "marker-checkAuto-preview",
                        "showIconCheckPreview"
                      )}
                    ></span>
                    <span className={cx("content-autoPlay-preview")}>
                      Tự động phát nội dung xem trước trong khi duyệt tìm trên
                      tất cả các thiết bị.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("btn-editUpdate")}>
              <span
                onClick={handleEditChildrenProfile}
                className={cx("btn-saveEditProfile")}
              >
                Lưu
              </span>
              <span
                onClick={handleEditChildrenProfile}
                className={cx("btn-cancelEditProfile")}
              >
                Hủy
              </span>
              <span className={cx("btn-deleteEditProfile")}>Xóa hồ sơ</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
