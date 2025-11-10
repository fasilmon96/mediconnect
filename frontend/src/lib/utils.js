import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



// phone formatting function for US numbers - ai generated 🎉
export const formatMoblie = (value) => {
  if (!value) return value;

  // എല്ലാ non-digit character-ുകളും നീക്കം ചെയ്യുക
  const phoneNumber = value.replace(/[^\d]/g, "");
  const length = phoneNumber.length;

  let formatted = "";

  // user ആദ്യം 91 ടൈപ്പ് ചെയ്താൽ bracket-ൽ കാണിക്കുക
  if (phoneNumber.startsWith("91")) {
    formatted = "(+91)";
    const mainNumber = phoneNumber.slice(2); // 91 കഴിഞ്ഞുള്ള ഭാഗം

    if (mainNumber.length > 0 && mainNumber.length <= 5) {
      formatted += ` ${mainNumber}`;
    } else if (mainNumber.length > 5) {
      formatted += ` ${mainNumber.slice(0, 5)}-${mainNumber.slice(5, 10)}`;
    }

    return formatted.trim();
  }

  // +91 ഇല്ലാത്ത normal number format ചെയ്യുക
  if (length <= 5) {
    return phoneNumber;
  }

  return `${phoneNumber.slice(0, 5)}-${phoneNumber.slice(5, 10)}`;
};

