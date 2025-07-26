import Link from "next/link";

export function TestimonialCard(params: any) {
    return (
        <div className="shadow-xl border-[1px] border-[#CC0000] rounded-xl p-5 w-full">
            <div className="flex flex-row gap-4 justify-between mb-3">
                <div>
                    <p className='font-medium mb-1 text-lg'>{params.testimonial.content.name}</p>
                    <p className='text-sm'>{params.testimonial.content.job}</p>
                </div>
                <div>
                    <img src="img/icon-quote.svg" className="w-[40px]" />
                </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <img
                        key={i}
                        src={i < params.testimonial.content.rating ? "img/star.svg" : "img/star-outline.svg"}
                        className="w-[15px]"
                        alt="star"
                    />
                ))}
            </div>
            <p className="text-xs mb-3 text-gray-700">
                {params.testimonial.content.review}
            </p>
            <p className="text-xs text-gray-700">
                {new Date(params.testimonial.content.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                })}
            </p>
        </div>
    );
}