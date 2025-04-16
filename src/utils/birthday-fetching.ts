import { GetBirthday } from "~/services/get-birthday";

export function getBirthdayTitle(): string {
 const fetchBirthdayTitle = new GetBirthday();
 return fetchBirthdayTitle.isBirthday()
   ? "¡Feliz Cumpleaños!"
   : "¡Hola Alejandra!";
}