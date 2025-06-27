
import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Plus, Camera, Video } from "lucide-react";

const posts = [
  {
    id: 1,
    user: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c2e9e494",
      badge: "Dance Enthusiast"
    },
    content: "Just finished my first contemporary dance class with Sarah! The movements felt so freeing and expressive. Can't wait for the next session! 💃",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434",
    likes: 42,
    comments: 12,
    timeAgo: "2 hours ago",
    category: "Dance"
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      badge: "Vocal Student"
    },
    content: "Breakthrough moment in today's vocal training! Finally hit that high note I've been working on for weeks. Marcus is an amazing coach! 🎵",
    video: true,
    likes: 67,
    comments: 8,
    timeAgo: "4 hours ago",
    category: "Singing"
  },
  {
    id: 3,
    user: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      badge: "Sports Lover"
    },
    content: "Great tennis session this morning! Working on my backhand technique. The improvement is already showing. Thanks David! 🎾",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8",
    likes: 35,
    comments: 6,
    timeAgo: "6 hours ago",
    category: "Sports"
  },
  {
    id: 4,
    user: {
      name: "Sophie Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      badge: "Hip-Hop Dancer"
    },
    content: "Killed it at today's hip-hop class! Jessica's choreography is always on point. Here's a little snippet from our routine 🔥",
    video: true,
    likes: 89,
    comments: 23,
    timeAgo: "8 hours ago",
    category: "Dance"
  }
];

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newPost, setNewPost] = useState("");

  const categories = ["All", "Dance", "Singing", "Sports"];

  const filteredPosts = posts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-aqua-400 bg-clip-text text-transparent mb-4">
              Community Hub
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Share your journey, celebrate achievements, and connect with fellow learners
            </p>
          </div>

          {/* Create Post */}
          <Card className="mb-8 rounded-3xl shadow-lg animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-aqua-400" />
                <div className="flex-1">
                  <Textarea
                    placeholder="Share your progress, achievements, or ask questions..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="border-slate-300 focus:border-violet-500 focus:ring-violet-500 rounded-2xl resize-none"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Camera className="h-4 w-4 mr-2" />
                        Photo
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Video className="h-4 w-4 mr-2" />
                        Video
                      </Button>
                    </div>
                    <Button className="bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Filters */}
          <div className="flex gap-2 mb-8 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full whitespace-nowrap ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-violet-500 to-aqua-400" 
                    : "hover:bg-violet-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Post Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.user.avatar})` }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-800">{post.user.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {post.user.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500">{post.timeAgo}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-violet-500 to-aqua-400 text-white">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Post Content */}
                  <p className="text-slate-700 mb-4">{post.content}</p>

                  {/* Post Media */}
                  {post.image && (
                    <div 
                      className="h-64 bg-cover bg-center rounded-2xl mb-4"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                  )}
                  
                  {post.video && (
                    <div className="h-64 bg-gradient-to-br from-violet-500 to-aqua-400 rounded-2xl mb-4 flex items-center justify-center">
                      <Video className="h-16 w-16 text-white" />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-slate-500 hover:text-coral-500 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-500 hover:text-violet-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-500 hover:text-aqua-500 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
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

export default Community;
