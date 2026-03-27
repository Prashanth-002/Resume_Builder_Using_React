import React from 'react';

export default function TemplateElegant({ data }) {
  const { personalInfo, education, experience, skills, projects } = data;
  const skillList = skills.split(',').map(s => s.trim()).filter(s => s !== '');

  return (
    <div className="p-12 h-full min-h-[1056px] bg-[#fcfbf9] text-[#2c3e50] font-serif">
      <header className="border-b-4 border-double border-[#2c3e50] pb-6 mb-8 text-center flex flex-col items-center">
        <h1 className="text-4xl font-normal uppercase tracking-[0.2em] mb-3">{personalInfo.fullName}</h1>
        <p className="text-lg italic text-[#596b7d] mb-5 font-sans tracking-widest">{personalInfo.jobTitle}</p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-sans text-gray-500 uppercase tracking-widest">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {(personalInfo.email || personalInfo.phone) && personalInfo.address && <span>|</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
          {personalInfo.linkedin && <span>|</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-8 text-center px-12">
          <p className="text-[15px] leading-relaxed italic text-gray-700">{personalInfo.summary}</p>
        </section>
      )}

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 space-y-8">
          {experience.length > 0 && (
            <section>
              <h2 className="text-xl font-medium uppercase tracking-[0.1em] border-b border-gray-300 mb-5 pb-2 text-[#2c3e50]">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-[17px] text-[#2c3e50]">{exp.position}</h3>
                      <span className="text-[13px] font-sans text-gray-500 uppercase tracking-wider">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[15px] italic text-[#596b7d] mb-2">{exp.company}</p>
                    <ul className="text-[14px] text-gray-700 leading-relaxed font-sans ml-4 list-disc space-y-1">
                      {exp.description.split('\n').filter(Boolean).map((line, i) => (
                        <li key={i}>{line.replace(/^-\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h2 className="text-xl font-medium uppercase tracking-[0.1em] border-b border-gray-300 mb-5 pb-2 text-[#2c3e50]">
                Selected Projects
              </h2>
              <div className="space-y-6">
                {projects.map(proj => (
                  <div key={proj.id} className="mb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-[17px] text-[#2c3e50]">{proj.title}</h3>
                    </div>
                    {proj.link && <p className="text-[13px] font-sans text-gray-500 mb-2">{proj.link}</p>}
                    <p className="text-[14px] text-gray-700 leading-relaxed font-sans">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-4 space-y-8">
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-medium uppercase tracking-[0.1em] border-b border-gray-300 mb-5 pb-2 text-[#2c3e50]">
                Education
              </h2>
              <div className="space-y-5">
                {education.map(edu => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-[15px] text-[#2c3e50] leading-snug mb-1">{edu.degree}</h3>
                    <p className="text-[14px] italic text-[#596b7d] mb-1">{edu.school}</p>
                    <p className="text-[12px] font-sans text-gray-500 uppercase tracking-wider mb-2">{edu.startDate} – {edu.endDate}</p>
                    <p className="text-[13px] text-gray-700 font-sans leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skillList.length > 0 && (
            <section>
              <h2 className="text-xl font-medium uppercase tracking-[0.1em] border-b border-gray-300 mb-5 pb-2 text-[#2c3e50]">
                Expertise
              </h2>
              <div className="flex flex-col gap-2 font-sans text-[14px] text-gray-700">
                {skillList.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#2c3e50] rounded-sm flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
