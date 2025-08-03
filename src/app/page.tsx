import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  // Find featured post first, fallback to latest post
  const heroPost = allPosts.find(post => post.featured) || allPosts[0];
  const morePosts = allPosts.filter(post => post.slug !== heroPost?.slug);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost?.title ?? ""}
          coverImage={heroPost?.coverImage ?? ""}
          date={heroPost?.date ?? ""}
          author={heroPost?.author ?? { name: "", picture: "" }}
          slug={heroPost?.slug ?? ""}
          excerpt={heroPost?.excerpt ?? ""}
          featured={heroPost?.featured ?? false}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
