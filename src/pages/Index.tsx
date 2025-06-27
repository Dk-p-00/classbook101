
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, Users, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { CategoryBanner } from "@/components/CategoryBanner";
import { ClassCard } from "@/components/ClassCard";
import { TrendingSection } from "@/components/TrendingSection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Singing",
      description: "From classical to contemporary",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
      gradient: "gradient-violet-aqua",
      count: "150+ classes"
    },
    {
      title: "Dance",
      description: "Hip-hop, Ballet, Salsa & more",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=400&fit=crop",
      gradient: "gradient-coral-violet",
      count: "200+ classes"
    },
    {
      title: "Sports",
      description: "Football, Basketball, Tennis",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      gradient: "gradient-aqua-coral",
      count: "100+ classes"
    }
  ];

  const featuredClasses = [
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
      students: 24
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
      students: 15
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
      students: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 via-aqua-400 to-coral-500 bg-clip-text text-transparent animate-fade-in">
            Master Your Passion
          </h1>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto animate-fade-in">
            Discover and book the best singing, dance, and sports classes near you
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto relative animate-scale-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search for classes, instructors, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-slate-200 focus:border-violet-500 transition-all duration-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Banners */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryBanner
                key={category.title}
                {...category}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Classes */}
      <TrendingSection classes={featuredClasses} />

      {/* Featured Classes Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Classes</h2>
            <Button variant="outline" className="rounded-full">
              View All
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClasses.map((classItem, index) => (
              <ClassCard
                key={classItem.id}
                {...classItem}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-violet-500 to-aqua-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-float">
              <div className="text-4xl font-bold">450+</div>
              <div className="text-lg opacity-90">Expert Instructors</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold">2,500+</div>
              <div className="text-lg opacity-90">Happy Students</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-bold">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-lg opacity-90">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-slate-300 mb-6">Join thousands of students already mastering their craft</p>
          <Button className="bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full px-8 py-3 text-lg font-semibold animate-glow">
            Get Started Today
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
