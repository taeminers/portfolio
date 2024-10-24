export type MediumPostResponse = {
  feed: Feed;
  items: SingleBlogPost[];
  status: string;
};

export type Feed = {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
};

export type SingleBlogPost = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};
