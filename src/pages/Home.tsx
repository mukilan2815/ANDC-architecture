import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Users,
  Trophy,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0118]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/40 rounded-full mb-8">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">
                Annual NASA Design Competition 2024-2025
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text mb-8 leading-tight">
              Inauguration Ceremony
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Join us for an extraordinary celebration as we inaugurate the
              Families for Children's Park, marking a new chapter in
              architectural excellence.
            </p>

            <Link
              to="/login"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden shadow-2xl transition-all hover:shadow-purple-500/25"
            >
              Get Your Certificate
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-[#0A0118] via-purple-900/10 to-[#0A0118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20">
                <Trophy className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Special Guest
                </h3>
                <p className="text-gray-300">KALAISELVI RANGASAMY</p>
                <p className="text-purple-400">
                  Families for Children Management
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20">
                <Award className="h-12 w-12 text-pink-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Event Details
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-purple-400 mr-3" />
                    <span>Sunday, 17 November 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-purple-400 mr-3" />
                    <span>11:30 AM to 12:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20">
                <Users className="h-12 w-12 text-indigo-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Location
                </h3>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    107, Vellalore Road, Podanur, Coimbatore-23
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Section */}
      <div className="py-16 bg-[#0A0118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-4 mb-8">
            <img
              src="https://www.nasaindia.co/Uploads/Layout/Logo/2020_10_19_14_58_6_7_logo-nasa.png"
              alt="NASA Logo"
              className="h-16 invert"
            />
            <div className="w-px h-12 bg-purple-500/30"></div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">
                Karpagam Families for Children
              </h3>
              <p className="text-purple-400">
                National Association of Students of NASA Architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
