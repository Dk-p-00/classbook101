
import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, MapPin, Users, Search, Filter } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Contemporary Dance",
    rating: 4.9,
    students: 120,
    experience: "8 years",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1494790108755-2616c2e9e494",
    categories: ["Dance"],
    bio: "Professional contemporary dancer with international performance experience."
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    specialty: "Vocal Training",
    rating: 4.8,
    students: 89,
    experience: "12 years",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    categories: ["Singing"],
    bio: "Berklee graduate specializing in vocal technique and performance coaching."
  },
  {
    id: 3,
    name: "Jessica Chen",
    specialty: "Hip-Hop Dance",
    rating: 4.9,
    students: 156,
    experience: "6 years",
    location: "Queens, NY",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    categories: ["Dance"],
    bio: "Street dance champion with expertise in hip-hop and urban choreography."
  },
  {
    id: 4,
    name: "David Wilson",
    specialty: "Tennis Coaching",
    rating: 4.7,
    students: 67,
    experience: "15 years",
    location: "Central Park, NY",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    categories: ["Sports"],
    bio: "Former professional tennis player turned coach, specializing in technique."
  },
  {
    id: 5,
    name: "Anna Petrov",
    specialty: "Classical Piano",
    rating: 4.9,
    students: 94,
    experience: "20 years",
    location: "Upper East Side, NY",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
    categories: ["Singing"],
    bio: "Julliard graduate with expertise in classical piano and music theory."
  },
  {
    id: 6,
    name: "Mike Thompson",
    specialty: "Football Training",
    rating: 4.6,
    students: 78,
    experience: "10 years",
    location: "Bronx, NY",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    categories: ["Sports"],
    bio: "Former college football player specializing in youth development."
  }
];

const Instructors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Dance", "Singing", "Sports"];

  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || instructor.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-aqua-400 bg-clip-text text-transparent mb-4">
              Meet Our Expert Instructors
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Learn from passionate professionals who are dedicated to helping you achieve your goals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-slate-300 focus:border-violet-500 focus:ring-violet-500"
              />
            </div>
            
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-violet-500 to-aqua-400" 
                      : "hover:bg-violet-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstructors.map((instructor, index) => (
              <Card 
                key={instructor.id} 
                className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${instructor.image})` }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-800 backdrop-blur-sm">
                      {instructor.categories[0]}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{instructor.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{instructor.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-violet-600 font-medium mb-2">{instructor.specialty}</p>
                  <p className="text-slate-600 text-sm mb-4">{instructor.bio}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{instructor.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{instructor.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full"
                    >
                      View Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 rounded-full hover:bg-violet-50"
                    >
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
