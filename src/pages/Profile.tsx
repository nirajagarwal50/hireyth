
import React from 'react';
import { Settings, Image, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BottomNav from '@/components/BottomNav';

const Profile = () => {
  // Mock user data - would be fetched from API in a real app
  const user = {
    name: "Alex Johnson",
    location: "San Francisco, CA",
    profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    tripsCount: 12,
    experiencesCount: 24,
    bio: "Travel enthusiast and adventure seeker. Always looking for the next exciting destination!",
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-hireyth-main text-white p-4 flex justify-between items-center">
        <h1 className="font-['Dancing_Script'] text-2xl font-bold">Hireyth</h1>
        <Button variant="ghost" size="icon" className="text-white">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Profile Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center">
          <div className="relative mr-4">
            <img 
              src={user.profileImage} 
              alt={user.name} 
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{user.location}</span>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600">
          {user.bio}
        </p>
        
        <div className="flex mt-6">
          <div className="flex-1 text-center">
            <div className="text-xl font-semibold">{user.tripsCount}</div>
            <div className="text-sm text-gray-500">Trips</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-xl font-semibold">{user.experiencesCount}</div>
            <div className="text-sm text-gray-500">Experiences</div>
          </div>
        </div>
      </div>
      
      {/* Experiences */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">My Experiences</h3>
          <Button variant="ghost" size="sm" className="text-hireyth-main">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-gray-200 rounded-md overflow-hidden relative"
            >
              <img 
                src={`https://source.unsplash.com/random/300x300?travel&sig=${i}`} 
                alt="Travel experience" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
