interface CardImageProps {
  src: string;
  alt?: string;
}

export const CardImage = ({ src, alt = "" }: CardImageProps) => (
  <img
    className="w-full flex-1 object-cover bg-no-repeat bg-center bg-contain min-h-[170px]"
    src={src}
    alt={alt}
  />
);
