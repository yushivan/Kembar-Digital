export function FeatureCard(params:any) {
    return (
        <div className="shadow-xl border-[1px] border-[#CC0000] rounded-xl p-5 lg:p-8 w-full">
            <div className="flex flex-row justify-between gap-5 items-center mb-3">
                <div>
                    <p className='font-bold mb-1 text-lg lg:text-xl'>{params.feature.content.headline}</p>
                </div>
                <div>
                    <img src={params.feature.content.icon.filename} alt={params.feature.content.icon.alt} className="h-[60px] w-auto" />
                </div>
            </div>
            <p className="text-sm text-gray-700">
                {params.feature.content.content}
            </p>
        </div>
    );
}