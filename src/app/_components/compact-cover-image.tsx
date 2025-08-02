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
    <div className="w-full overflow-hidden rounded-md flex justify-center items-center">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        width={600} // try 400–800 based on your card width
        height={400} // shorter height gives “compact” effect
        className="object-cover rounded-md"
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

export default CompactCoverImage;
