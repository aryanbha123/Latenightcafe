export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-gray-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left Content */}
        <div className="text-sm text-gray-700 max-w-md leading-relaxed text-start md:text-left">
          <p className="font-medium">
            © {new Date().getFullYear()} Late Night Cafe. All rights reserved.
          </p>
          <p className="mt-2">
            Late Night Cafe, Picture Palace, near Madras Cafe, near Wildcraft,  
            The Mall Road, Mussoorie, Uttarakhand 248179
          </p>
        </div>

        {/* Right Contact */}
        <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-700">
          <a href="tel:+919997465749" className="hover:underline">
             Phone: +91 9997465749
          </a>
          <a href="mailto:hello@cafeco.com" className="hover:underline">
             Contact: hello@cafeco.com
          </a>
        </div>

      </div>
    </footer>
  );
}
