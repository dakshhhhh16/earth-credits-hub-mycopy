import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from './Navbar';
import Footer from './Footer';
import { Brain, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Blue Carbon
                  </span>
                  <br />
                  <span className="text-foreground">Registry</span>
                </h1>
                <p className="text-xl text-muted-foreground font-medium">
                  Transparent. Verifiable. Impactful.
                </p>
                <p className="text-lg text-muted-foreground max-w-lg">
                  A blockchain-powered platform for monitoring, reporting, and verification of blue carbon ecosystem restoration, ensuring trust and integrity for every carbon credit.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 flex items-center justify-center border border-border/50">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Mangrove Forest Visualization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Revolutionizing Blue Carbon Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with environmental science to create a transparent and verifiable blue carbon marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Smart MRV</h3>
                <p className="text-muted-foreground">
                  Leverage satellite imagery and AI to automatically verify plantation data and detect anomalies with unprecedented accuracy.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Trust on Blockchain</h3>
                <p className="text-muted-foreground">
                  Every verified plantation is immutably recorded on the blockchain, creating tamper-proof carbon credits that stakeholders can trust.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-success/20 to-success/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Community First</h3>
                <p className="text-muted-foreground">
                  Onboard NGOs, coastal panchayats, and communities to drive restoration efforts and ensure fair benefits for all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Why Choose Our Platform?
              </h2>
              <div className="space-y-4">
                {[
                  'Automated verification reduces costs by 70%',
                  'Blockchain ensures 100% data integrity',
                  'AI-powered monitoring detects issues early',
                  'Community-centric approach ensures fairness',
                  'Real-time reporting and analytics'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary/20 via-primary/20 to-secondary/20 flex items-center justify-center border border-border/50">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Community Dashboard Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                About Blue Carbon Registry
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Blue carbon ecosystems—mangroves, seagrass beds, and salt marshes—are among the most efficient carbon sinks on Earth, storing carbon at rates up to 10 times higher than terrestrial forests.
                </p>
                <p>
                  Our platform leverages blockchain technology and AI-powered monitoring to create a transparent, verifiable system for blue carbon restoration projects. We ensure that every carbon credit represents real, measurable environmental impact.
                </p>
                <p>
                  Built for the National Centre for Coastal Research (NCCR), Ministry of Earth Sciences, this platform represents the future of environmental verification and community-driven conservation.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-0 bg-card/50">
                <div className="text-2xl font-bold text-primary mb-2">10x</div>
                <div className="text-sm text-muted-foreground">Carbon Storage Efficiency</div>
              </Card>
              <Card className="p-6 text-center border-0 bg-card/50">
                <div className="text-2xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Blockchain Verified</div>
              </Card>
              <Card className="p-6 text-center border-0 bg-card/50">
                <div className="text-2xl font-bold text-success mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </Card>
              <Card className="p-6 text-center border-0 bg-card/50">
                <div className="text-2xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Community Impact</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the network of stakeholders restoring our blue carbon ecosystems and creating a sustainable future for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Login to Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" disabled>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;