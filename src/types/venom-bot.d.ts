declare module 'venom-bot' {
  export function create(
    sessionName: string,
    catchQR?: any,
    statusFind?: any,
    options?: any,
    browserInstance?: any
  ): Promise<any>;
  
  export interface Whatsapp {
    sendText(to: string, content: string): Promise<any>;
  }
} 