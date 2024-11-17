import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black/20 backdrop-blur-lg text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Award className="h-10 w-10 text-pink-500" />
            <span className="font-bold text-2xl bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">ANDC</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-lg hover:text-pink-400 transition-colors">Home</Link>
            <Link to="/login" className="px-6 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full text-lg hover:shadow-lg transition-all">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}