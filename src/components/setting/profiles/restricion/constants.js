import {
  CHOOSE_PROFILE_M,
  CHOOSE_PROFILE_C,
  CHOOSE_PROFILE_U,
} from "../../../../assets/images/settings/constantImg";

const listUser = [
  {
    img: CHOOSE_PROFILE_M,
    username: "Main Profile",
    url: "/browse",
  },
  {
    img: CHOOSE_PROFILE_U,
    username: "User Profile",
    url: "/browse",
  },
  {
    img: CHOOSE_PROFILE_C,
    username: "Children Profile",
    url: "/browse",
  },
];

const listSupports = [
  {
    title: "Âm thanh và phụ đề",
    url: "/",
  },
  {
    title: "Trung tâm trợ giúp",
    url: "/",
  },
  {
    title: "Thẻ quà tặng",
    url: "/",
  },
  {
    title: "Quan hệ với nhà đầu tư",
    url: "/",
  },
  {
    title: "Trung tâm đa phương tiện",
    url: "/",
  },
  {
    title: "Việc làm",
    url: "/",
  },
  {
    title: "Tùy chọn cookie",
    url: "/",
  },
  {
    title: "Điều khoản sử dụng",
    url: "/",
  },
  {
    title: "Tuyên bố về quyền riêng tư",
    url: "/",
  },
];

const listManagement = [
  {
    title: "Quản lý hồ sơ",
    url: "/profiles/manage",
  },
  {
    title: "Chuyển hồ sơ",
    url: "/",
  },
  {
    title: "Tài khoản",
    url: "/",
  },
  {
    title: "Trung tâm trợ giúp",
    url: "/",
  },
];

export { listSupports, listUser, listManagement };
