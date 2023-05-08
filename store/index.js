import { removeHtmlTags, slugify } from "~/utils";

export const state = () => {
  return {
    posts: [],
    projects: [
      {
        name: "ngx-dom-navigator",
        desc: "ngx-dom-navigator is a powerful Angular library that enables keyboard navigation through DOM elements. With its intuitive andcustomizable interface, ngx-dom-navigator empowers users to navigate through web pages with ease, providing a seamless experiencefor all users. With the ability to configure key bindings, navigation modes, and other settings, the library can be tailored to the specificneeds of any project. Whether you are building a complex web application or a simple website, ngx-dom-navigator is an essential tool forimproving accessibility and user experience.",
        url: "https://github.com/serhatkaya/ngx-dom-navigator",
        thumbnail:
          "https://cdn-images-1.medium.com/max/1024/1*g80Rn8VRgy7Zkbiem5xAZw.png",
      },
      {
        name: "CandieConverter",
        desc: "CandieConverter is an image conversion application that allows users to quickly and easily convert images to a variety of formats. With asimple and user-friendly interface, users can easily select their desired input and output formats, and the app will handle the rest.Whether you need to convert a single image or multiple images at once, CandieConverter is a reliable and efficient solution.",
        url: "https://github.com/serhatkaya/CandieConverter",
        thumbnail:
          "https://github.com/serhatkaya/CandieConverter/blob/master/docs/preview.png?raw=true",
      },
      {
        name: "packaide",
        desc: "packaide is a versatile CLI tool that allows you to package your files quickly and easily. With its user-friendly interface and customizableconfiguration options, packaide is the perfect tool for developers who need to package their source code or upload files to a host. Simplydefine your files in the configuration file, and packaide will handle the rest, creating a compressed archive file that can be easily shared oruploaded to a remote server. Whether you are working on a small project or a large-scale application, packaide is a reliable and efficientsolution for packaging and uploading your files.",
        url: "https://github.com/serhatkaya/packaide",
        thumbnail:
          "https://user-images.githubusercontent.com/59228830/184989231-3732cefe-9d21-4184-999c-1b9fdb925a86.png",
      },
    ],
  };
};

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  nuxtServerInit({ commit, context }, { $axios }) {
    return $axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${this.$config.mediumUserId}`
      )
      .then((rss) => {
        const data = rss.data;
        commit(
          "setPosts",
          data.items.map((item) => ({
            ...item,
            slug: slugify(item.title),
            shortDesc: `${removeHtmlTags(item.content).substr(0, 100)}...`,
          }))
        );
      });
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  },
};

export const getters = {
  posts(state) {
    return state.posts;
  },
  projects(state) {
    return state.projects;
  },
};
