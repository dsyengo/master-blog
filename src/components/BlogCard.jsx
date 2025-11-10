import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <article className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-1 border border-neutral-200 dark:border-neutral-700">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-secondary-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {post.title}
        </h3>

        {/* Author Info */}
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>

        {/* Read More Link */}
        <button
          onClick={handleReadMore}
          className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:gap-2 transition-all duration-200 group"
        >
          Read More
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
