interface Image {
  filename: string;
  alt: string;
}

interface HeroProps {
  blok: {
    title: string;
    image: Image;
  };
}

export const Hero = ({ blok }: HeroProps) => {
  return (
    <div className="w-full h-[50vh] relative">
      <img
        src={blok.image.filename}
        alt={blok.image.alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center p-8 text-white">
        <h1 className="text-center text-3xl lg:text-5xl font-source font-bold">
          {blok.title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;