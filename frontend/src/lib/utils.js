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



export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternon";
  if (hour >= 17 && hour < 21) return "Good Evening";
  return "Good Night"
}



export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};


export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ]
}


export const APPOINTMENT_TYPES = [
  { id: "consultation", name: "Consultation", duration: "30 min", price: "$60" },
  { id: "followup", name: "Follow-up Visit", duration: "20 min", price: "$40" },
  { id: "checkup", name: "Routine Checkup", duration: "45 min", price: "$80" },
  { id: "emergency", name: "Emergency Visit", duration: "30 min", price: "$150" },
  { id: "procedure", name: "Minor Procedure", duration: "60 min", price: "$200" },
];



