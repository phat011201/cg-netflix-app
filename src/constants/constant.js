import { logo } from "../assets/images/index.js";
import profileImg from "../assets/images/default-profile.jpg";

const LOGO = {
  src: logoImg,
  alt: "logo",
};

const HEADTITLE = [
  {
    title: "Trang Chủ",
    path: "/browse",
  },
  {
    title: "Phim T.hình",
    path: "/tvshows",
  },
  {
    title: "Phim",
    path: "/films",
  },
  {
    title: "Mới & Phổ biến",
    path: "/newandpopular",
  },
  {
    title: "Duyệt tìm theo ngôn ngữ",
    path: "/browsebylanguage",
  },
];

const PROFILE = {
  name: "networld",
  avatar: profileImg,
};

const TOP_OFFSET = 66;

const MOVIES_API_URL = "https://cg-netflix-back-end.onrender.com/api/v1/";

export { LOGO, HEADTITLE, TOP_OFFSET, PROFILE, MOVIES_API_URL };
