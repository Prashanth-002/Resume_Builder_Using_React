import React from 'react';

export default function TemplateCreative({ data }) {
  const { personalInfo, education, experience, skills, projects } = data;
  const skillList = skills.split(',').map(s => s.trim()).filter(s => s !== '');

  return (
    <div className="h-full min-h-[1056px] bg-amber-50 text-gray-800 font-sans relative overflow-hidden flex flex-col">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-bl-[100%] opacity-20 -z-0"></div>

      <header className="p-10 relative z-10 bg-amber-400/10">
        <h1 className="text-5xl font-extrabold text-amber-900 tracking-tight mb-2">{personalInfo.fullName}</h1>
        <p className="text-2xl font-bold text-amber-600 mb-6">{personalInfo.jobTitle}</p>
        
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-sm font-medium text-amber-900/80">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      <div className="flex flex-col sm:flex-row flex-1 p-10 gap-10">
        {/* Left Column */}
        <div className="sm:w-2/3 space-y-10">
          {personalInfo.summary && (
            <section>
              <h2 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                Profile
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium">{personalInfo.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map(exp => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-amber-300">
                    <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[7px] top-1.5 ring-4 ring-amber-50"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg text-gray-900">{exp.position}</h3>
                      <span className="text-sm font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="font-semibold text-gray-700 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                Projects
              </h2>
              <div className="space-y-6">
                {projects.map(proj => (
                  <div key={proj.id} className="bg-white p-5 rounded-2xl shadow-sm border border-amber-100">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{proj.title}</h3>
                    {proj.link && <p className="text-sm text-amber-600 font-medium mb-2">{proj.link}</p>}
                    <p className="text-sm text-gray-600 whitespace-pre-line">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="sm:w-1/3 space-y-10">
          {education.length > 0 && (
            <section>
              <h2 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                Edu
              </h2>
              <div className="space-y-6">
                {education.map(edu => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-sm font-bold text-amber-600 mb-1">{edu.startDate} - {edu.endDate}</p>
                    <p className="text-sm text-gray-700 font-medium mb-1">{edu.school}</p>
                    <p className="text-xs text-gray-500">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skillList.length > 0 && (
            <section>
              <h2 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white text-amber-900 font-bold text-xs rounded-xl shadow-sm border border-amber-100">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
