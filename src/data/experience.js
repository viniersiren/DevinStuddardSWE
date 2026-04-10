export const insidrSite =
  import.meta.env.VITE_INSIDR_WEB_URL || '';
export const insidrAppStore =
  import.meta.env.VITE_INSIDR_APP_STORE_URL || '';

export const experience = [
  {
    id: 'insidr',
    company: 'Insidr',
    role: 'Lead Developer',
    context: 'Startup',
    startLabel: 'Feb 2025',
    endLabel: 'Present',
    summary:
      'Lead developer for the React Native mobile app and web platform. Stack includes Firebase, TypeScript, scraping pipelines, and Gemini integrations.',
    highlights: [
      'Utilizing Git and NoSQL databases to manage and scale the project',
      'Stack: Firebase, GCP, React, React Native, Node.js',
      'Managed integrations with Twilio, Gemini and MailChimp.',
      '15,000+ users; accountable for $250K+ in pass-through payments processed',
      'End-to-end ownership of mobile and web surfaces alongside backend and integrations',
      'Responsible for the entire development process, from initial concept to deployment',
    ],
    tech: ['React Native', 'TypeScript', 'Firebase', 'Gemini', 'Web', 'GCP', 'React', 'Node.js'],
    links: [
      ...(insidrSite
        ? [{ label: 'Website', href: insidrSite }]
        : []),
      ...(insidrAppStore
        ? [{ label: 'App Store', href: insidrAppStore }]
        : []),
    ],
  },
  {
    id: 'instamed',
    company: 'InstaMed — JPMorgan Chase',
    role: 'Technology Support Specialist',
    context: 'Healthcare payments',
    startLabel: 'Sept 2025',
    endLabel: 'Present',
    summary:
      'Technology support and internal tooling: JavaScript efficiency improvements and contributor to the AppOps dashboard automating manual workflows.',
    highlights: [
      'Worked direct with customers to support and create integrations with our payment service',
      'Used AWS buckets for data storage, CloudWatch and Datadog to manage logs/alerts, to support client success',
      'Contributed to ongoing knowledge articles, created defects and enhancements to improve the platform',

      'Integrations across email, Salesforce, SQL, AWS, CloudWatch, and ServiceNow',
      'Dashboard work reduces manual toil for operations and support teams',
    ],
    tech: ['JavaScript', 'Salesforce', 'SQL', 'AWS', 'CloudWatch', 'ServiceNow'],
    links: [
      {
        label: 'InstaMed',
        href: 'https://www.instamed.com/',
      },
    ],
  },
];
