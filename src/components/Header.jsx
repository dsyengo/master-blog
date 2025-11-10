// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    {
      name: "Categories",
      href: "#",
      current: false,
      dropdown: true,
      items: [
        "React",
        "JavaScript",
        "CSS",
        "Web Development",
        "Design",
        "Tools",
      ],
    },
    { name: "About", href: "/about", current: location.pathname === "/about" },
    {
      name: "Contact",
      href: "/contact",
      current: location.pathname === "/contact",
    },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-800 shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                BlogSpace
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsCategoriesOpen(true)}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      <button
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          isActive(item.href)
                            ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                            : "text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400"
                        }`}
                      >
                        {item.name}
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {isCategoriesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50">
                          {item.items.map((category) => (
                            <Link
                              key={category}
                              to={`/category/${category.toLowerCase()}`}
                              className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                              onClick={() => setIsCategoriesOpen(false)}
                            >
                              {category}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                          : "text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-48 pl-3 pr-10 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-neutral-400"
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

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                // Sun icon for light mode
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Subscribe Button */}
            <button className="hidden md:block bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
              Subscribe
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
                            isCategoriesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Mobile Dropdown */}
                      {isCategoriesOpen && (
                        <div className="ml-4 space-y-1 border-l border-neutral-200 dark:border-neutral-700 pl-4">
                          {item.items.map((category) => (
                            <Link
                              key={category}
                              to={`/category/${category.toLowerCase()}`}
                              className="block px-3 py-2 rounded-md text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                              onClick={() => {
                                setIsCategoriesOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {category}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                          : "text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Search */}
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Subscribe Button */}
              <div className="px-3 py-2">
                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
