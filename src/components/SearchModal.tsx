
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchData = [
  { id: 1, title: "Contemporary Dance", type: "class", category: "Dance", instructor: "Sarah Johnson" },
  { id: 2, title: "Vocal Training", type: "class", category: "Singing", instructor: "Marcus Rodriguez" },
  { id: 3, title: "Hip-Hop Dance", type: "class", category: "Dance", instructor: "Jessica Chen" },
  { id: 4, title: "Tennis Coaching", type: "class", category: "Sports", instructor: "David Wilson" },
  { id: 5, title: "Sarah Johnson", type: "instructor", category: "Dance", rating: 4.9 },
  { id: 6, title: "Marcus Rodriguez", type: "instructor", category: "Singing", rating: 4.8 },
  { id: 7, title: "Dance Classes", type: "category", count: "150+ classes" },
  { id: 8, title: "Singing Lessons", type: "category", count: "80+ classes" },
  { id: 9, title: "Sports Training", type: "category", count: "90+ classes" }
];

const recentSearches = ["Contemporary Dance", "Hip-Hop", "Vocal Training", "Tennis"];
const trendingSearches = ["Hip-Hop Dance", "Vocal Training", "Tennis Coaching", "Classical Piano"];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState(searchData);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
    } else {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.instructor && item.instructor.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const getResultLink = (item: any) => {
    switch (item.type) {
      case "class":
        return `/class/${item.id}`;
      case "instructor":
        return `/instructors`;
      case "category":
        return `/classes/${item.category.toLowerCase()}`;
      default:
        return "/classes";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <div className="p-6 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              placeholder="Search classes, instructors, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-slate-300 focus:border-violet-500 focus:ring-violet-500 rounded-xl"
              autoFocus
            />
          </div>
        </div>

        <div className="overflow-y-auto max-h-96 p-6">
          {searchTerm.trim() === "" ? (
            <div className="space-y-6">
              {/* Recent Searches */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <h3 className="font-medium text-slate-700">Recent Searches</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearch(term)}
                      className="rounded-full hover:bg-violet-50"
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                  <h3 className="font-medium text-slate-700">Trending</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearch(term)}
                      className="rounded-full hover:bg-violet-50"
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredResults.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <Search className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                  <p>No results found for "{searchTerm}"</p>
                  <p className="text-sm">Try searching for classes, instructors, or categories</p>
                </div>
              ) : (
                filteredResults.map((item) => (
                  <Link
                    key={item.id}
                    to={getResultLink(item)}
                    onClick={onClose}
                    className="block p-4 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-slate-800">{item.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {item.type}
                          </Badge>
                          <Badge 
                            className="text-xs bg-gradient-to-r from-violet-500 to-aqua-400 text-white"
                          >
                            {item.category}
                          </Badge>
                          {item.instructor && (
                            <span className="text-sm text-slate-500">by {item.instructor}</span>
                          )}
                          {item.rating && (
                            <span className="text-sm text-slate-500">★ {item.rating}</span>
                          )}
                          {item.count && (
                            <span className="text-sm text-slate-500">{item.count}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
