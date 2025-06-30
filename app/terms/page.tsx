import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - AFT",
  description: "Terms of service for AFT(All Free Tools). Read our terms and conditions for using our free online tools.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using AFT, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily use AFT for personal and commercial purposes. This is the grant
              of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The materials on AFT are provided on an 'as is' basis. AFT makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties including without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall AFT or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on AFT, even if AFT or an authorized representative has been notified orally
              or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Materials</h2>
            <p className="text-gray-700 mb-6">
              The materials appearing on AFT could include technical, typographical, or photographic errors. AFT
              does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Links</h2>
            <p className="text-gray-700 mb-6">
              AFT has not reviewed all of the sites linked to our website and is not responsible for the contents of
              any such linked site. The inclusion of any link does not imply endorsement by AFT of the site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
            <p className="text-gray-700 mb-6">
              AFT may revise these terms of service for its website at any time without notice. By using this
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
              submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at{" "}
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
