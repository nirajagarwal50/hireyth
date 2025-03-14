
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BottomNav from '@/components/BottomNav';

const CreateTrip = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(null);
  
  // Mock submit function - would connect to backend in a real app
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demonstration, just navigate back to trips page
    navigate('/trips');
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-hireyth-main text-white p-4 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white mr-2" 
          onClick={() => navigate('/trips')}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Create New Trip</h1>
      </div>
      
      {/* Form */}
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Trip Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trip Cover Image
            </label>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center h-48 bg-gray-50 cursor-pointer"
              onClick={() => document.getElementById('trip-image')?.click()}
            >
              {image ? (
                <img 
                  src={image} 
                  alt="Trip cover" 
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                <>
                  <Upload className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload image</p>
                </>
              )}
              <input 
                type="file" 
                id="trip-image" 
                className="hidden" 
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          
          {/* Trip Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Trip Title
            </label>
            <input 
              type="text" 
              id="title" 
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., Weekend Getaway to Mountains"
              required
            />
          </div>
          
          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input 
              type="text" 
              id="location" 
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., Bali, Indonesia"
              required
            />
          </div>
          
          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input 
                type="date" 
                id="start-date" 
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input 
                type="date" 
                id="end-date" 
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          
          {/* Available Spots */}
          <div>
            <label htmlFor="spots" className="block text-sm font-medium text-gray-700 mb-2">
              Available Spots
            </label>
            <input 
              type="number" 
              id="spots" 
              className="w-full p-3 border border-gray-300 rounded-md"
              min="1" 
              max="20"
              defaultValue="1"
              required
            />
          </div>
          
          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Trip Description
            </label>
            <textarea 
              id="description" 
              rows={4} 
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Describe your trip, plans, what you're looking for in travel companions, etc."
              required
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-hireyth-main hover:bg-hireyth-main/90 text-white py-3"
          >
            Create Trip
          </Button>
        </form>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default CreateTrip;
