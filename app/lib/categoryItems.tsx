import { ChefHat, Globe, PartyPopper } from "lucide-react";
import { ReactNode } from "react";

interface iAppprops {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const CategoryItems: iAppprops[] = [
  { id: 0, name: "template", title: "Template", image: <Globe /> },
  { id: 1, name: "uikit", title: "Ui  Kits", image: <ChefHat /> },
  { id: 2, name: "icons", title: "Icons", image: <PartyPopper /> },
];
