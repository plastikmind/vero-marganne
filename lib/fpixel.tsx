export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

// Extend the Window interface to recognize the fbq property
export const pageview = () => {
    (window as any).fbq('track', 'PageView');
  }


// https://developers.facebook.com/docs/facebook-pixel/advanced/

interface Window {
    fbq: (eventName: string, eventValue: string, options?: any) => void;
}

// Define the function with proper types
export const event = (name: string, options: Record<string, any> = {}) => {
    (window as any).fbq('track', name, options);
  }
  