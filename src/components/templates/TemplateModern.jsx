import React from 'react';
import { Mail, Phone, MapPin, Globe, Link } from 'lucide-react';

export default function TemplateModern({ data }) {
  const { personalInfo, education, experience, skills, projects } = data;
  const skillList = skills.split(',').map(s => s.trim()).filter(s => s !== '');

  return (
    <div className="flex h-full min-h-[1056px] bg-white text-gray-800">
      {/* Left Column (Sidebar) */}
      <div className="w-1/3 bg-gray-800 text-white p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{personalInfo.fullName}</h1>
          <p className="text-blue-400 text-lg font-medium">{personalInfo.jobTitle}</p>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold uppercase border-b border-gray-600 pb-2 mb-4">Contact</h2>
          {personalInfo.email && (
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.address && (
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.address}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-3 text-sm">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-3 text-sm">
              <Link className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.github}</span>
            </div>
          )}
        </div>

        {skillList.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold uppercase border-b border-gray-600 pb-2 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column (Main Content) */}
      <div className="w-2/3 p-8 bg-white">
        {personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-800 pb-2 mb-4">Profile</h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{personalInfo.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-800 pb-2 mb-4">Experience</h2>
            <div className="space-y-6">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-800 pb-2 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-800 pb-2 mb-4">Projects</h2>
            <div className="space-y-4">
              {projects.map(proj => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-800">{proj.title}</h3>
                    {proj.link && <span className="text-sm text-blue-600">{proj.link}</span>}
                  </div>
                  <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
