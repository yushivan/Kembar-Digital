import Link from "next/link";

export function ArticleCard(params:any) {
    return (
        <div className="w-full rounded-xl shadow-xl">
            <div className="aspect-[16/9]">
                <img src={params.article.content.image.filename} alt={params.article.content.image.alt} className="w-full h-full object-cover rounded-t-xl" />
            </div>
            <div className="px-5 py-9">
                <p className="mb-3 text-2xl font-bold">{params.article.content.title}</p>
                <p className="text-sm mb-7 text-gray-700">
                    {params.article.content.short_description}
                </p>
                <div className="">
                    <Link href={params.article.slug} className="bg-[#1E61D9] font-medium text-white hover:bg-black text-sm w-full px-5 py-2 transition-all duration-300 rounded-full">Learn More</Link>
                </div>
            </div>
        </div>
    );
}