import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Education = () => {
  const [activeTab, setActiveTab] = useState('msc');
  
  const educationData = {
    msc: {
      degree: 'MSc in Artificial Intelligence',
      institution: 'Utrecht University',
      period: '2023 - Present',
      logo: 'https://www.uu.nl/themes/custom/corp/src/images/uu-logo-en.svg',
      highlights: [
        'Thesis: Developed a multimodal learning pipeline leveraging audio, text, and visual features fromparent–child interaction videos to predict anxiety labels.',
        'Coursework: Supervised / Unsupervised / Reinforcement Learning, Natural Language Processing, Explainable AI, Data Mining, Pattern Recognition,Deep Learning, Computer Vision, Generative AI.'
      ]
    },
    bsc: {
      degree: 'BSc in Computer Science',
      institution: 'University of Cyprus',
      period: '2019 - 2023',
      logo: 'https://www.ucy.ac.cy/wp-content/uploads/2020/10/logo_en.png',
      highlights: [
        'Thesis: Developed a machine learning pipeline to analyze real-time physiological data from E4 wristbands, focusing on feature extraction and classification.'
        ,'GPA: 8.3/10'
      ]
    }
  };

  return (
    <section id="education" className="bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-16">
          <Tabs defaultValue="msc" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 bg-navy">
              <TabsTrigger 
                value="msc"
                className={`text-lg py-3 ${activeTab === 'msc' ? 'text-teal' : 'text-slate'}`}
                onClick={() => setActiveTab('msc')}
              >
                MSc in AI
              </TabsTrigger>
              <TabsTrigger 
                value="bsc" 
                className={`text-lg py-3 ${activeTab === 'bsc' ? 'text-teal' : 'text-slate'}`}
                onClick={() => setActiveTab('bsc')}
              >
                BSc in CS
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(educationData).map(([key, edu]) => (
              <TabsContent key={key} value={key} className="animate-fade-in-up">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-2">
                    <div className="card flex flex-col items-center justify-center p-8 h-full">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} Logo`}
                        className="max-h-40 mb-6 object-contain"
                      />
                      <h3 className="text-xl text-center font-semibold mb-2">{edu.institution}</h3>
                      <p className="text-slate-light text-center">{edu.period}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <div className="card h-full">
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-teal mb-6">{edu.institution}</p>
                      
                      <h4 className="text-white font-medium mb-4">Key Highlights</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-teal mr-2">▹</span>
                            <span className="break-words">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Education;
