import Link from "next/link"
import { Wrench, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  const toolCategories = [
    { name: "Text Tools", href: "/tools?category=text" },
    { name: "Math Tools", href: "/tools?category=math" },
    { name: "Design Tools", href: "/tools?category=design" },
    { name: "Developer Tools", href: "/tools?category=developer" },
    { name: "Social Media", href: "/tools?category=social" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-xl">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">All Free Tools</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Free online tools for everyone. No registration required, completely free to use. Make your daily tasks
              easier with our collection of web-based utilities.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Tool Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tool Categories</h3>
            <ul className="space-y-2">
              {toolCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 All Free Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
