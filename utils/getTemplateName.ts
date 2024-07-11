// getTemplateName.ts
import Templates from '@/app/(data)/Templates'


export const getTemplateName = (slug:string) => {
  const template = Templates.find(t => t.slug === slug);
  return template ? { name: template.name, icon: template.icon } : { name: 'Unknown', icon: '' };
};
