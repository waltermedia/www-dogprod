import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        className={cn("object-cover shadow-sm", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
      />
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
