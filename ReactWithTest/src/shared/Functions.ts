import { SelectedPage } from "./types";

export const handleScroll = (
  setSelectedPage: (selectedPage: SelectedPage) => void,
  selectedPage: SelectedPage
): void => {
  // Obtenez la div que vous souhaitez vérifier en utilisant son identifiant ou une référence.
  const divElement = document.getElementById(selectedPage);

  if (divElement) {
    const rect = divElement.getBoundingClientRect();
    if (rect.top >= -10 && rect.top <= 500) {
      setSelectedPage(selectedPage);
    }
  }
};
