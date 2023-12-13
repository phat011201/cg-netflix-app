import logoImg from "../assets/images/logo-long.png";
import profileImg from "../assets/images/default-profile.jpg";

const logo = {
  src: logoImg,
  alt: "logo",
};

const headTitle = [
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

const profile = {
  name: "networld",
  avatar: profileImg,
};

const TOP_OFFSET = 66;

const API_Link = "https://65790f5ef08799dc80464bf0.mockapi.io/api/v1/";

export { logo, headTitle, TOP_OFFSET, profile, API_Link };
