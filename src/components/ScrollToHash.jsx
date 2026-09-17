import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Cuando cambias de página, hace scroll al inicio.
// Si la URL trae un #hash (por ejemplo al hacer click en "Servicios"
// desde otra página, que navega a "/#servicios"), hace scroll suave
// hasta ese elemento en vez de quedarse arriba.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}