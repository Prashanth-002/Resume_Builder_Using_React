import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Moon, Sun, Download, LayoutTemplate } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { initialResumeState } from './utils/initialState';

function App() {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialResumeState;
      }
    }
    return initialResumeState;
  });

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [template, setTemplate] = useState('modern'); // modern, minimal, creative, elegant, tech
  
  const resumeRef = useRef();
  
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${resumeData.personalInfo.fullName || 'Resume'}`,
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleUpdate = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };
  
  const handleUpdateList = (section, id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleAddListItem = (section, newItem) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const handleRemoveListItem = (section, id) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };
  
  const handleUpdateSkills = (value) => {
    setResumeData(prev => ({
      ...prev,
      skills: value
    }));
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white dark:bg-gray-800 shadow-sm z-10 sticky top-0 no-print border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutTemplate className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">ResumeBuilder</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={template} 
              onChange={(e) => setTemplate(e.target.value)}
              className="px-3 py-1.5 border rounded-md text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="modern">Modern</option>
              <option value="minimal">Minimal</option>
              <option value="creative">Creative</option>
              <option value="elegant">Elegant</option>
              <option value="tech">Tech</option>
            </select>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={() => handlePrint()}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md justify-center transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 md:overflow-y-auto p-4 md:p-8 bg-gray-50 dark:bg-gray-900 no-print border-r dark:border-gray-800 border-gray-200">
          <ResumeForm 
            data={resumeData} 
            onUpdate={handleUpdate}
            onUpdateList={handleUpdateList}
            onAdd={handleAddListItem}
            onRemove={handleRemoveListItem}
            onUpdateSkills={handleUpdateSkills}
          />
        </div>
        <div className="md:w-1/2 flex justify-center p-4 md:p-8 bg-gray-200 dark:bg-gray-800 md:overflow-y-auto print:p-0 print:w-full print:bg-white print:overflow-visible">
          <ResumePreview 
            ref={resumeRef}
            data={resumeData} 
            template={template} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;
