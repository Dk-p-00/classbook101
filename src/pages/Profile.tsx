
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Star, Settings, User, Heart, Wallet } from "lucide-react";
import { Header } from "@/components/Header";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const userProfile = {
    name: "John Doe",
    email: "john.doe@email.com", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    joinedDate: "Jan 2024",
    totalBookings: 12,
    favoriteInstructors: 8,
    walletBalance: 500
  };

  const upcomingBookings = [
    {
      id: 1,
      title: "Advanced Vocal Training",
      instructor: "Sarah Johnson",
      date: "2024-01-15",
      time: "10:00 AM",
      location: "Downtown Music Studio",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=200&fit=crop",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Hip-Hop Choreography",
      instructor: "Mike Chen",
      date: "2024-01-18",
      time: "6:00 PM",
      location: "Dance Central",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=300&h=200&fit=crop",
      status: "confirmed"
    }
  ];

  const pastBookings = [
    {
      id: 3,
      title: "Football Skills Training",
      instructor: "David Rodriguez",
      date: "2024-01-10",
      time: "5:00 PM",
      location: "Sports Complex",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=300&h=200&fit=crop",
      status: "completed",
      rating: 5
    }
  ];

  const favoriteInstructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Vocal Training",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c217?w=100&h=100&fit=crop",
      rating: 4.9
    },
    {
      id: 2,
      name: "Mike Chen",
      specialty: "Hip-Hop Dance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4.8
    }
  ];

  const BookingCard = ({ booking, isPast = false }: { booking: any, isPast?: boolean }) => (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <img 
            src={booking.image} 
            alt={booking.title}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{booking.title}</h3>
              <Badge 
                variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                className="capitalize"
              >
                {booking.status}
              </Badge>
            </div>
            <p className="text-slate-600 mb-2">with {booking.instructor}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(booking.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {booking.time}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {booking.location}
              </div>
            </div>
            {isPast && booking.rating && (
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-slate-500">Your rating:</span>
                <div className="flex">
                  {[...Array(booking.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {!isPast && (
          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm" className="flex-1">
              Reschedule
            </Button>
            <Button variant="outline" size="sm" className="flex-1 text-red-600 hover:text-red-700">
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8 glass-effect border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userProfile.avatar} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
                  <p className="text-slate-600 mb-4">{userProfile.email}</p>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="font-semibold text-violet-500">{userProfile.totalBookings}</span>
                      <span className="text-slate-500 ml-1">Total Bookings</span>
                    </div>
                    <div>
                      <span className="font-semibold text-violet-500">{userProfile.favoriteInstructors}</span>
                      <span className="text-slate-500 ml-1">Favorite Instructors</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Member since {userProfile.joinedDate}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Upcoming Bookings */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-violet-500" />
                    Upcoming Classes
                  </h2>
                  {upcomingBookings.length > 0 ? (
                    upcomingBookings.map((booking) => (
                      <BookingCard key={booking.id} booking={booking} />
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <Calendar className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                        <p className="text-slate-500">No upcoming bookings</p>
                        <Button className="mt-4">Browse Classes</Button>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Past Bookings */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-violet-500" />
                    Past Classes
                  </h2>
                  {pastBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} isPast />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-coral-500" />
                    Favorite Instructors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favoriteInstructors.map((instructor) => (
                      <Card key={instructor.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="text-center">
                            <Avatar className="h-16 w-16 mx-auto mb-3">
                              <AvatarImage src={instructor.image} />
                              <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-semibold mb-1">{instructor.name}</h3>
                            <p className="text-sm text-slate-600 mb-2">{instructor.specialty}</p>
                            <div className="flex items-center justify-center gap-1 mb-3">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{instructor.rating}</span>
                            </div>
                            <Button size="sm" variant="outline" className="w-full">
                              View Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wallet">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wallet className="h-6 w-6 text-violet-500" />
                      Wallet Balance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="text-4xl font-bold text-violet-500 mb-2">
                        ₹{userProfile.walletBalance}
                      </div>
                      <p className="text-slate-600 mb-6">Available Balance</p>
                      <div className="flex gap-3">
                        <Button className="flex-1">Add Money</Button>
                        <Button variant="outline" className="flex-1">Withdraw</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: "booking", amount: -150, description: "Vocal Training Class", date: "Jan 10" },
                        { type: "refund", amount: +80, description: "Class Cancellation", date: "Jan 8" },
                        { type: "topup", amount: +500, description: "Wallet Top-up", date: "Jan 5" }
                      ].map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <div>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-sm text-slate-500">{transaction.date}</div>
                          </div>
                          <div className={`font-semibold ${
                            transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Personal Information</h3>
                    <Button variant="outline">Edit Profile</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Notifications</h3>
                    <Button variant="outline">Manage Preferences</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Privacy & Security</h3>
                    <Button variant="outline">Update Password</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
