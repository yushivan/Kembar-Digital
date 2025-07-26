import Link from "next/link";
import { AreaCard } from "./AreaCard";

export function ListArea(params:any) {
    return (
        <div className="py-10 px-5 lg:py-15 lg:px-40">
            <p className="font-source font-bold text-2xl lg:text-4xl mb-5 lg:mb-7">{params.blok.headline}</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-8">
                {params.blok.areas?.map((area: any) => (
                    <AreaCard key={area.uuid} area={area} />
                ))}
            </div>
        </div>
    );
}