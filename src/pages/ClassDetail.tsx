
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, User, MapPin, Star, Heart, Share2 } from "lucide-react";
import { Header } from "@/components/Header";

const ClassDetail = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Mock class data - in real app, fetch based on ID
  const classData = {
    id: 1,
    title: "Advanced Vocal Training",
    instructor: "Sarah Johnson",
    type: "Solo",
    rating: 4.9,
    reviewCount: 156,
    price: 150,
    originalPrice: 200,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
    category: "Singing",
    duration: "60 min",
    students: 24,
    location: "Downtown Music Studio",
    description: "Master advanced vocal techniques with our expert instructor. This comprehensive course covers breath control, pitch accuracy, and performance skills.",
    highlights: [
      "One-on-one personalized instruction",
      "Advanced breathing techniques",
      "Performance coaching",
      "Recording session included"
    ],
    schedule: [
      { date: "2024-01-15", slots: ["10:00 AM", "2:00 PM", "6:00 PM"] },
      { date: "2024-01-16", slots: ["11:00 AM", "3:00 PM", "7:00 PM"] },
      { date: "2024-01-17", slots: ["9:00 AM", "1:00 PM", "5:00 PM"] }
    ]
  };

  const instructorData = {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c217?w=200&h=200&fit=crop",
    experience: "8+ years",
    rating: 4.9,
    students: 450,
    bio: "Professional vocalist and certified instructor with experience in classical, pop, and jazz genres.",
    credentials: ["Berklee Graduate", "Certified Voice Coach", "Grammy Nominee"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={classData.image} 
                  alt={classData.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge className="bg-violet-500 text-white mb-2">
                    {classData.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{classData.title}</h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {classData.rating} ({classData.reviewCount} reviews)
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {classData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Class Info Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">About This Class</h3>
                      <p className="text-slate-600 mb-6">{classData.description}</p>
                      
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2 mb-6">
                        {classData.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-600">
                            <div className="w-2 h-2 rounded-full bg-violet-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <Clock className="h-6 w-6 mx-auto mb-2 text-violet-500" />
                          <div className="font-semibold">{classData.duration}</div>
                          <div className="text-sm text-slate-500">Duration</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <User className="h-6 w-6 mx-auto mb-2 text-violet-500" />
                          <div className="font-semibold">{classData.type}</div>
                          <div className="text-sm text-slate-500">Class Type</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <Users className="h-6 w-6 mx-auto mb-2 text-violet-500" />
                          <div className="font-semibold">{classData.students}</div>
                          <div className="text-sm text-slate-500">Students</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructor">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src={instructorData.image} 
                          alt={instructorData.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{instructorData.name}</h3>
                          <p className="text-slate-600 mb-3">{instructorData.bio}</p>
                          
                          <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <div className="font-semibold">{instructorData.experience}</div>
                              <div className="text-sm text-slate-500">Experience</div>
                            </div>
                            <div>
                              <div className="font-semibold">{instructorData.rating}⭐</div>
                              <div className="text-sm text-slate-500">Rating</div>
                            </div>
                            <div>
                              <div className="font-semibold">{instructorData.students}</div>
                              <div className="text-sm text-slate-500">Students</div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {instructorData.credentials.map((credential, index) => (
                              <Badge key={index} variant="outline">{credential}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="schedule">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Available Sessions</h3>
                      <div className="space-y-4">
                        {classData.schedule.map((day, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="font-semibold mb-2">
                              {new Date(day.date).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {day.slots.map((slot, slotIndex) => (
                                <Button
                                  key={slotIndex}
                                  variant={selectedTime === slot ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => setSelectedTime(slot)}
                                  className="rounded-full"
                                >
                                  {slot}
                                </Button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Student Reviews</h3>
                      <div className="space-y-4">
                        {[1, 2, 3].map((review) => (
                          <div key={review} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                                <User className="h-4 w-4 text-violet-600" />
                              </div>
                              <div>
                                <div className="font-semibold">Student {review}</div>
                                <div className="text-sm text-slate-500">⭐⭐⭐⭐⭐</div>
                              </div>
                            </div>
                            <p className="text-slate-600">
                              Amazing instructor! Really helped me improve my vocal range and technique.
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-2xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-violet-500">₹{classData.price}</span>
                      <span className="text-lg text-slate-400 line-through">₹{classData.originalPrice}</span>
                    </div>
                    <Badge className="bg-coral-500 text-white">25% OFF Limited Time</Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-gradient-to-r from-violet-500 to-aqua-400 hover:from-violet-600 hover:to-aqua-500 rounded-full py-3 font-semibold text-lg animate-glow">
                      Book Now
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 rounded-full">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 rounded-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Class fee</span>
                      <span>₹{classData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform fee</span>
                      <span>₹20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>₹25</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{classData.price + 20 + 25}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                    <div className="text-sm text-slate-600 text-center">
                      <p className="mb-2">📚 Free cancellation up to 24 hours before class</p>
                      <p>💯 100% satisfaction guarantee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
