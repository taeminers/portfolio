type MediumPostResponse = {
  feed: {
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
  };
  items: SingleBlogPost[];
  status: string;
};

type SingleBlogPost = {
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
