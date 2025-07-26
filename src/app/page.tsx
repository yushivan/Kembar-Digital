import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const fetchHome = async () => {
  const client = getStoryblokApi();
  const res = await client.get('cdn/stories/home', {
    version: 'draft',
    resolve_relations: 'featured_property.properties,list_property.properties,list_area.areas,list_testimonial.testimonials,list_article.articles,list_feature.features', 
  });
  return res.data.story;
};

export default async function Home() {
  const story = await fetchHome();
  console.log(story);

  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
}
