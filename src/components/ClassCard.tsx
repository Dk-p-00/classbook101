
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, User } from "lucide-react";
import { Link } from "react-router-dom";

interface ClassCardProps {
  id: number;
  title: string;
  instructor: string;
  type: string;
  rating: number;
  price: number;
  image: string;
  category: string;
  duration: string;
  students: number;
  delay?: number;
}

export const ClassCard = ({ 
  id, title, instructor, type, rating, price, image, category, duration, students, delay = 0 
}: ClassCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'singing': return 'bg-violet-500';
      case 'dance': return 'bg-coral-500';
      case 'sports': return 'bg-aqua-400';
      default: return 'bg-slate-500';
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <Badge className={`absolute top-3 left-3 ${getCategoryColor(category)} text-white border-0`}>
            {category}
          </Badge>
          
          {/* Rating */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-semibold">
            ⭐ {rating}
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-500 transition-colors duration-300">
              {title}
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-violet-500">₹{price}</div>
              <div className="text-sm text-slate-500">per session</div>
            </div>
          </div>
          
          <p className="text-slate-600 mb-4">by {instructor}</p>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              {type === 'Solo' ? <User className="h-4 w-4" /> : <Users className="h-4 w-4" />}
              {type} • {students} students
            </div>
          </div>

          <Link to={`/class/${id}`}>
            <Button 
              className="w-full bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105"
            >
              Book Now
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
};
