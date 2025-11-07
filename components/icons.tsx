
import React from 'react';

export const Menu: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const X: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const BrainCircuit: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.993.13a3 3 0 0 0 5.993-.13Zm0 0a3 3 0 1 0 5.993.13A3 3 0 0 0 12 5Z" />
    <path d="M12 12a3 3 0 1 0-5.993.13a3 3 0 0 0 5.993-.13Zm0 0a3 3 0 1 0 5.993.13A3 3 0 0 0 12 12Z" />
    <path d="M19 12h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1" />
    <path d="M5 12H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1" />
    <path d="M12 19a3 3 0 1 0-5.993.13a3 3 0 0 0 5.993-.13Zm0 0a3 3 0 1 0 5.993.13A3 3 0 0 0 12 19Z" />
    <path d="M12 12v3" />
    <path d="m14.5 5.5-3 4.5" />
    <path d="m9.5 5.5 3 4.5" />
  </svg>
);

export const BookOpen: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const School: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m4 6 8-4 8 4" />
    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
    <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
    <path d="M18 5v17" />
    <path d="M6 5v17" />
    <circle cx="12" cy="9" r="2" />
  </svg>
);

export const Rocket: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.66-.07 1.36-.34 2.03-.78.48-.31.85-.67 1.14-1.05.29-.38.5-.78.63-1.22.13-.42.19-.87.19-1.32s-.06-.9-.19-1.32a2.84 2.84 0 0 0-.63-1.22 3.1 3.1 0 0 0-1.14-1.05c-.67-.44-1.37-.71-2.03-.78C8.5 2.2 9.16.5 10.5.5c1.5 0 3 1.5 3 3 0 .62-.2 1.22-.5 1.78-.3.56-1.02 1.4-2.5 1.4.3 0 .6.02.9.05.67.07 1.32.23 1.9.47.58.24 1.09.57 1.52.98.43.41.78.89 1.05 1.43.27.54.44 1.13.5 1.76.06.6.06 1.2 0 1.8s-.14 1.22-.5 1.76a4.2 4.2 0 0 1-1.05 1.43c-.43.41-.94.74-1.52.98-.58.24-1.23.4-1.9.47-.3.03-.6.05-.9.05-1.5 0-2.2-.84-2.5-1.4-.3-.56-.5-1.16-.5-1.78 0-1.5 1.5-3 3-3 .55 0 1.09.15 1.58.42" />
  </svg>
);
