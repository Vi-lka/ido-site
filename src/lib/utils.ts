import {  clsx } from "clsx"
import type {ClassValue} from "clsx";
import { twMerge } from "tailwind-merge"
import Cryptr from "cryptr"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getShortDescription(
  description: string,
  length?: number,
) {
  const array = description.split(" ");

  const sliceLength = length ? length : 30;

  if (array.length >= sliceLength + 1) {
    return array.slice(0, sliceLength).join(" ") + "...";
  } else return array.join(" ");
}

export function getDateName({ day, month, year }: { day: number, month: number, year: number }): string {
  const date = new Date(year, month-1, day);
  const dateName = date.toLocaleString('ru', { day: "numeric", month: 'long', year: "numeric" });

  return dateName
}

export function encrypt(text: string) {
    const secretKey = process.env.NEXTAUTH_SECRET || "";
    const cryptr = new Cryptr(secretKey);

    const encryptedString = cryptr.encrypt(text);
    return encryptedString;
}

export function decrypt(encryptedString: string) {
    const secretKey = process.env.NEXTAUTH_SECRET || "";
    const cryptr = new Cryptr(secretKey);

    const text = cryptr.decrypt(encryptedString);
    return text;
}