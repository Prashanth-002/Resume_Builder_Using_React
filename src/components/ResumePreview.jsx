import React, { forwardRef } from 'react';
import TemplateModern from './templates/TemplateModern';
import TemplateMinimal from './templates/TemplateMinimal';
import TemplateCreative from './templates/TemplateCreative';
import TemplateElegant from './templates/TemplateElegant';
import TemplateTech from './templates/TemplateTech';

const ResumePreview = forwardRef(({ data, template }, ref) => {
  const renderTemplate = () => {
    switch (template) {
      case 'minimal':
        return <TemplateMinimal data={data} />;
      case 'creative':
        return <TemplateCreative data={data} />;
      case 'elegant':
        return <TemplateElegant data={data} />;
      case 'tech':
        return <TemplateTech data={data} />;
      case 'modern':
      default:
        return <TemplateModern data={data} />;
    }
  };

  return (
    <div 
      ref={ref} 
      className="bg-white mx-auto shadow-2xl print:shadow-none w-full max-w-[210mm] min-h-[297mm] overflow-hidden relative print:w-[210mm] print:h-[297mm] print:overflow-hidden print:p-0"
    >
      {renderTemplate()}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
