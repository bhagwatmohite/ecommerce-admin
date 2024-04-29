
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Acme Inc</span>
            </div>
            <address className="not-italic text-gray-500 dark:text-gray-400">
              123 Main St.
              <br />
              Anytown, USA 12345
            </address>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <PhoneIcon className="h-4 w-4" />
                (123) 456-7890
              </p>
              <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <MailboxIcon className="h-4 w-4" />
                info@acme.com
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-1">
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Dashboard
                </Link>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Products
                </Link>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Orders
                </Link>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Settings
                </Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Resources</h4>
              <nav className="space-y-1">
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Documentation
                </Link>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Blog
                </Link>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Support
                </Link>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  Community
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-center text-sm text-gray-400 dark:bg-gray-950 dark:text-gray-500">
        © 2024 Acme Inc. All rights reserved.
      </div>
    </footer>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailboxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
