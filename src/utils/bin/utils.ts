import * as bin from './index';
import config from '../../../config.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n${commands}\n`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open(`https://${config.social.github}.github.io`, '_self');

  return 'Opening GUI version...';
};

export const vim = async (args: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=9n1dtmzqnCU', '_blank');

  return ``;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `Really? Emacs? You should be using 'vim'.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

  return `guest is not in the sudoers file.`;
};

export const clear = async (args?: string[]): Promise<string> => {
  return `clear`;
};