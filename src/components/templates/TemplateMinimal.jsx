import React from 'react';

export default function TemplateMinimal({ data }) {
  const { personalInfo, education, experience, skills, projects } = data;
  const skillList = skills.split(',').map(s => s.trim()).filter(s => s !== '');

  return (
    <div className="p-10 h-full min-h-[1056px] bg-white text-gray-900 font-sans">
      <header className="border-b-2 border-gray-900 pb-6 mb-6 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personalInfo.fullName}</h1>
        <p className="text-xl text-gray-600 mb-4">{personalInfo.jobTitle}</p>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && <span>{personalInfo.github}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-6">
          <p className="text-gray-800 leading-relaxed text-sm">{personalInfo.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Experience</h2>
          <div className="space-y-4">
            {experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-sm font-medium text-gray-600">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Education</h2>
          <div className="space-y-4">
            {education.map(edu => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm font-medium text-gray-600">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">{edu.school}</p>
                <p className="text-sm text-gray-700 whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Projects</h2>
          <div className="space-y-4">
            {projects.map(proj => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{proj.title}</h3>
                  {proj.link && <span className="text-sm text-gray-600">{proj.link}</span>}
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-line">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {skillList.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Skills</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            {skillList.join(' • ')}
          </p>
        </section>
      )}
    </div>
  );
}
