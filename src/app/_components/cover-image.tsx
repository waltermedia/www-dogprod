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
    <div className="w-full max-h-[300px] rounded-lg flex justify-center items-center">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        width={800}
        height={600}
        sizes="100vw"
        className="object-contain w-full h-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
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
