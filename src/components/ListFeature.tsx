import { FeatureCard } from "./FeatureCard";

export function ListFeature(params: any) {
    return (
        <div className="py-10 px-5 lg:py-15 lg:px-40">
            <p className="font-source font-bold text-2xl lg:text-4xl mb-5 lg:mb-7 w-full lg:w-1/2">
                {params.blok.headline}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-14">
                {params.blok.features?.map((feature: any) => (
                    <FeatureCard key={feature.uuid} feature={feature} />
                ))}
            </div>
        </div>
    );
}
