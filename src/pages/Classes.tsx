
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Clock, Users, User } from "lucide-react";
import { Header } from "@/components/Header";
import { ClassCard } from "@/components/ClassCard";
import { useDateFilter } from "@/context/DateFilterContext";
import { format, isSameDay } from "date-fns";

const Classes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const { selectedDate } = useDateFilter();

  const allClasses = [
    {
      id: 1,
      title: "Advanced Vocal Training",
      instructor: "Sarah Johnson",
      type: "Solo",
      rating: 4.9,
      price: 150,
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
      category: "Singing",
      duration: "60 min",
      students: 24,
      date: new Date(2025, 0, 15) // Jan 15, 2025
    },
    {
      id: 2,
      title: "Hip-Hop Choreography",
      instructor: "Mike Chen",
      type: "Group",
      rating: 4.8,
      price: 80,
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=300&fit=crop",
      category: "Dance",
      duration: "90 min",
      students: 15,
      date: new Date(2025, 0, 16) // Jan 16, 2025
    },
    {
      id: 3,
      title: "Football Skills Training",
      instructor: "David Rodriguez",
      type: "Group",
      rating: 4.7,
      price: 120,
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop",
      category: "Sports",
      duration: "120 min",
      students: 18,
      date: new Date(2025, 0, 17) // Jan 17, 2025
    },
    {
      id: 4,
      title: "Classical Piano Masterclass",
      instructor: "Elena Vasquez",
      type: "Solo",
      rating: 4.9,
      price: 200,
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop",
      category: "Singing",
      duration: "75 min",
      students: 12,
      date: new Date(2025, 0, 18) // Jan 18, 2025
    },
    {
      id: 5,
      title: "Contemporary Dance Workshop",
      instructor: "Lisa Park",
      type: "Group",
      rating: 4.6,
      price: 90,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Dance",
      duration: "120 min",
      students: 20,
      date: new Date(2025, 0, 19) // Jan 19, 2025
    },
    {
      id: 6,
      title: "Basketball Fundamentals",
      instructor: "James Wilson",
      type: "Group",
      rating: 4.5,
      price: 100,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      category: "Sports",
      duration: "90 min",
      students: 16,
      date: new Date(2025, 0, 20) // Jan 20, 2025
    }
  ];

  const filteredClasses = allClasses.filter((classItem) => {
    const matchesSearch = classItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         classItem.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || classItem.category.toLowerCase() === selectedCategory;
    const matchesType = selectedType === "all" || classItem.type.toLowerCase() === selectedType;
    const matchesDate = !selectedDate || isSameDay(classItem.date, selectedDate);
    
    return matchesSearch && matchesCategory && matchesType && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 via-aqua-400 to-coral-500 bg-clip-text text-transparent mb-4">
              Browse Classes
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Find the perfect class to master your skills with expert instructors
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 glass-effect border-white/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search classes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="singing">Singing</SelectItem>
                    <SelectItem value="dance">Dance</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                  </SelectContent>
                </Select>

                {/* Type Filter */}
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Class Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="solo">Solo</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Results Info */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-slate-600">
              Showing {filteredClasses.length} classes
              {selectedDate && (
                <span className="ml-2 text-violet-600 font-medium">
                  for {format(selectedDate, "MMMM dd, yyyy")}
                </span>
              )}
            </p>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>

          {/* Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredClasses.map((classItem, index) => (
              <ClassCard
                key={classItem.id}
                {...classItem}
                delay={index * 0.05}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-3 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300"
            >
              Load More Classes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
