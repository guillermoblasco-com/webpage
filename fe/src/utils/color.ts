import {stringHash} from "./stringHash";

interface ColorOfConfig {
  s:number;
  l:number;
}
export const colorOf = (text:string, config:ColorOfConfig) => {
  let number = stringHash(text);
  const h = number % 360;
  return `hsl(${h} ${config.s}% ${config.l}% / 1)`;
}
