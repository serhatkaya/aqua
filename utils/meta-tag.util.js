export function titleMeta(prefix, content, prefixPos = false) {
  return [
    {
      property: "og:title",
      hid: "og:title",
      name: "og:title",
      content: prefixPos ? `${prefix} - ${content}` : `${content} - ${prefix}`,
    },
    {
      name: "twitter:title",
      hid: "twitter:title",
      content: prefixPos ? `${prefix} - ${content}` : `${content} - ${prefix}`,
    },
  ];
}

export function imageMeta(url) {
  return [
    {
      hid: "og-image",
      property: "og:image",
      name: "og:image",
      content: url,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: url,
    },
  ];
}

export function descMeta(desc) {
  return [
    {
      hid: "og:description",
      property: "og:description",
      name: "og:description",
      content: desc,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: desc,
    },
    {
      hid: "description",
      name: "description",
      content: desc,
    },
  ];
}
