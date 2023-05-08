export const removeHtmlTags = (rawHtml) => {
  const cleanText = rawHtml.replace(/<[^>]+>/g, "");
  return cleanText;
};

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
