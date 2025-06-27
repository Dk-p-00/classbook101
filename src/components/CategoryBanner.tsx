
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
  count: string;
  delay?: number;
}

export const CategoryBanner = ({ title, description, image, gradient, count, delay = 0 }: CategoryBannerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
        
        {/* Content */}
        <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
          <div>
            <Badge 
              variant="secondary" 
              className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-4 animate-float"
            >
              {count}
            </Badge>
            <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-1">
              {title}
            </h3>
            <p className="text-white/90 transform transition-transform duration-300 group-hover:translate-y-1">
              {description}
            </p>
          </div>
          
          <div className="transform transition-all duration-300 group-hover:translate-y-1">
            <Link to={`/classes/${title.toLowerCase()}`}>
              <Button 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:scale-105"
              >
                Explore {title}
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
