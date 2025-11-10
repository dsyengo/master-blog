import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const categories = [
    { name: "React", count: 12 },
    { name: "JavaScript", count: 8 },
    { name: "CSS", count: 6 },
    { name: "Web Development", count: 15 },
    { name: "Design", count: 7 },
    { name: "Tools", count: 5 },
  ];

  const popularPosts = [
    { title: "Getting Started with Next.js", views: "1.2k" },
    { title: "CSS Grid vs Flexbox", views: "984" },
    { title: "State Management in 2024", views: "756" },
    { title: "Building Accessible Websites", views: "642" },
  ];

  const handleCategoryClick = (category) => {
    // Navigate to category page or filter posts
    console.log("Category clicked:", category);
    // You can implement category filtering here
  };

  const handlePopularPostClick = (post) => {
    // Navigate to popular post
    console.log("Popular post clicked:", post);
    // You can implement navigation to post here
  };

  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
        <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-4">
          Browse Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200 group"
            >
              <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 font-medium">
                {category.name}
              </span>
              <span className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full text-sm font-medium group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
        <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-4">
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <button
              key={index}
              onClick={() => handlePopularPostClick(post)}
              className="flex items-start space-x-3 w-full p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200 group text-left"
            >
              <div className="w-2 h-2 mt-3 bg-blue-500 rounded-full flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200"></div>
              <div className="flex-1 min-w-0">
                <h4 className="text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 font-medium leading-tight">
                  {post.title}
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1.5">
                  {post.views} views
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
