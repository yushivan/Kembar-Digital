import Link from "next/link";

export function AreaCard(params:any) {
    return (
        <div className="aspect-[4/3] rounded-xl shadow-xl relative">
            <img src={params.area.content.image.filename} alt={params.area.content.image.alt} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] p-5 flex flex-col justify-between text-white rounded-xl">
                <p className="text-xl lg:text-2xl font-semibold">{params.area.content.name}</p>
                <p className="w-fit ml-auto">
                    <Link href={params.area.slug}>
                        <img src="img/arrow-2.svg" className="w-[40px]" />
                    </Link>
                </p>
            </div>
        </div>
    );
}