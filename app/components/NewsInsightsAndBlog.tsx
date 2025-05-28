import BlogCardList from "@/components/blog/BlogCardList";
import React from "react";

const NewsInsightsAndBlog = () => {
  return (
    <div className="flex flex-col gap-12 py-12">
      <div className="flex flex-col gap-7">
        <p className="font-medium text-base leading-4 text-center bg-[#FAFAFA] text-[#8E9BAE] rounded-[30px] py-2 px-6 w-fit">
          Blog
        </p>

        <div className="flex flex-col gap-7">
          <p className="text-[#2F2F2F] font-cocon text-[50px] leading-[55px] font-medium">
            News Insights & Blog
          </p>
          <p className="text-base leading-7 text-[#55534E]">
            Latest community tips for you
          </p>
        </div>
      </div>
      <BlogCardList limit={3}/>
    </div>
  );
};

export default NewsInsightsAndBlog;
