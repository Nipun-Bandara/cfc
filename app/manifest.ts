import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CFC",
    short_name: "CFC",
    description: "Structured support for forex prop firm challenge phases.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0d",
    theme_color: "#0b0b0d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
