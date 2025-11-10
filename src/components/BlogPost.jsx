// src/components/BlogPost.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Post not found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-6 hover:gap-2 transition-all duration-200 group"
      >
        <svg
          className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Articles
      </button>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-neutral-500 dark:text-neutral-400 text-sm">
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8 rounded-2xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-neutral-800 dark:prose-headings:text-neutral-100 prose-p:text-neutral-600 dark:prose-p:text-neutral-300 prose-a:text-primary-600 dark:prose-a:text-primary-400">
        {post.content.split("\n").map((paragraph, index) => {
          if (paragraph.startsWith("# ")) {
            return (
              <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                {paragraph.replace("# ", "")}
              </h1>
            );
          } else if (paragraph.startsWith("## ")) {
            return (
              <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                {paragraph.replace("## ", "")}
              </h2>
            );
          } else if (paragraph.startsWith("### ")) {
            return (
              <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                {paragraph.replace("### ", "")}
              </h3>
            );
          } else if (paragraph.startsWith("```")) {
            return (
              <div
                key={index}
                className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg my-4 font-mono text-sm"
              ></div>
            );
          } else if (paragraph.trim() === "") {
            return <br key={index} />;
          } else {
            return (
              <p key={index} className="mb-4 leading-7">
                {paragraph}
              </p>
            );
          }
        })}
      </article>

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
              Enjoyed this article?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Share it with your friends!
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Twitter
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200">
              LinkedIn
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200">
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
