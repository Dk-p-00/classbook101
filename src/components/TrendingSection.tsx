
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users } from "lucide-react";

interface TrendingClass {
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
}

interface TrendingSectionProps {
  classes: TrendingClass[];
}

export const TrendingSection = ({ classes }: TrendingSectionProps) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-violet-50 to-aqua-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <TrendingUp className="h-6 w-6 text-violet-500" />
          <h2 className="text-3xl font-bold text-center">Trending This Week</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <Card 
              key={classItem.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/80 to-aqua-400/80" />
                
                <Badge className="absolute top-3 left-3 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  🔥 Trending #{index + 1}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 group-hover:text-violet-500 transition-colors">
                    {classItem.title}
                  </h3>
                  <div className="text-lg font-bold text-violet-500">₹{classItem.price}</div>
                </div>
                
                <p className="text-sm text-slate-600 mb-3">by {classItem.instructor}</p>
                
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {classItem.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {classItem.students} students
                  </div>
                  <div className="flex items-center gap-1">
                    ⭐ {classItem.rating}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
