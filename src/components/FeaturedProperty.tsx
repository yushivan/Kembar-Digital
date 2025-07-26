import { formatRupiah } from "@/utils/formatter";
import { StoryblokRichText } from "@storyblok/react";
import Link from "next/link";

export function FeaturedProperty(params:any) {
    return (
        <div className="py-10 px-5 lg:py-15 lg:px-40">
            <div className="grid grid-cols-2 gap-5 lg:gap-10 items-center">
                <div className="col-span-2 lg:col-span-1">
                    <div className="aspect-[16/9]">
                        <img src={params.blok.properties.content.images.filename} alt={params.blok.properties.content.images.alt} className="w-full h-full object-cover rounded-xl" />
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1 lg:pr-15">
                    <p className="text-[#CC0000] font-source font-bold text-lg lg:text-xl mb-1">{params.blok.headline}</p>
                    <p className="font-source text-xl lg:text-2xl mb-2">{params.blok.properties.content.name}</p>
                    <p className="text-[#CC0000] font-source font-bold text-3xl lg:text-3xl mb-4">{formatRupiah(params.blok.properties.content.price)}</p>
                    <div className="mb-8">
                        <StoryblokRichText doc={params.blok.properties.content.description}/>
                    </div>
                    <p>
                        <Link href={params.blok.properties.content.cta_link} className="bg-[#1E61D9] text-base lg:text-lg font-medium text-white hover:bg-black px-8 py-3 transition-all duration-300 rounded-full">Explore More</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}