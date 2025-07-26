import Link from "next/link";
import { PropertyCard } from "./PropertyCard";

interface Property {
  _uid: string;
  key: string;
}

export function ListProperty(params:any) {
    return (
        <div className="py-10 px-5 lg:py-15 lg:px-40">
            <p className="font-source font-bold text-2xl lg:text-4xl mb-5 lg:mb-7">{params.blok.headline}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 mb-8 lg:mb-10">
                {params.blok.properties?.map((property:any) => (
                    <PropertyCard key={property.uuid} property={property}/>
                ))}
            </div>
            <div className="">
                <Link href="#" className="bg-[#CC0000] font-medium text-white hover:bg-black px-8 py-3 transition-all duration-300 rounded-full w-fit mx-auto flex items-center">
                    <span>See more real estate</span>
                    <img src="img/arrow.svg" className="h-[13px] ml-2" />
                </Link>
            </div>
        </div>
    );
}