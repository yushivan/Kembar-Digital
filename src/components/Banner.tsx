import { StoryblokRichText } from "@storyblok/react";
import Link from "next/link";

export function Banner(params:any) {
    return (
        <div className="py-10 px-5 lg:py-15 lg:px-40">
            <div className="aspect-[21/9] lg:aspect-[21/6] relative">
                <img src={params.blok.image.filename} alt={params.blok.image.alt} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-[rgba(0,0,0,0.4)] py-4 px-5 lg:py-8 lg:px-15">
                    <div className="border-[1px] border-white w-full h-full flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-base lg:text-3xl text-white mb-3 lg:mb-8">
                                <StoryblokRichText doc={params.blok.headline}/>
                            </div>
                            <p>
                                <Link href={params.blok.cta_link} className="bg-[#1E61D9] font-medium text-white hover:bg-black px-5 py-1 text-xs lg:text-base lg:px-8 lg:py-3 transition-all duration-300 rounded-full">Explore your future home</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-fit py-1 px-4 lg:py-2 lg:px-5 bg-white rounded-tl-full rounded-br-xl">
                    <img src="img/logo.webp" alt="logo" className="w-[60px] lg:w-[150px]" />
                </div>
            </div>
        </div>
    );
}