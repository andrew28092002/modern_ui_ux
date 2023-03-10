declare module "\*.svg" {
  import React from "react";
  export const svg: SVGSVGElement;
  const src: string;
  export default src;
}

declare module "\*.jpg" {
    const content: string;
    export default content;
  }
  
  declare module "\*.png" {
    const content: string;
    export default content;
  }
  
  declare module "\*.json" {
    const content: string;
    export default content;
  }