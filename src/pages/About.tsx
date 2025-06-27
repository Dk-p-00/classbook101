
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, Star, MapPin, Calendar, Phone, Mail } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Happy Students", value: "10,000+", icon: Users },
    { label: "Expert Instructors", value: "500+", icon: Target },
    { label: "Classes Completed", value: "50,000+", icon: Award },
    { label: "Cities Covered", value: "25+", icon: MapPin }
  ];

  const team = [
    {
      name: "Jennifer Martinez",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616c2e9e494",
      bio: "Former professional dancer with 15 years of experience in arts education."
    },
    {
      name: "Robert Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Tech enthusiast passionate about making learning accessible through innovation."
    },
    {
      name: "Maria Rodriguez",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Dedicated to building connections and fostering growth in our community."
    },
    {
      name: "David Kim",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Sports enthusiast focused on expanding our instructor network globally."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 to-aqua-400 bg-clip-text text-transparent mb-6">
              About ClassBook
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make learning accessible, enjoyable, and transformative. 
              Connect with passionate instructors and discover your potential in singing, dancing, and sports.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 rounded-3xl shadow-xl animate-fade-in">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-violet-500 to-aqua-400 flex items-center justify-center">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                To create a world where everyone has access to quality instruction in the arts and sports. 
                We believe that learning should be personal, inspiring, and accessible to all, regardless of background or experience level.
              </p>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500 to-aqua-400 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{stat.value}</h3>
                <p className="text-slate-600">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ClassBook was born from a simple observation: talented instructors and eager students 
                were struggling to find each other. In 2020, our founder Jennifer Martinez, a professional 
                dancer, noticed how the pandemic had disrupted traditional learning environments.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                What started as a small platform to connect local dance instructors with students 
                has grown into a comprehensive ecosystem supporting singing, dancing, and sports instruction 
                across multiple cities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we're proud to facilitate thousands of learning connections every month, 
                helping people discover new passions and achieve their goals.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div 
                className="h-96 bg-cover bg-center rounded-3xl shadow-xl"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b)" }}
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Accessibility",
                  description: "Quality instruction should be available to everyone, everywhere.",
                  icon: Users,
                  color: "from-violet-500 to-purple-600"
                },
                {
                  title: "Excellence",
                  description: "We partner only with the most passionate and skilled instructors.",
                  icon: Star,
                  color: "from-aqua-400 to-blue-500"
                },
                {
                  title: "Community",
                  description: "Learning is better when shared. We foster connections and support.",
                  icon: Heart,
                  color: "from-coral-500 to-red-500"
                }
              ].map((value, index) => (
                <Card 
                  key={value.title} 
                  className="text-center p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={member.name} 
                  className="text-center overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-violet-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <Card className="rounded-3xl shadow-xl mb-16 animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Get In Touch</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-violet-500 to-aqua-400 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-violet-500 to-aqua-400 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600">hello@classbook.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-violet-500 to-aqua-400 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Address</h3>
                  <p className="text-slate-600">123 Learning St, NYC 10001</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full px-8 py-3 text-lg">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
