import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
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

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <Card className="mb-20 md:mb-28">
        <CardContent className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 p-6">
          <div>
            <CardTitle className="mb-4 text-4xl lg:text-5xl leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </CardTitle>
            <CardDescription className="mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} />
            </CardDescription>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
