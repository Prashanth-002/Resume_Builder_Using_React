import React from 'react';

export default function TemplateTech({ data }) {
  const { personalInfo, education, experience, skills, projects } = data;
  const skillList = skills.split(',').map(s => s.trim()).filter(s => s !== '');

  return (
    <div className="p-10 h-full min-h-[1056px] bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] pb-6 mb-8">
        <h1 className="text-4xl font-bold text-[#58a6ff] mb-2">{personalInfo.fullName} <span className="text-[#8b949e] font-normal text-2xl">~/{personalInfo.jobTitle.replace(/\s+/g, '-').toLowerCase()}</span></h1>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8b949e]">
          {personalInfo.email && <span><span className="text-[#ff7b72]">email:</span> {personalInfo.email}</span>}
          {personalInfo.phone && <span><span className="text-[#ff7b72]">tel:</span> {personalInfo.phone}</span>}
          {personalInfo.address && <span><span className="text-[#ff7b72]">loc:</span> {personalInfo.address}</span>}
          {personalInfo.github && <span><span className="text-[#ff7b72]">git:</span> {personalInfo.github}</span>}
          {personalInfo.linkedin && <span><span className="text-[#ff7b72]">in:</span> {personalInfo.linkedin}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-8">
          <p className="text-[#8b949e] leading-relaxed text-sm"><span className="text-[#79c0ff]">/** </span>{personalInfo.summary}<span className="text-[#79c0ff]"> */</span></p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#e6edf3] mb-4 flex items-center gap-2">
            <span className="text-[#3fb950]">{'>'}</span> Experience
          </h2>
          <div className="space-y-6 border-l-2 border-[#30363d] pl-4 ml-2">
            {experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-[#d2a8ff] text-lg">{exp.position}</h3>
                  <span className="text-xs text-[#8b949e] bg-[#21262d] px-2 py-1 rounded">[{exp.startDate} - {exp.endDate}]</span>
                </div>
                <p className="text-sm font-semibold text-[#a5d6ff] mb-2">@{exp.company}</p>
                <div className="text-sm text-[#8b949e] whitespace-pre-line leading-relaxed">
                  {exp.description.split('\n').filter(Boolean).map((line, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-[#30363d]">-</span>
                      <span>{line.replace(/^-\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#e6edf3] mb-4 flex items-center gap-2">
            <span className="text-[#3fb950]">{'>'}</span> Projects
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {projects.map(proj => (
              <div key={proj.id} className="border border-[#30363d] rounded-md p-4 bg-[#161b22]">
                <h3 className="font-bold text-[#58a6ff] mb-1">{proj.title}</h3>
                {proj.link && <p className="text-xs text-[#8b949e] mb-2 hover:text-[#58a6ff] hover:underline cursor-pointer">{proj.link}</p>}
                <p className="text-sm text-[#8b949e] whitespace-pre-line truncate-lines-3">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#e6edf3] mb-4 flex items-center gap-2">
              <span className="text-[#3fb950]">{'>'}</span> Education
            </h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id}>
                  <h3 className="font-bold text-[#d2a8ff]">{edu.degree}</h3>
                  <p className="text-sm text-[#a5d6ff]">{edu.school}</p>
                  <p className="text-xs text-[#8b949e] mb-1 block">[{edu.startDate} - {edu.endDate}]</p>
                  <p className="text-sm text-[#8b949e] truncate">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skillList.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#e6edf3] mb-4 flex items-center gap-2">
              <span className="text-[#3fb950]">{'>'}</span> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-[#21262d] border border-[#30363d] rounded text-xs text-[#c9d1d9]">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
