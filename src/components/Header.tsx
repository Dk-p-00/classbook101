
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, User, Calendar, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchModal } from "./SearchModal";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-aqua-400"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-aqua-400 bg-clip-text text-transparent">
                ClassBook
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/classes" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                Browse Classes
              </Link>
              <Link to="/instructors" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                Instructors
              </Link>
              <Link to="/community" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                Community
              </Link>
              <Link to="/about" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                About
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                <Link to="/classes" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                  Browse Classes
                </Link>
                <Link to="/instructors" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                  Instructors
                </Link>
                <Link to="/community" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                  Community
                </Link>
                <Link to="/about" className="text-slate-600 hover:text-violet-500 transition-colors font-medium">
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
