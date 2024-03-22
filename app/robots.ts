import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const location = process.env.URL_ORIGIN;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: location + "/sitemap.xml",
  };
}
