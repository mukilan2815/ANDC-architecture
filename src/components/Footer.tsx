import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0118]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <a
                href="tel:8608009014"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                8608009014
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <a
                href="tel:7604874647"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                7604874647
              </a>
            </div>
          </div>

          {/* Company Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
              Karpagam Academy of Higher Education
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          {/* Address */}
          <div className="flex items-start justify-end space-x-3">
            <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
            <p className="text-gray-300 text-right">
              107, Vellalore Road,
              <br />
              Podanur, Coimbatore-23
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-900/50 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold">
              Zarlex Technologies
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
