import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Developer",
      bio: "Passionate about creating amazing web experiences and sharing knowledge with the community.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mike Chen",
      role: "Senior Writer & Editor",
      bio: "Loves breaking down complex topics into easy-to-understand articles for developers of all levels.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emma Davis",
      role: "Content Strategist",
      bio: "Focused on creating valuable content that helps developers grow their skills and careers.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#",
      },
    },
  ];

  const stats = [
    { number: "50+", label: "Articles Published" },
    { number: "10k+", label: "Monthly Readers" },
    { number: "15+", label: "Countries Reached" },
    { number: "100%", label: "Open Source" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
          About BlogSpace
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          We're a passionate team of developers and writers dedicated to
          creating high-quality, practical content that helps developers build
          amazing things.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            To democratize web development knowledge by providing free,
            high-quality tutorials, guides, and insights that empower developers
            worldwide to build better software and advance their careers.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700"
          >
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stat.number}
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              BlogSpace started in 2023 when a group of developers realized how
              difficult it was to find reliable, up-to-date information about
              modern web development practices. We were tired of sifting through
              outdated tutorials and conflicting advice.
            </p>
            <p>
              So we decided to create a space where developers could find
              carefully curated, well-researched content that actually works in
              real-world scenarios. Every article is tested, reviewed, and
              maintained to ensure it provides genuine value.
            </p>
            <p>
              Today, we&apos;re proud to serve a growing community of developers
              who trust us to help them solve problems, learn new skills, and
              stay current in this fast-paced industry.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Team collaboration"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 text-center shadow-sm border border-neutral-200 dark:border-neutral-700"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.twitter}
                  className="text-neutral-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={member.social.github}
                  className="text-neutral-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-neutral-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Join Our Community
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6 max-w-2xl mx-auto">
          Stay updated with the latest articles, tutorials, and web development
          insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-primary-neutral-200  px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 "
          >
            Get In Touch
          </Link>
          <Link
            to="/"
            className="border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-lg font-semibold hover:bg-white dark:hover:bg-neutral-300 transition-colors duration-200"
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
