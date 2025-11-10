import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import blogPosts from "../data/blogPosts.json";

const BlogGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Sort posts by date (newest first) and paginate
  const postsPerPage = 4;

  // Filter posts based on search query
  const filteredPosts = blogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of blog grid when changing pages
    document
      .getElementById("blog-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStartReading = () => {
    document
      .getElementById("blog-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Welcome to BlogSpace</h2>
            <p className="text-xl mb-6">
              Discover amazing articles about web development, design, and
              technology.
            </p>
            <button
              onClick={handleStartReading}
              className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Reading
            </button>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-8" id="blog-grid">
        {/* Mobile Search Toggle Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="w-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-4 py-3 rounded-lg font-medium hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search Articles
          </button>
        </div>

        {/* Search Bar */}
        <div className={`${showMobileSearch ? "block" : "hidden"} md:block`}>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by title, author, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="text-center mt-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              Found {filteredPosts.length} result
              {filteredPosts.length !== 1 ? "s" : ""} for "{searchQuery}"
              {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
            </p>
          </div>
        )}

        {/* Posts Count */}
        {!searchQuery && (
          <div className="text-center mt-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing {Math.min(postsPerPage, currentPosts.length)} of{" "}
              {filteredPosts.length} articles
              {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
            </p>
          </div>
        )}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredPosts.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <div className="text-neutral-400 dark:text-neutral-500 text-6xl mb-4">
            🔍
          </div>
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            No articles found
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Try searching with different keywords or browse all articles.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* No Posts Message */}
      {filteredPosts.length === 0 && !searchQuery && (
        <div className="text-center py-12">
          <div className="text-neutral-400 dark:text-neutral-500 text-6xl mb-4">
            📝
          </div>
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            No articles available
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Check back later for new content.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center space-y-4">
          {/* Page Info */}
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Page {currentPage} of {totalPages}
          </div>

          {/* Pagination Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 disabled:bg-rose-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
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
              Previous
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((pageNumber, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof pageNumber === "number" && handlePageChange(pageNumber)
                }
                disabled={pageNumber === "..."}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 min-w-[44px] ${
                  pageNumber === currentPage
                    ? "bg-violet-600 text-white shadow-lg"
                    : pageNumber === "..."
                    ? "bg-transparent text-neutral-500 cursor-default"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
              >
                {pageNumber}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
            >
              Next
              <svg
                className="w-4 h-4"
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

          {/* Quick Page Jumper */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-neutral-600 dark:text-neutral-400">
              Go to page:
            </span>
            <select
              value={currentPage}
              onChange={(e) => handlePageChange(Number(e.target.value))}
              className="px-3 py-1 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <option key={page} value={page}>
                    {page}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
