import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CompactCoverImage from "./compact-cover-image";
import DateFormatter from "./date-formatter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <Card className="h-full flex flex-col">
      <div className="mb-5">
        <CompactCoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-3xl leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="text-lg">
          <DateFormatter dateString={date} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </CardContent>
    </Card>
  );
}
