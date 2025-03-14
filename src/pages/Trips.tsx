
import React, { useState } from 'react';
import { SearchIcon, Filter, X, ChevronDown } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import TripCard from '@/components/TripCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample data - would be fetched from API in a real app
const featuredTrips = [
  {
    id: "trip1",
    title: "Exploring the Greek Islands",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    startDate: "2023-08-15",
    endDate: "2023-08-25",
    spots: 3,
    creatorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    creatorName: "Sarah J.",
    featured: true,
    country: "Greece",
    activity: "Beach, Sightseeing",
    postedOn: "2023-07-20"
  },
  {
    id: "trip2",
    title: "Japanese Culture Tour",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    startDate: "2023-09-10",
    endDate: "2023-09-22",
    spots: 2,
    creatorImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    creatorName: "Mike T.",
    country: "Japan",
    activity: "Cultural, Food",
    postedOn: "2023-07-25"
  },
  {
    id: "trip3",
    title: "Northern Lights Adventure",
    location: "Tromsø, Norway",
    image: "https://images.unsplash.com/photo-1483127140521-b816a161ae22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    startDate: "2023-11-05",
    endDate: "2023-11-12",
    spots: 4,
    creatorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    creatorName: "Emma L.",
    country: "Norway",
    activity: "Aurora Viewing, Hiking",
    postedOn: "2023-07-30"
  }
];

// List of countries and activities for filters
const countries = ["All", "Greece", "Japan", "Norway", "Thailand", "USA", "Italy", "France"];
const activities = ["All", "Beach", "Hiking", "Cultural", "Food", "Sightseeing", "Aurora Viewing"];

const Trips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    country: "All",
    activity: "All",
    dateRange: "Any",
  });
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Toggle filters panel
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  // Update filters
  const updateFilter = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };
  
  // Reset filters
  const resetFilters = () => {
    setFilters({
      country: "All",
      activity: "All",
      dateRange: "Any",
    });
  };
  
  // Filter trips based on search term and filters
  const filteredTrips = featuredTrips.filter(trip => {
    // Search term filter
    const searchMatch = 
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.activity.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Country filter
    const countryMatch = filters.country === "All" || trip.country === filters.country;
    
    // Activity filter
    const activityMatch = 
      filters.activity === "All" || 
      trip.activity.includes(filters.activity);
    
    return searchMatch && countryMatch && activityMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-hireyth-main text-white py-4 px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-['Dancing_Script'] text-2xl font-bold">Hireyth</h1>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search by city, activity or trip name..."
            className="pl-10 pr-4 py-2 rounded-lg w-full text-gray-800 bg-white"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={toggleFilters}
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-4 border-b border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filters</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Reset
              </Button>
              <Button variant="outline" size="sm" onClick={toggleFilters}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Country Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <div className="relative">
              <select 
                className="w-full p-2 border border-gray-300 rounded-md appearance-none bg-white pr-8"
                value={filters.country}
                onChange={(e) => updateFilter('country', e.target.value)}
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          {/* Activity Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
            <div className="relative">
              <select 
                className="w-full p-2 border border-gray-300 rounded-md appearance-none bg-white pr-8"
                value={filters.activity}
                onChange={(e) => updateFilter('activity', e.target.value)}
              >
                {activities.map(activity => (
                  <option key={activity} value={activity}>{activity}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          {/* Date Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <div className="relative">
              <select 
                className="w-full p-2 border border-gray-300 rounded-md appearance-none bg-white pr-8"
                value={filters.dateRange}
                onChange={(e) => updateFilter('dateRange', e.target.value)}
              >
                <option value="Any">Any time</option>
                <option value="NextMonth">Next month</option>
                <option value="Next3Months">Next 3 months</option>
                <option value="Next6Months">Next 6 months</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      )}
      
      {/* Active Filters */}
      {(filters.country !== "All" || filters.activity !== "All" || filters.dateRange !== "Any") && (
        <div className="bg-white px-4 py-2 border-b border-gray-200 flex flex-wrap gap-2">
          {filters.country !== "All" && (
            <Badge variant="outline" className="flex items-center gap-1">
              {filters.country}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => updateFilter('country', 'All')}
              />
            </Badge>
          )}
          {filters.activity !== "All" && (
            <Badge variant="outline" className="flex items-center gap-1">
              {filters.activity}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => updateFilter('activity', 'All')}
              />
            </Badge>
          )}
          {filters.dateRange !== "Any" && (
            <Badge variant="outline" className="flex items-center gap-1">
              {filters.dateRange.replace(/([A-Z])/g, ' $1').trim()}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => updateFilter('dateRange', 'Any')}
              />
            </Badge>
          )}
        </div>
      )}
      
      {/* Main Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          {filteredTrips.length > 0 
            ? `Available Trips (${filteredTrips.length})`
            : "No trips found"
          }
        </h2>
        
        <div className="space-y-4">
          {filteredTrips.map((trip) => (
            <TripCard 
              key={trip.id}
              {...trip}
            />
          ))}
        </div>
        
        {filteredTrips.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            <p>No trips match your search criteria.</p>
            <p className="mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Trips;
