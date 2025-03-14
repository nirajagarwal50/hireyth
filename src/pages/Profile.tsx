
import React from 'react';
import { Settings, Image, MapPin, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BottomNav from '@/components/BottomNav';

const Profile = () => {
  // Mock user data - would be fetched from API in a real app
  const user = {
    name: "Alex Johnson",
    location: "San Francisco, CA",
    email: "alex.j@example.com",
    phone: "+1 (555) 123-4567",
    gender: "Male",
    profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    tripsCount: 12,
    experiencesCount: 24,
    bio: "Travel enthusiast and adventure seeker. Always looking for the next exciting destination!",
    social: {
      instagram: "travel_alex",
      linkedin: "alex-johnson-travel"
    }
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
              className="w-20 h-20 rounded-full object-cover border-2 border-hireyth-main"
            />
            <Button variant="outline" size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white">
              <Image className="w-4 h-4" />
            </Button>
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
      
      {/* Demographics Section */}
      <div className="mt-4 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <Input value={user.name} readOnly className="bg-gray-50" />
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-500 mr-2" />
                <Input value={user.email} readOnly className="bg-gray-50" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-500 mr-2" />
                <Input value={user.phone} readOnly className="bg-gray-50" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <Input value={user.gender} readOnly className="bg-gray-50" />
          </div>
        </div>
      </div>
      
      {/* Social Media Section */}
      <div className="mt-4 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <div className="bg-gray-100 p-2 border-r">
                <Instagram className="w-5 h-5 text-[#E1306C]" />
              </div>
              <Input value={user.social.instagram} readOnly className="bg-white border-0" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <div className="bg-gray-100 p-2 border-r">
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
              </div>
              <Input value={user.social.linkedin} readOnly className="bg-white border-0" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Experiences */}
      <div className="mt-4 p-4">
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
