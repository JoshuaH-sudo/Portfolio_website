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
    {
      url: location + "/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: location + "/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: location + "/resume.pdf",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
