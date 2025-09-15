
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, User, Calendar as CalendarIcon, Search, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchModal } from "./SearchModal";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useDateFilter } from "@/context/DateFilterContext";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { selectedDate, setSelectedDate } = useDateFilter();
  const { user, signOut, loading } = useAuth();

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
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                      "rounded-full",
                      selectedDate && "bg-violet-50 text-violet-600 border-violet-200"
                    )}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    {selectedDate && (
                      <span className="ml-2 text-xs">{format(selectedDate, "MMM dd")}</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="p-3">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setIsCalendarOpen(false);
                      }}
                      initialFocus
                      className="pointer-events-auto"
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                    {selectedDate && (
                      <div className="pt-3 border-t border-slate-200 mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedDate(undefined);
                            setIsCalendarOpen(false);
                          }}
                          className="w-full"
                        >
                          Clear Date
                        </Button>
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
              {!loading && (
                user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <User className="h-4 w-4 mr-2" />
                        {user.email?.split('@')[0]}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={signOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Button variant="outline" size="sm" className="rounded-full" asChild>
                      <Link to="/auth">
                        <User className="h-4 w-4 mr-2" />
                        Sign In
                      </Link>
                    </Button>
                    <Button className="bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full" asChild>
                      <Link to="/auth">Get Started</Link>
                    </Button>
                  </>
                )
              )}
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
                  {!loading && (
                    user ? (
                      <>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <Link to="/profile">
                            <User className="h-4 w-4 mr-2" />
                            Profile
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" onClick={signOut} className="rounded-full">
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <Link to="/auth">
                            <User className="h-4 w-4 mr-2" />
                            Sign In
                          </Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full" asChild>
                          <Link to="/auth">Get Started</Link>
                        </Button>
                      </>
                    )
                  )}
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
