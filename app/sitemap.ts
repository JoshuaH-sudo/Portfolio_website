import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const location = process.env.URL_ORIGIN;
  return [
    {
      url: location + "/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
