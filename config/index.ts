import * as constants from "@/constants";

const ipfsLink = process.env.ipfsLink;

const defaultTheme = constants.THEME_BY_DEFAULT;
const domain = constants.SITE_DOMAIN;
const blogName = constants.BLOG_NAME;
const blogTitle = constants.BLOG_TITLE;
const ipfs = `${ipfsLink}/${blogName}-image.jpg`;
const lsViewsKey = constants.LS_VIEWS_KEY;
const months = constants.MONTHS;

export const globalConfig = {
  gen: {
    defaultTheme,
    domain,
    blogTitle,
    ipfs,
    lsViewsKey,
    months,
  },
  home: {
    pathname: "/",
    meta: {
      title: blogTitle,
      description:
        "Добро пожаловать в мир Астрая, блог о духовном саморазвитии! Здесь вы найдете вдохновение, практические советы и ресурсы, которые помогут вам на пути к гармонии, радости и саморазвитию. Блог Астрая создан с целью помочь людям искать глубинное понимание себя, своего места в мире и найти путь к росту и развитию своей души. Мы верим, что каждый из нас обладает внутренним потенциалом и способностью к преображению. Астрая поможет раскрыть этот потенциал.",
    },
    content: {
      title: "Блог о духовном саморазвитии",
    },
  },
  articles: {
    pathname: "/articles",
    meta: {
      title: "Cтатьи о тонком мире и духовном саморазвитии",
      description:
        "Cтатьи о тонком мире и духовном саморазвитии. Раскрываем темы жизни и смерти, души и тонкого тела, восприятия реальности и иллюзии. Исследуется: нумерология, эзотерика, тонкие энергии",
    },
    content: { articleList: { label: "Статьи" } },
  },
  details: {
    pathname: "/articles/id",
    meta: {},
    content: {
      today: "Сегодня",
      author: "Автор",
      publication: "Публикация",
      id: { key: "ID", defaultValue: "000" },
    },
  },
  latestArticle: {
    label: "Недавняя публикация",
  },
  topThree: {
    label: "Топ три",
  },
  tagTitle: {
    key: "title",
    h2: { pageTitle: "page_title" },
    h3: {
      cardSmall: "card_small",
      cardMedium: "card_medium",
      artSubtitle: "art_subtitle",
    },
  },
  tagParagraph: {
    key: "paragraph",
    p: { artParagraph: "art_paragraph", artDescription: "art_description" },
  },
};
