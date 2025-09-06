import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LogOut, Leaf, Waves } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-0 shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-primary" />
              <Leaf className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground mt-1">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Signed in as</p>
              <p className="font-medium text-foreground">{userEmail}</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardHeader;