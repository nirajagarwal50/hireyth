
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import Profile from "./pages/Profile";
import CreateTrip from "./pages/CreateTrip";
import NotFound from "./pages/NotFound";

// Add the Google Fonts link for Dancing Script font
// This would typically go in the index.html file, but for now we'll add it here
if (!document.getElementById('dancing-script-font')) {
  const link = document.createElement('link');
  link.id = 'dancing-script-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap';
  document.head.appendChild(link);
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="max-w-md mx-auto min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreateTrip />} />
            <Route path="/trips/:id" element={<div>Trip Details Coming Soon</div>} />
            <Route path="/experiences" element={<div>Experiences Page Coming Soon</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
