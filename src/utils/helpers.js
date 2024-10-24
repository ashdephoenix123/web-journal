const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const cta = (type, title, url) => {
  switch (type) {
    case "mail":
      return `mailto:?subject=Check%20this%20article%20on%20WebJournal&body=${title}%0A%0A${domain + url}`;
    case "facebook":
      return `http://www.facebook.com/sharer/sharer.php?u=${domain + url}`;
    case "linkedIn":
      return `https://www.linkedin.com/shareArticle?mini=true&url=${domain + url}`;
    default:
      return "/";
  }
};
