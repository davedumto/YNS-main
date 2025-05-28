import { FC } from "react";
import { useRouter } from "next/router"; // Optional for non-Server Component
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BlogCardList from "@/components/blog/BlogCardList";
import { blogCards } from "@/data"; // Ensure this contains all the blog card data
import Image from "next/image";
import BlogNewsletter from "./component/BlogNewsletter";
import {
  Facebook_green,
  Instagram_green,
  Linkedin_green,
  Star4,
  Twitter_green,
} from "@/public/icons";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Slugify utility function
const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Category background color utility
const getCategoryBgColor = (category: string) => {
  const colors: { [key: string]: string } = {
    Education: "bg-[#98BC6D]",
    Courses: "bg-gray-200",
    Company: "bg-red-200",
    Product: "bg-blue-200",
    Ecosystem: "bg-purple-200",
  };
  return colors[category] || "bg-gray-200";
};

// Correcting BlogPostProps with PageProps
type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  // Find the blog post by the slug
  const blogPost = blogCards.find((card) => generateSlug(card.title) === slug);

  if (!blogPost) {
    return (
      <div className="flex flex-col">
        <Navbar />
        <div className="text-center text-xl font-bold">Post not found!</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="px-6 pt-8 pb-20 md:px-16 lg:px-24 flex flex-col gap-9">
        {/* Categories with Back Button */}
        <div className="flex gap-5 flex-wrap">
          {/* Back to Blog Posts Button */}
          <Link href="/blog">
            <button className="text-xs font-medium text-white px-7 py-3 rounded-[31px] bg-[#EF4C0D] hover:bg-[#d63f0a] transition-colors duration-200">
              ← Back to Blog Posts
            </button>
          </Link>
          
          {/* Category Tags */}
          {blogPost.category.map((cat, idx) => (
            <span
              key={idx}
              className={`text-xs font-medium text-black px-7 py-3 rounded-[31px] ${getCategoryBgColor(
                cat
              )}`}
            >
              {cat}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between relative gap-4">
          <h1 className="font-cocon font-medium text-3xl md:text-4xl leading-[45px] lg:text-5xl">
            {blogPost.title}
          </h1>
          <Image
            width={0}
            height={0}
            src={Star4}
            alt="star"
            className="absolute bottom-0 right-0 w-10 md:w-14 lg:min-w-20 animate-spin-slow"
          />
        </div>

        {/* Author and Date */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-y-7 md:items-center">
          <div className="flex gap-x-5">
            {blogPost.author?.image && (
              <Image
                src={blogPost.author.image}
                alt={blogPost.title}
                width={0}
                height={0}
                className="w-12 md:w-16 lg:w-20"
              />
            )}
            <div className="flex flex-col justify-between py-[6px]">
              {blogPost.author?.name && (
                <p className="font-medium text-sm md:text-xl lg:text-2xl">
                  {blogPost.author.name}
                </p>
              )}

              <p className="text-[#EF4C0D] text-xs md:text-base font-normal">
                {blogPost.date}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 text-left md:text-right">
            <p className="text-[#8E9BAE] font-normal text-sm md:text-xl">
              Socials
            </p>
            <div className="flex gap-2.5">
              {/* {blogPost.author?.socials["twitter(X)"] && (
                <Link
                  href={blogPost.author.socials["twitter(X)"]}
                  target="_blank"
                >
                  <Image
                    width={0}
                    height={0}
                    src={Twitter_green}
                    alt="twitter"
                    className="w-10 md:w-12"
                  />
                </Link>
              )} */}
              {blogPost.author?.socials.facebook && (
                <Link href={blogPost.author.socials.facebook} target="_blank">
                  <Image
                    width={0}
                    height={0}
                    src={Facebook_green}
                    alt="facebook"
                    className="w-10 md:w-12"
                  />
                </Link>
              )}
              {blogPost.author?.socials.linkedin && (
                <Link href={blogPost.author.socials.linkedin} target="_blank">
                  <Image
                    width={0}
                    height={0}
                    src={Linkedin_green}
                    alt="linkedin"
                    className="w-10 md:w-12"
                  />
                </Link>
              )}
              {blogPost.author?.socials.instagram && (
                <Link href={blogPost.author.socials.instagram} target="_blank">
                  <Image
                    width={0}
                    height={0}
                    src={Instagram_green}
                    alt="instagram"
                    className="w-10 md:w-12"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main Image and Messenger Icon */}
        <div className="relative">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={0}
            height={0}
            className="w-full object-cover h-auto md:h-[30rem] lg:h-[40rem] rounded-[35px]"
          />
        </div>

        {/* Blog Post Description */}
              <Section>
                        <div>
          <p className="font-manrope text-base leading-8 font-normal text-[#808080]">
            {blogPost.description}
          </p>

          {/* More Content */}
          <div className="flex flex-col gap-y-12 pb-12">
            {blogPost.moreDescription?.map((more, idx) => (
              <div key={idx} className="flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-5">
                  <p className="font-bold text-xl md:text-2xl lg:text-3xl mt-[1em]">
                    {more.title}
                  </p>
                  <p className="font-manrope text-base leading-8 font-normal text-[#808080]">
                    {more.content}
                  </p>
                </div>
                {more.imageContent && (
                  <div className="flex flex-col gap-y-4">
                    {more.imageContent.image && (
                      <Image
                        src={more.imageContent.image}
                        alt={more.title}
                        width={0}
                        height={0}
                        unoptimized
                        className="w-auto rounded-xl lg:h-[40em]"
                      />
                    )}
                    {more.imageContent.alt && (
                      <p className="w-full text-center font-manrope text-base leading-8 font-normal text-[#808080]">
                        {more.imageContent.alt}
                      </p>
                    )}
                  </div>
                )}
                {more.moreContent && (
                  <p className="font-manrope text-base leading-8 font-normal text-[#808080]">
                    {more.moreContent}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
              </Section>

        {/* Newsletter and Blog Card List */}
        <BlogNewsletter />
        <p className="font-cocon text-4xl lg:text-5xl font-medium pt-20">
          Stay Updated
        </p>
        <BlogCardList limit={3} />
      </div>
      <Footer />
    </div>
  );
}