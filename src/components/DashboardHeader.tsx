import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Leaf, Waves, User, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ngoData = {
  name: "Green Future Initiative",
  initials: "GF"
};

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const userEmail = localStorage.getItem('userEmail');
  
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account",
    });
    navigate('/');
  };

  return (
    // This outer div provides spacing for the header from the screen edges
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4">
      <header className="w-full bg-gradient-to-r from-primary/5 via-background to-primary/5 shadow-lg rounded-2xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Waves className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                <Leaf className="h-8 w-8 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
                <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="transition-all duration-300 ease-in-out group hover:bg-destructive/90 hover:text-destructive-foreground hover:border-destructive/90 hover:shadow-md hover:shadow-destructive/40"
              >
                <LogOut className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-6" />
                Logout
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{ngoData.initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{ngoData.name}</p>
                      <p className="text-xs leading-none text-muted-foreground pt-1">
                        {userEmail}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="group cursor-pointer transition-colors">
                    <User className="mr-2 h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary" />
                    <span className="transition-all duration-300 group-hover:text-primary">Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="group cursor-pointer transition-colors">
                    <Settings className="mr-2 h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary" />
                    <span className="transition-all duration-300 group-hover:text-primary">Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
