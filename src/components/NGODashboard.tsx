import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import DashboardHeader from './DashboardHeader';
import { Upload, MapPin, Calendar, Image } from 'lucide-react';

const NGODashboard = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    date: '',
    fieldImages: null as FileList | null,
    droneData: null as FileList | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files || value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.projectName || !formData.location || !formData.date) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate upload process
    setTimeout(() => {
      console.log('Submitted data:', formData);
      
      toast({
        title: "Data Submitted Successfully!",
        description: "Your field data has been uploaded for verification",
      });
      
      // Clear form
      setFormData({
        projectName: '',
        location: '',
        date: '',
        fieldImages: null,
        droneData: null,
      });
      
      // Reset file inputs
      const form = document.getElementById('ngo-form') as HTMLFormElement;
      if (form) form.reset();
      
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <DashboardHeader 
          title="NGO Dashboard" 
          subtitle="Environmental Data Submission Portal"
        />
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5 text-primary" />
              <span>Submit Field Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form id="ngo-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="projectName" className="flex items-center space-x-2">
                  <span>Project Name</span>
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="projectName"
                  name="projectName"
                  placeholder="Enter project name"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>GPS Coordinates</span>
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., -1.2921, 36.8219"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Collection Date</span>
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fieldImages" className="flex items-center space-x-2">
                  <Image className="h-4 w-4" />
                  <span>Field Images</span>
                </Label>
                <Input
                  id="fieldImages"
                  name="fieldImages"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="droneData" className="flex items-center space-x-2">
                  <Upload className="h-4 w-4" />
                  <span>Drone Data Files</span>
                </Label>
                <Input
                  id="droneData"
                  name="droneData"
                  type="file"
                  multiple
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting Data...' : 'Submit Field Data'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Upload className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No submissions yet. Submit your first field data above!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NGODashboard;