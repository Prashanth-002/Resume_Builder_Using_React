import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, Wrench, FolderGit2, ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';

const Section = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 dark:bg-gray-700 rounded-md text-blue-600 dark:text-blue-400">
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

const Input = ({ label, value, onChange, type = "text", placeholder = "", multiline = false }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
    {multiline ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-y"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
      />
    )}
  </div>
);

export default function ResumeForm({ data, onUpdate, onUpdateList, onAdd, onRemove, onUpdateSkills }) {
  
  const renderPersonalInfo = () => (
    <Section title="Personal Details" icon={User} defaultOpen>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Full Name" value={data.personalInfo.fullName} onChange={(val) => onUpdate('personalInfo', 'fullName', val)} />
        <Input label="Job Title" value={data.personalInfo.jobTitle} onChange={(val) => onUpdate('personalInfo', 'jobTitle', val)} />
        <Input label="Email" type="email" value={data.personalInfo.email} onChange={(val) => onUpdate('personalInfo', 'email', val)} />
        <Input label="Phone" value={data.personalInfo.phone} onChange={(val) => onUpdate('personalInfo', 'phone', val)} />
        <Input label="Address" value={data.personalInfo.address} onChange={(val) => onUpdate('personalInfo', 'address', val)} />
        <Input label="LinkedIn (optional)" value={data.personalInfo.linkedin} onChange={(val) => onUpdate('personalInfo', 'linkedin', val)} />
        <Input label="GitHub (optional)" value={data.personalInfo.github} onChange={(val) => onUpdate('personalInfo', 'github', val)} />
      </div>
      <div className="mt-4">
        <Input label="Professional Summary" multiline value={data.personalInfo.summary} onChange={(val) => onUpdate('personalInfo', 'summary', val)} />
      </div>
    </Section>
  );

  const renderEducation = () => (
    <Section title="Education" icon={GraduationCap}>
      {data.education.map((edu, index) => (
        <div key={edu.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 relative mb-4">
          <button 
            onClick={() => onRemove('education', edu.id)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            title="Remove"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-8">
            <Input label="School / University" value={edu.school} onChange={(val) => onUpdateList('education', edu.id, 'school', val)} />
            <Input label="Degree / Major" value={edu.degree} onChange={(val) => onUpdateList('education', edu.id, 'degree', val)} />
            <Input label="Start Year" value={edu.startDate} onChange={(val) => onUpdateList('education', edu.id, 'startDate', val)} />
            <Input label="End Year" value={edu.endDate} onChange={(val) => onUpdateList('education', edu.id, 'endDate', val)} />
          </div>
          <div className="mt-4">
            <Input label="Description (optional)" multiline value={edu.description} onChange={(val) => onUpdateList('education', edu.id, 'description', val)} />
          </div>
        </div>
      ))}
      <button 
        onClick={() => onAdd('education', { id: Date.now().toString(), school: '', degree: '', startDate: '', endDate: '', description: '' })}
        className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Education
      </button>
    </Section>
  );

  const renderExperience = () => (
    <Section title="Experience" icon={Briefcase}>
      {data.experience.map((exp) => (
        <div key={exp.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 relative mb-4">
          <button 
            onClick={() => onRemove('experience', exp.id)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            title="Remove"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-8">
            <Input label="Company" value={exp.company} onChange={(val) => onUpdateList('experience', exp.id, 'company', val)} />
            <Input label="Position" value={exp.position} onChange={(val) => onUpdateList('experience', exp.id, 'position', val)} />
            <Input label="Start Date" value={exp.startDate} onChange={(val) => onUpdateList('experience', exp.id, 'startDate', val)} />
            <Input label="End Date" value={exp.endDate} onChange={(val) => onUpdateList('experience', exp.id, 'endDate', val)} />
          </div>
          <div className="mt-4">
            <Input label="Description" multiline value={exp.description} onChange={(val) => onUpdateList('experience', exp.id, 'description', val)} />
          </div>
        </div>
      ))}
      <button 
        onClick={() => onAdd('experience', { id: Date.now().toString(), company: '', position: '', startDate: '', endDate: '', description: '' })}
        className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Experience
      </button>
    </Section>
  );
  
  const renderProjects = () => (
    <Section title="Projects" icon={FolderGit2}>
      {data.projects.map((proj) => (
        <div key={proj.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 relative mb-4">
          <button 
            onClick={() => onRemove('projects', proj.id)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            title="Remove"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-8">
            <Input label="Project Title" value={proj.title} onChange={(val) => onUpdateList('projects', proj.id, 'title', val)} />
            <Input label="Link (optional)" value={proj.link} onChange={(val) => onUpdateList('projects', proj.id, 'link', val)} />
          </div>
          <div className="mt-4">
            <Input label="Description" multiline value={proj.description} onChange={(val) => onUpdateList('projects', proj.id, 'description', val)} />
          </div>
        </div>
      ))}
      <button 
        onClick={() => onAdd('projects', { id: Date.now().toString(), title: '', link: '', description: '' })}
        className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Project
      </button>
    </Section>
  );

  const renderSkills = () => (
    <Section title="Skills" icon={Wrench}>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Enter your skills separated by commas.</p>
      <Input 
        multiline
        label=""
        placeholder="e.g. React, JavaScript, HTML, CSS"
        value={data.skills} 
        onChange={(val) => onUpdateSkills(val)} 
      />
    </Section>
  );

  return (
    <div className="space-y-6 pb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Resume Content</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Fill in your details to generate your perfect resume.</p>
      </div>
      
      {renderPersonalInfo()}
      {renderExperience()}
      {renderEducation()}
      {renderProjects()}
      {renderSkills()}
    </div>
  );
}
