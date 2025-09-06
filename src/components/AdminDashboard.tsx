import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import DashboardHeader from './DashboardHeader';
import { Coins, TrendingUp, Loader2, Award, Link } from 'lucide-react';

interface VerifiedSubmission {
  id: string;
  projectName: string;
  location: string;
  date: string;
  status: 'Verified' | 'Carbon Credits Issued';
  carbonValue: number;
  transactionHash?: string;
  submittedBy: string;
}

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<VerifiedSubmission[]>([
    {
      id: '1',
      projectName: 'Mangrove Restoration Project',
      location: '-1.2921, 36.8219',
      date: '2024-01-15',
      status: 'Verified',
      carbonValue: 150,
      submittedBy: 'Ocean Conservation NGO'
    },
    {
      id: '2',
      projectName: 'Seagrass Restoration Initiative',
      location: '2.0469, 45.3182',
      date: '2024-01-08',
      status: 'Carbon Credits Issued',
      carbonValue: 200,
      transactionHash: '0x742d35Cc6634C0532925a3b8D7f0d75Df7...a8b3C',
      submittedBy: 'Blue Ocean Trust'
    },
    {
      id: '3',
      projectName: 'Coastal Wetland Protection',
      location: '-4.0435, 39.6682',
      date: '2024-01-10',
      status: 'Carbon Credits Issued',
      carbonValue: 180,
      transactionHash: '0x829f48Cc7829C0532925a3b8D7f0d75Df8...b9c4D',
      submittedBy: 'Marine Life Foundation'
    }
  ]);
  
  const [issuingId, setIssuingId] = useState<string | null>(null);
  const { toast } = useToast();

  const totalCreditsIssued = submissions
    .filter(s => s.status === 'Carbon Credits Issued')
    .reduce((sum, s) => sum + s.carbonValue, 0);

  const handleIssueCredits = async (id: string) => {
    setIssuingId(id);
    
    // Simulate blockchain tokenization process
    setTimeout(() => {
      const transactionHash = `0x${Math.random().toString(16).substring(2, 10)}Cc6634C0532925a3b8D7f0d75Df7...${Math.random().toString(16).substring(2, 6)}`;
      
      setSubmissions(prev =>
        prev.map(submission =>
          submission.id === id
            ? { 
                ...submission, 
                status: 'Carbon Credits Issued',
                transactionHash
              }
            : submission
        )
      );
      
      toast({
        title: "Carbon Credits Issued Successfully!",
        description: `Blockchain transaction completed: ${transactionHash.substring(0, 20)}...`,
      });
      
      setIssuingId(null);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Carbon Credits Issued':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <DashboardHeader 
          title="Admin Dashboard" 
          subtitle="NCCR Carbon Credit Management Portal"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Coins className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{totalCreditsIssued}</p>
                  <p className="text-sm text-muted-foreground">Total Credits Issued</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {submissions.filter(s => s.status === 'Verified').length}
                  </p>
                  <p className="text-sm text-muted-foreground">Pending Issuance</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">95%</p>
                  <p className="text-sm text-muted-foreground">Verification Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Link className="h-8 w-8 text-accent-foreground" />
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {submissions.filter(s => s.status === 'Carbon Credits Issued').length}
                  </p>
                  <p className="text-sm text-muted-foreground">Blockchain Txns</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Coins className="h-5 w-5 text-success" />
              <span>Verified Submissions</span>
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
                      <p>Carbon Value: {submission.carbonValue} tonnes CO₂</p>
                      {submission.transactionHash && (
                        <p className="font-mono text-xs">
                          Tx Hash: {submission.transactionHash}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusColor(submission.status)}>
                      {submission.status}
                    </Badge>
                    {submission.status === 'Verified' && (
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleIssueCredits(submission.id)}
                        disabled={issuingId === submission.id}
                      >
                        {issuingId === submission.id ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Issuing...
                          </>
                        ) : (
                          'Issue Credits'
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
            <CardTitle>Recent Blockchain Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {submissions
                .filter(s => s.transactionHash)
                .map((submission) => (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-foreground">{submission.projectName}</p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {submission.transactionHash}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-success">{submission.carbonValue} CO₂</p>
                      <p className="text-xs text-muted-foreground">Credits Issued</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;