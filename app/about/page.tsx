import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Toolify - Free Online Tools for Everyone",
  description:
    "Learn about Toolify, our mission to provide free online tools for everyone. No registration required, completely free to use.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Toolify</h1>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Toolify is a collection of free online tools designed to make your daily tasks easier. We believe that
              useful tools should be accessible to everyone, without barriers or costs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Our mission is simple: provide high-quality, easy-to-use online tools that help people be more productive
              and creative. Whether you're a student, professional, content creator, or just someone who needs to get
              things done, our tools are here to help.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Toolify?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>100% Free:</strong> All our tools are completely free to use
              </li>
              <li>
                <strong>No Registration:</strong> Start using tools immediately, no sign-up required
              </li>
              <li>
                <strong>Privacy First:</strong> Your data stays in your browser, we don't store anything
              </li>
              <li>
                <strong>Mobile Friendly:</strong> All tools work perfectly on any device
              </li>
              <li>
                <strong>Fast & Reliable:</strong> Optimized for speed and performance
              </li>
              <li>
                <strong>Regular Updates:</strong> We continuously add new tools and improve existing ones
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Tools</h2>
            <p className="text-gray-700 mb-6">We offer a growing collection of tools across different categories:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Text Tools:</strong> Word Counter, Text to Emoji Converter, Name Styler
              </li>
              <li>
                <strong>Social Media Tools:</strong> Instagram Bio Generator
              </li>
              <li>
                <strong>Math Tools:</strong> Percentage Calculator
              </li>
              <li>
                <strong>Design Tools:</strong> Color Palette Generator
              </li>
              <li>
                <strong>Developer Tools:</strong> Hash Generator, Timestamp Converter
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have a suggestion for a new tool? Found a bug? Want to provide feedback? We'd love to hear from you! Visit
              our{" "}
              <a href="/contact" className="text-blue-600 hover:text-blue-800">
                contact page
              </a>
              to get in touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
