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
      {
        name: "terminal-portfolio",
        desc: `Introducing the macOS Themed Terminal Portfolio: an elegant and functional showcase for your skills and projects. With a draggable terminal, animated dock, and available commands, it offers a seamless and interactive experience. Built using jQuery, jQuery UI, and Bootstrap for a responsive design. Present your work with style and sophistication.`,
        url: "https://github.com/serhatkaya/terminal-portfolio",
        thumbnail:
          "https://github.com/serhatkaya/terminal-portfolio/raw/master/docs/terminal-port.png?raw=true",
      },
      {
        name: "Checklist",
        desc: "A checklist application built with Angular and .NET Core. This powerful tool enables you to manage checklists, tags, and categories seamlessly. With a secure API and authentication, stay organized and keep track of your tasks effectively. Simplify your task management process with this efficient Angular and .NET Core application.",
        url: "https://github.com/serhatkaya/checklist",
        thumbnail:
          "https://github.com/serhatkaya/checklist/assets/59228830/5cd35f1f-e897-4a76-a1ac-cf369d7bb4ac",
      },
      {
        name: "UYAP Bulk File Downloader",
        thumbnail:
          "https://lh3.googleusercontent.com/k1byu6_ChZdQLBPJ6B5G62SUoVPzqQxa-bD69tSKnuh7i4cQPk_sQR4pJS8axTI_8IyTApdgW1SpvsJKgmh1PQAd=w640-h400-e365-rj-sc0x00ffffff",
        url: "https://chrome.google.com/webstore/detail/uyap-toplu-dosya-i%CC%87ndirme/mjmdilnnoalnalgkicimdldkkekjfdpm?hl=tr",
        desc: `UYAP Bulk File Downloader is a convenient tool designed for quickly and easily downloading bulk files related to a selected legal case. Say goodbye to the hassle of downloading individual files one by one.

        This browser extension offers a user-friendly and intuitive interface, eliminating the need for any technical expertise. Simply select your case and effortlessly download all desired files in one go.
        
        The UYAP Bulk File Downloader plugin provides a time-saving solution for lawyers, legal assistants, and anyone using the UYAP system. It streamlines the file retrieval process, allowing you to focus on your legal work efficiently.`,
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
