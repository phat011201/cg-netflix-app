import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../scss/confirmChangeAvt.scss";
import { CHANGE_AVT, CURRENT_AVT } from "./Images/constantImg";

export default function ConfirmChangeAvt() {
  return (
    <>
      <div className="box-mainConfirmChange">
        <div className="box-confirmChange">
          <div className="title">
            <h3>Bạn muốn thay đổi biểu tượng hồ sơ?</h3>
          </div>
          <div className="change-avatar">
            <div className="avatar-current">
              <img src={CURRENT_AVT.src} alt={CURRENT_AVT.alt} />
              <span>Hiện tại</span>
            </div>
            <div className="icon-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="avatar-change">
              <img src={CHANGE_AVT.src} alt={CHANGE_AVT.alt} />
              <span>Mới</span>
            </div>
          </div>
          <div className="btn-ConfirmChange">
            <button className="btn-agree">Đồng ý</button>
            <button className="btn-notYet">Vẫn chưa</button>
          </div>
        </div>
      </div>
    </>
  );
}
