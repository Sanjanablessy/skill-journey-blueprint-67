
import React from 'react';
import CareerAdvisor from '@/components/CareerAdvisor';

const CareerAdvisorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">AI Career Advisor</h1>
          <p className="text-lg text-muted-foreground">
            Get personalized career guidance powered by AI. Ask questions about career paths, 
            resume tips, interview preparation, and skill development.
          </p>
        </div>
        
        <CareerAdvisor />
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            This AI advisor provides general career guidance. For specific career decisions, 
            consider consulting with professional career counselors or mentors in your field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisorPage;
