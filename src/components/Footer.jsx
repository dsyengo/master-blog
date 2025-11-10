import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                BlogSpace
              </h3>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Sharing knowledge and insights about web development and design.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["twitter", "github", "linkedin", "instagram"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Categories", path: "#" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              {["React", "JavaScript", "CSS", "Web Development", "Design"].map(
                (category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {category}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-medium border border-blue-600"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              © 2024 BlogSpace. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
