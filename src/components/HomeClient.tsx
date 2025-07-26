'use client';

import { useEffect, useState } from 'react';
import { getStoryblokApi } from '@storyblok/react';
import { Hero } from './Hero';
import { FeaturedProperty } from './FeaturedProperty';
import { ListPartner } from './ListPartner';
import { ListProperty } from './ListProperty';
import { ListArea } from './ListArea';
import { Banner } from './Banner';
import { ListTestimonial } from './ListTestimonial';
import { ListArticle } from './ListArticle';
import { ListFeature } from './ListFeature';

export function HomeClient() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories/home`, {
        version: 'published',
      });
      setData(data.story);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Hero />
      <FeaturedProperty />
      <ListPartner />
      <ListProperty />
      <ListArea />
      <Banner />
      <ListTestimonial />
      <ListArticle />
      <ListFeature />
    </div>
  );
}
