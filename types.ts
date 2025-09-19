export type Page = 'dashboard' | 'resume-analyzer' | 'skill-diagnostic' | 'career-hub' | 'interview-prep' | 'resume-builder';

export interface ResumeAnalysis {
  name: string;
  email: string;
  phone: string;
  summary: string;
  skills: string[];
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  projects: {
    name: string;
    description: string;
  }[];
  feedback?: string;
}

export interface SkillQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface DiagnosticFeedback {
    score: number;
    feedback: string;
    correctAnswers: { question: string, answer: string }[];
}

export interface JobRecommendation {
    title: string;
    company: string;
    location: string;
    description: string;
    matchPercentage: number;
    url: string;
}

export interface CourseRecommendation {
    title: string;
    provider: string;
    skills: string[];
    url: string;
}

export interface Opportunity {
    type: 'Job' | 'Internship' | 'Course';
    title: string;
    companyOrProvider: string;
    location?: string;
    details: string;
    url: string;
}


export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
    sources?: GroundingChunk[];
    opportunities?: Opportunity[];
}

export interface ResumeEvaluation {
    score: number;
    suggestions: string[];
}

export interface GroundingChunk {
    web: {
        uri: string;
        title: string;
    }
}

export interface ImprovementPlan {
    suggestions: {
        title: string;
        description: string;
        type: 'Project' | 'Internship' | 'Course';
    }[]
}