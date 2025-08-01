import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { Page } from "@/components/Page";
import { Hero } from "@/components/Hero";
import { FeaturedProperty } from "@/components/FeaturedProperty";
import { ListPartner } from "@/components/ListPartner";
import { ListProperty } from "@/components/ListProperty";
import { ListArea } from "@/components/ListArea";
import { Banner } from "@/components/Banner";
import { ListTestimonial } from "@/components/ListTestimonial";
import { ListArticle } from "@/components/ListArticle";
import { ListFeature } from "@/components/ListFeature";

storyblokInit({
  accessToken: "pWF9YDx1xWCY4yUpOFwimgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    featured_property: FeaturedProperty,
    list_partner: ListPartner,
    list_property: ListProperty,
    list_area: ListArea,
    banner: Banner,
    list_testimonial: ListTestimonial,
    list_article: ListArticle,
    list_feature: ListFeature
  },
  enableFallbackComponent: true,
});

export const metadata: Metadata = {
  title: "Rumah 3D",
  description: "Rumah 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
