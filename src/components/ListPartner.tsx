export function ListPartner(params:any) {
    return (
        <div className="pt-8 pb-10 px-5 lg:pt-8 lg:pb-15 lg:px-40">
            <div className="flex flex-row flex-wrap justify-center gap-5 lg:gap-7">
                {params.blok.logo_partners?.map((logo:any) => (
                    <img key={logo.id} src={logo.filename} alt={logo.alt} className="h-[30px] lg:h-[50px]"/>
                ))}
            </div>
        </div>
    );
}