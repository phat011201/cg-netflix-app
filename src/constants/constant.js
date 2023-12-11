import logoImg from "../assets/images/logo-long.png";

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


const TOP_OFFSET = 66;

export { logo, headTitle, TOP_OFFSET };
