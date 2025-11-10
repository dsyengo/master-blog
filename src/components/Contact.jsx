import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      description: "Send us an email anytime",
      value: "hello@blogspace.com",
      link: "mailto:hello@blogspace.com",
    },
    {
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Office",
      description: "Come say hello at our office",
      value: "123 Tech Street, San Francisco, CA 94103",
      link: "#",
    },
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      description: "Mon to Fri from 9am to 6pm",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Have questions, suggestions, or want to collaborate? We'd love to hear
          from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
            Contact Information
          </h2>
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {method.description}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {["twitter", "github", "linkedin", "instagram"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 bg-white dark:bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-200"
                  >
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
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Send Message
              </button>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "How often do you publish new articles?",
              answer:
                "We publish new articles weekly, typically every Tuesday and Thursday.",
            },
            {
              question: "Can I contribute to BlogSpace?",
              answer:
                "Yes! We welcome guest contributors. Please reach out through our contact form with your ideas.",
            },
            {
              question: "Do you offer technical support?",
              answer:
                "While we don't offer direct technical support, our community is very active and helpful in the comments section.",
            },
            {
              question: "Can I suggest topics for future articles?",
              answer:
                "Absolutely! We love hearing from our readers about topics they'd like us to cover.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700"
            >
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                {faq.question}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
