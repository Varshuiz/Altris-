import type { StaticImageData } from "next/image";
import dubaiSkyline from "../../public/images/dubai-skyline.jpg";
import goldBars from "../../public/images/gold-bars.jpg";
import goldVault from "../../public/images/gold-vault.jpg";
import office from "../../public/images/office.jpg";
import pgm from "../../public/images/pgm.jpg";
import silverBars from "../../public/images/silver-bars.jpg";

export type Photo = {
  image: StaticImageData;
  alt: string;
};

export const photos = {
  goldBars: {
    image: goldBars,
    alt: "Allocated gold bars on a dealing desk.",
  },
  dubaiSkyline: {
    image: dubaiSkyline,
    alt: "Dubai skyline in the DMCC district.",
  },
  office: {
    image: office,
    alt: "A principal in the firm's bullion viewing room.",
  },
  goldVault: {
    image: goldVault,
    alt: "Gold bars displayed in a glass case.",
  },
  silverBars: {
    image: silverBars,
    alt: "Rows of wholesale silver bars in a vault.",
  },
  pgm: {
    image: pgm,
    alt: "Platinum and palladium sponge samples on an assay bench.",
  },
} as const satisfies Record<string, Photo>;
