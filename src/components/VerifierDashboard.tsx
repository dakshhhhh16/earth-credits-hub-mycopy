import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import DashboardHeader from './DashboardHeader';
import { CheckCircle, XCircle, Eye, Loader2, Satellite, Brain } from 'lucide-react';

interface Submission {
  id: string;
  projectName: string;
  location: string;
  date: string;
  status: 'Pending' | 'Verified' | 'Fraud Detected';
  submittedBy: string;
}

const VerifierDashboard = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: '1',
      projectName: 'Mangrove Restoration Project',
      location: '-1.2921, 36.8219',
      date: '2024-01-15',
      status: 'Pending',
      submittedBy: 'Ocean Conservation NGO'
    },
    {
      id: '2',
      projectName: 'Coastal Wetland Protection',
      location: '-4.0435, 39.6682',
      date: '2024-01-10',
      status: 'Pending',
      submittedBy: 'Marine Life Foundation'
    },
    {
      id: '3',
      projectName: 'Seagrass Restoration Initiative',
      location: '2.0469, 45.3182',
      date: '2024-01-08',
      status: 'Verified',
      submittedBy: 'Blue Ocean Trust'
    }
  ]);
  
  const [verifyingId, setVerifyingId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleVerify = async (id: string) => {
    setVerifyingId(id);
    
    // Simulate AI verification process
    setTimeout(() => {
      const isVerified = Math.random() > 0.3; // 70% chance of verification
      const newStatus = isVerified ? 'Verified' : 'Fraud Detected';
      
      setSubmissions(prev =>
        prev.map(submission =>
          submission.id === id
            ? { ...submission, status: newStatus }
            : submission
        )
      );
      
      toast({
        title: `Verification ${isVerified ? 'Successful' : 'Failed'}`,
        description: isVerified 
          ? 'AI analysis confirms legitimate environmental data'
          : 'AI analysis detected potential data inconsistencies',
        variant: isVerified ? 'default' : 'destructive'
      });
      
      setVerifyingId(null);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'bg-success text-success-foreground';
      case 'Fraud Detected':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Verified':
        return <CheckCircle className="h-4 w-4" />;
      case 'Fraud Detected':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Eye className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <DashboardHeader 
          title="Verifier Dashboard" 
          subtitle="AI-Powered Environmental Data Verification"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>Submission Queue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">
                        {submission.projectName}
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-1 mt-1">
                        <p>Location: {submission.location}</p>
                        <p>Date: {submission.date}</p>
                        <p>Submitted by: {submission.submittedBy}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(submission.status)}>
                        {getStatusIcon(submission.status)}
                        <span className="ml-1">{submission.status}</span>
                      </Badge>
                      {submission.status === 'Pending' && (
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleVerify(submission.id)}
                          disabled={verifyingId === submission.id}
                        >
                          {verifyingId === submission.id ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Verifying...
                            </>
                          ) : (
                            'Verify with AI'
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Satellite className="h-5 w-5 text-secondary" />
                <span>Satellite Imagery</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Satellite className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Satellite imagery will appear here for verification
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resolution:</span>
                  <span className="text-foreground">10m/pixel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="text-foreground">2024-01-15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cloud Cover:</span>
                  <span className="text-foreground">5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Verification Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">
                  {submissions.filter(s => s.status === 'Verified').length}
                </div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">
                  {submissions.filter(s => s.status === 'Pending').length}
                </div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">
                  {submissions.filter(s => s.status === 'Fraud Detected').length}
                </div>
                <div className="text-sm text-muted-foreground">Flagged</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifierDashboard;