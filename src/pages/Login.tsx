
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  
  // Mock login function - would connect to authentication service in a real app
  const handleLogin = () => {
    // For demonstration purposes, just navigate to main app
    navigate('/trips');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="w-10 h-10"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-16 h-16 rounded-full bg-hireyth-main flex items-center justify-center mb-6">
          <span className="font-['Dancing_Script'] text-2xl font-bold text-white">H</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-8">Log in to Hireyth</h1>
        
        <div className="w-full max-w-xs space-y-4">
          <Button 
            className="w-full bg-hireyth-main hover:bg-hireyth-main/90 text-white"
            onClick={handleLogin}
          >
            Continue with Google
          </Button>
          
          <Button 
            className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
            onClick={handleLogin}
          >
            Continue with Facebook
          </Button>
          
          <Button 
            className="w-full bg-black hover:bg-black/90 text-white"
            onClick={handleLogin}
          >
            Continue with Apple
          </Button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleLogin}
          >
            Continue with email
          </Button>
        </div>
      </div>
      
      <div className="p-6 text-center text-sm text-gray-500">
        By continuing, you agree to Hireyth's Terms of Service and Privacy Policy.
      </div>
    </div>
  );
};

export default Login;
