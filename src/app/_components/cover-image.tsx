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
    <AspectRatio
      ratio = {16 / 9}
      className = "overflow-hidden rounded-lg min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
    >
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        className={cn("object-cover shadow-sm", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
      />
    </AspectRatio>
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
