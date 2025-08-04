import { draftMode } from "next/headers";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchHome = async (isPreview: boolean) => {
  const client = getStoryblokApi();
  const res = await client.get("cdn/stories/home", {
    version: isPreview ? "draft" : "published",
    resolve_relations:
      "featured_property.properties,list_property.properties,list_area.areas,list_testimonial.testimonials,list_article.articles,list_feature.features",
  });
  return res.data.story;
};

export default async function Home() {
  const isPreview = (await draftMode()).isEnabled;
  const story = await fetchHome(isPreview);
  console.log("DRAFT MODE:", (await draftMode()).isEnabled);
  console.log("Story slug: home");
  console.log("Story name:", story?.name);

  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
}
