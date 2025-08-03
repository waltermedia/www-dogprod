import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CompactCoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <AspectRatio ratio={16 / 9} className="w-full">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        sizes="100vw"
        className="object-cover rounded-lg"
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

export default CompactCoverImage;
