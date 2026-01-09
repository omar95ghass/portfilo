
export type Language = 'en' | 'ar';

export interface LocalizedContent {
  en: string;
  ar: string;
}

export interface Project {
  id: number;
  title: LocalizedContent;
  description: LocalizedContent;
  longDescription: LocalizedContent;
  imageUrl: string;
  tags: {
    en: string[];
    ar: string[];
  };
  githubUrl: string;
}

export interface Translations {
  [key: string]: {
    // FIX: Changed type to `any` to allow for complex nested objects and arrays in translation data.
    [key: string]: any;
  };
}
