// src/pages/NGODashboard.tsx

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Import Tabs components from your UI library
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; 
import { useToast } from '@/hooks/use-toast';
import DashboardHeader from './DashboardHeader';
import { Upload, MapPin, Calendar, Image, MessageSquare, Edit } from 'lucide-react';

// Import the Chatbot component we created
import { Chatbot } from '@/components/Chatbot';

const NGODashboard = () => {
  // State for the manual form remains the same
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
    
    setTimeout(() => {
      console.log('Submitted data:', formData);
      toast({
        title: "Data Submitted Successfully!",
        description: "Your field data has been uploaded for verification",
      });
      setFormData({ projectName: '', location: '', date: '', fieldImages: null, droneData: null });
      const form = document.getElementById('ngo-form') as HTMLFormElement;
      if (form) form.reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <DashboardHeader 
          title="NGO Project Portal" 
          subtitle="Submit your project via our AI assistant or the manual form."
        />
        
        {/* ## Tabbed Interface for Submission Methods ## */}
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chat">
              <MessageSquare className="h-4 w-4 mr-2" />
              AI Chat Submission
            </TabsTrigger>
            <TabsTrigger value="form">
              <Edit className="h-4 w-4 mr-2" />
              Manual Form Submission
            </TabsTrigger>
          </TabsList>
          
          {/* ## AI Chatbot Content ## */}
          <TabsContent value="chat">
             <Card className="mt-4 border-blue-900/50">
              <CardContent className="p-0">
                {/* The Chatbot component is placed here */}
                <Chatbot />
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* ## Manual Form Content ## */}
          <TabsContent value="form">
            <Card className="mt-4 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-primary" />
                  <span>Submit Field Data Manually</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Your original form is now nested inside this tab */}
                <form id="ngo-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {/* Project Name */}
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name <span className="text-destructive">*</span></Label>
                    <Input id="projectName" name="projectName" placeholder="e.g., Coastal Greenbelt Restoration" value={formData.projectName} onChange={handleInputChange} required />
                  </div>
                  {/* GPS Coordinates */}
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center space-x-2"><MapPin className="h-4 w-4" /><span>GPS Coordinates</span><span className="text-destructive">*</span></Label>
                    <Input id="location" name="location" placeholder="e.g., -1.2921, 36.8219" value={formData.location} onChange={handleInputChange} required />
                  </div>
                  {/* Collection Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center space-x-2"><Calendar className="h-4 w-4" /><span>Collection Date</span><span className="text-destructive">*</span></Label>
                    <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                  </div>
                  {/* Field Images */}
                  <div className="space-y-2">
                    <Label htmlFor="fieldImages" className="flex items-center space-x-2"><Image className="h-4 w-4" /><span>Field Images</span></Label>
                    <Input id="fieldImages" name="fieldImages" type="file" multiple accept="image/*" onChange={handleInputChange} />
                  </div>
                  {/* Drone Data */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="droneData" className="flex items-center space-x-2"><Upload className="h-4 w-4" /><span>Geospatial Files (KML, Shapefile)</span></Label>
                    <Input id="droneData" name="droneData" type="file" multiple onChange={handleInputChange} />
                  </div>
                  {/* Submit Button */}
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Manual Data'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Your "Recent Submissions" card can remain here, as it's relevant to both */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Upload className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your project submissions will appear here after verification.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NGODashboard;