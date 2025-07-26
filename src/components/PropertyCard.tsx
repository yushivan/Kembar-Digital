import { formatRupiah } from "@/utils/formatter";
import Link from "next/link";

export function PropertyCard(params: any) {
    return (
        <div className="w-full rounded-xl shadow-xl">
            <div className="aspect-[16/9]">
                <img src={params.property.content.images.filename} alt={params.property.content.images.alt} className="w-full h-full object-cover rounded-t-xl" />
            </div>
            <div className="px-5 py-9">
                <p className="mb-1">{params.property.content.name}</p>
                <p className="font-bold text-2xl text-[#CC0000] mb-5">{formatRupiah(params.property.content.price)}</p>
                <div className="flex flex-row flex-wrap gap-4 text-lg mb-5">
                    <div>{params.property.content.bedroom} Bedroom</div>
                    <div>{params.property.content.bathroom} Bathroom</div>
                    <div>{params.property.content.area_size} m2</div>
                </div>
                <p className="text-sm mb-7">
                    {params.property.content.address}
                </p>
                <div className="flex flex-row justify-between items-center gap-4">
                    <div className="flex flex-row gap-2">
                        <img src={params.property.content.agency_logo.filename} alt={params.property.content.agency_logo.alt} className="h-[50px]" />
                        <div className="">
                            <p className="font-semibold mb-1 text-xs">{params.property.content.agency_name}</p>
                            {params.property.content.agency_verified && (
                                <p>
                                    <span className="bg-[#C9DCFF] px-3 py-1 flex items-center w-fit rounded-full text-xs">
                                        <img src="img/verified.svg" className="w-[15px] mr-1" alt="verified" />
                                        Verified Agency
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <Link href={params.property.content.cta_link} className="bg-[#1E61D9] font-medium text-white hover:bg-black w-full px-4 py-2 transition-all duration-300 rounded-full">Call us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}