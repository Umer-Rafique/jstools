import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Toolify - Get in Touch",
  description:
    "Contact Toolify for support, suggestions, or feedback. We love hearing from our users and are always looking to improve.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, don't
                hesitate to reach out.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@toolify.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">What to Include</h3>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Tool suggestions or feature requests</li>
                    <li>Bug reports or technical issues</li>
                    <li>General feedback or questions</li>
                    <li>Partnership or collaboration inquiries</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Are the tools really free?</h3>
                  <p className="text-gray-600">
                    Yes! All our tools are completely free to use with no hidden costs or premium features.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Do I need to create an account?</h3>
                  <p className="text-gray-600">No registration required. You can start using any tool immediately.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Is my data safe?</h3>
                  <p className="text-gray-600">
                    Yes! All processing happens in your browser. We don't store or transmit your data.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Can I suggest new tools?</h3>
                  <p className="text-gray-600">We love hearing suggestions for new tools from our users.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Do you have an API?</h3>
                  <p className="text-gray-600">
                    Not currently, but we're considering it for the future. Let us know if you're interested!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
