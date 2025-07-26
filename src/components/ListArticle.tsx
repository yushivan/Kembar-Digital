import { StoryblokRichText } from "@storyblok/react";
import { ArticleCard } from "./ArticleCard";

export function ListArticle(params: any) {
    return (
        <div className="py-10 px-5 lg:py-15 lg:px-40">
            <p className="font-source text-center font-bold text-2xl lg:text-4xl mb-5 lg:mb-7">
                {params.blok.headline}
            </p>
            <p className="mb-7 lg:mb-10 w-full lg:w-1/2 mx-auto text-center text-base lg:text-lg">
                <StoryblokRichText doc={params.blok.content}/>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                {params.blok.articles?.map((article: any) => (
                    <ArticleCard key={article.uuid} article={article} />
                ))}
            </div>
        </div>
    );
}
