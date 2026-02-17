import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Evita scroll en el fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-crema rounded-xl shadow-2xl w-11/12 max-w-4xl h-5/6 p-8 overflow-y-auto animate-fadeIn">
        {/* Botón de cierre accesible */}
        <button
          onClick={onClose}
          className="text-tierra font-bold mb-4 hover:text-terracota focus:outline-none focus:ring-2 focus:ring-terracota rounded"
          aria-label="Cerrar modal"
        >
          ✖ Cerrar
        </button>

        {/* Contenido dinámico */}
        {children}
      </div>
    </div>
  );
}

