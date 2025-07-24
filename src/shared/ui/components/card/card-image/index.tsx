interface CardImageProps {
  src: string;
  alt?: string;
}

export const CardImage = ({ src, alt = "" }: CardImageProps) => (
  <img
    className="w-full object-cover bg-no-repeat bg-center bg-contain min-h-[170px] max-h-[290px]"
    src={src}
    alt={alt}
  />
);
