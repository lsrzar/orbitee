// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      REACT_APP_GOOGLE_API_KEY: string;
    }
  }
}

export {};
