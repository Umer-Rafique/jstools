import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Toolify",
  description:
    "Privacy policy for Toolify. Learn how we protect your data and privacy when using our free online tools.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 mb-6">
              At Toolify, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your information when you use our website and online tools.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Text and data you input into our tools (processed locally in your browser)</li>
              <li>Contact information when you reach out to us</li>
              <li>Feedback and suggestions you provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Usage statistics and analytics (via Google Analytics)</li>
              <li>Device and browser information</li>
              <li>IP address and location data (anonymized)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>To provide and improve our online tools</li>
              <li>To analyze usage patterns and optimize performance</li>
              <li>To respond to your inquiries and provide support</li>
              <li>To display relevant advertisements (via Google AdSense)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Processing and Storage</h2>
            <p className="text-gray-700 mb-6">
              <strong>Local Processing:</strong> Most of our tools process your data entirely in your browser. This
              means your text, calculations, and other inputs are not sent to our servers or stored anywhere.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>No Account Required:</strong> We don't require you to create accounts or provide personal
              information to use our tools.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Google Analytics:</strong> For website analytics and usage statistics
              </li>
              <li>
                <strong>Google AdSense:</strong> For displaying advertisements
              </li>
              <li>
                <strong>Vercel:</strong> For website hosting and performance
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies to improve your experience on our website. You can control cookie settings through your
              browser preferences. Disabling cookies may affect some functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Access information about how your data is processed</li>
              <li>Request deletion of any personal information we may have</li>
              <li>Opt out of analytics tracking</li>
              <li>Contact us with privacy-related questions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your information. However, no method of transmission
              over the internet is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to children under 13. We do not knowingly collect personal information from
              children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="/contact" className="text-blue-600 hover:text-blue-800">
                our contact page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
