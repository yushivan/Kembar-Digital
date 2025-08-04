interface HeroProps {
  blok: {
    title: string;
    image: {
      filename: string;
      alt: string;
    };
  };
}

export const Hero = (params:HeroProps) => {
    return (
        <div className="w-full h-[50vh] relative">
            <img src={params.blok.image.filename} alt={params.blok.image.alt} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center p-8 text-white">
                <h1 className="text-center text-3xl lg:text-5xl font-source font-bold">{params.blok.title}</h1>
            </div>
        </div>
    );
}