import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight, CheckCircle, Waves, Leaf, Database, Satellite, Users } from 'lucide-react';

// SUGGESTION: For a true "big tech" feel, consider adding a professional sans-serif font
// like 'Inter' or 'Satoshi'. You can add this in your `index.css` and configure it in `tailwind.config.js`.

const Homepage = () => {
  return (
    // The overall structure is good. We'll refine the details within each section.
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      {/* BACKGROUND ELEMENTS: Made them subtler by reducing opacity and slowing them down further.
          This makes them ambient rather than distracting. */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-ping-slow"></div>
      </div>

      {/* All content is wrapped in a relative z-10 container to sit above the background */}
      <main className="relative z-10">

        {/* HERO SECTION: Increased vertical padding for more breathing room. */}
        <section className="pt-24 pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Hero Content: Refined typography and spacing */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Waves className="h-5 w-5" />
                  <span className="text-sm font-semibold tracking-widest uppercase">Blue Carbon Ecosystems</span>
                </div>
                
                {/* HEADLINE: Adjusted tracking (letter-spacing) for a more modern, spacious feel. */}
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter leading-tight">
                  The Trust Layer for 
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Blue Carbon
                  </span>
                </h1>
                
                {/* DESCRIPTION: Rephrased for clarity and impact. */}
                <p className="text-lg text-slate-300 max-w-lg">
                  Our platform uses blockchain and satellite-based AI to provide transparent, verifiable, and community-focused monitoring for blue carbon ecosystem restoration.
                </p>
              
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/login">
                    <Button size="lg" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 hover:scale-105 group shadow-lg shadow-cyan-500/20">
                      Access the Portal
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto text-slate-300 hover:text-white hover:bg-slate-800/50">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* HERO VISUAL: Replaced the generic placeholder with a more abstract and dynamic visual
                  that suggests layers of data, technology, and nature. This feels more custom and less templated. */}
              <div className="relative aspect-square flex items-center justify-center">
                {/* Outer rings for depth */}
                <div className="absolute w-full h-full rounded-full border border-slate-700/50 animate-pulse-slower"></div>
                <div className="absolute w-2/3 h-2/3 rounded-full border border-slate-800 animate-pulse-slow"></div>
                
                {/* Central glowing element */}
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-xl"></div>
                
                {/* Floating icon */}
               
                  
                
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION: Changed to left-aligned text within cards for better readability. */}
        <section id="features" className="py-24 bg-slate-900/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">
                A New Standard for Environmental Verification
              </h2>
              <p className="text-lg text-slate-300">
                We integrate advanced technology to bring unparalleled trust and efficiency to the blue carbon marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card: Refined design with left-aligned content and subtler hover effects. */}
              <Card className="group border-slate-800 bg-slate-900/50 hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8 space-y-4 text-left">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500 transition-colors">
                    <Satellite className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Smart MRV</h3>
                  <p className="text-slate-400">
                    Leverage satellite imagery and AI to automatically verify project data, ensuring accuracy and reducing manual overhead.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-slate-800 bg-slate-900/50 hover:bg-slate-800/60 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-8 space-y-4 text-left">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:border-emerald-500 transition-colors">
                    <Database className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Immutable Ledger</h3>
                  <p className="text-slate-400">
                    Every transaction and verified credit is recorded on a blockchain, creating a tamper-proof audit trail for all stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-slate-800 bg-slate-900/50 hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8 space-y-4 text-left">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500 transition-colors">
                    <Users className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Community Empowerment</h3>
                  <p className="text-slate-400">
                    Onboard local communities, NGOs, and panchayats to drive restoration efforts and ensure equitable benefit sharing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION: Flipped layout to add variety.
            Replaced generic image with a more engaging "mock UI" element. */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Mock UI Visual: This feels more concrete than an icon and visually explains the product. */}
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-xl">
                  <div className="shadow-lg shadow-slate-950/50">
                    {/* Mock Header */}
                    <div className="p-3 bg-slate-800/70 rounded-t-lg flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* Mock Content */}
                    <div className="p-6 bg-slate-900 rounded-b-lg space-y-4">
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-white">Pichavaram Mangrove Forest</h4>
                            <span className="text-xs font-mono px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded">VERIFIED</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <div className="text-sm text-slate-400 grid grid-cols-3 gap-4">
                            <div><span className="font-bold text-white">1,250</span> ha Planted</div>
                            <div><span className="font-bold text-white">8,200</span> tCO₂e Sequestered</div>
                            <div><span className="font-bold text-white">98%</span> Health</div>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter text-white">
                  Designed for <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Impact and Scale</span>
                </h2>
                <p className="text-lg text-slate-300">
                    Our unified platform streamlines the entire lifecycle of a blue carbon project, from planting to credit issuance.
                </p>
                <div className="space-y-3 pt-2">
                  {[
                    'Automated verification reduces costs and complexity.',
                    'Blockchain ensures full data integrity and transparency.',
                    'AI-powered monitoring provides real-time project insights.',
                    'Directly connects funders with high-impact local projects.',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION: Kept the layout but refined the content presentation and stat cards. */}
        <section id="about" className="py-24 bg-slate-900/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">
                    The Power of Coastal Ecosystems
                </h2>
                <p className="text-lg text-slate-300">
                    Blue carbon ecosystems like mangroves are critical allies in the fight against climate change. Our mission, in partnership with the NCCR and Ministry of Earth Sciences, is to protect and restore them.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Stat Card: Simplified and more elegant design. */}
              <div className="p-6 text-center border border-slate-800 bg-slate-900/50 rounded-lg">
                <div className="text-4xl font-bold text-cyan-400 tracking-tighter">10x</div>
                <div className="text-sm text-slate-400 mt-1">More Carbon Storage</div>
              </div>
              <div className="p-6 text-center border border-slate-800 bg-slate-900/50 rounded-lg">
                <div className="text-4xl font-bold text-emerald-400 tracking-tighter">100%</div>
                <div className="text-sm text-slate-400 mt-1">On-Chain Verification</div>
              </div>
              <div className="p-6 text-center border border-slate-800 bg-slate-900/50 rounded-lg">
                <div className="text-4xl font-bold text-cyan-400 tracking-tighter">70%</div>
                <div className="text-sm text-slate-400 mt-1">Reduced MRV Costs</div>
              </div>
              <div className="p-6 text-center border border-slate-800 bg-slate-900/50 rounded-lg">
                <div className="text-4xl font-bold text-emerald-400 tracking-tighter">24/7</div>
                <div className="text-sm text-slate-400 mt-1">AI-Powered Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-28">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-6">
              Join the Movement
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you're a project developer, corporate partner, or community leader, our platform provides the tools to drive meaningful climate action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 hover:scale-105 group shadow-lg shadow-cyan-500/20">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* BEST PRACTICE: Move these keyframes into your `tailwind.config.js` file for better organization.
          This keeps your JSX clean and focused on structure. */}
      <style>{`
        @keyframes pulse-slow {
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slower {
          50% { opacity: 0.6; }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.8); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 7s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 9s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;