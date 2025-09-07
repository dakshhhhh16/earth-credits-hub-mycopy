import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from './DashboardHeader'; // Ensure this path is correct
import { Upload, MessageSquare } from 'lucide-react';
import { Chatbot } from '@/components/chatbot'; // Adjusted path for clarity

const NGODashboard = () => {
  return (
    // The main background wrapper
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-slate-950">
      
      {/* Header with an updated subtitle */}
      <DashboardHeader 
        title="NGO Project Portal" 
        subtitle="Submit your project details using our AI assistant below."
      />
      
      {/* Main container for the dashboard content */}
      <main className="max-w-5xl mx-auto space-y-8 p-4 sm:p-6 lg:p-8">
        
        {/* The AI Chatbot is now the primary content, no tabs needed */}
        <Card className="shadow-lg bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-slate-200">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>AI Project Submission</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* The Chatbot component is placed directly here */}
            <Chatbot />
          </CardContent>
        </Card>
        
        {/* The "Recent Submissions" card remains */}
        <Card className="shadow-lg bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Upload className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your project submissions will appear here after verification.</p>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default NGODashboard;