import Image, { type StaticImageData } from "next/image";

export function Photo({
  image,
  alt,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  image: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-stone ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
