import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-fondo min-h-screen flex flex-col">
      {/* Hero inicial con imagen ambiental */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-crema">
        <Image
          src="/hero-naturaleza.jpg" // coloca tu imagen en la carpeta /public
          alt="Naturaleza"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-serif mb-4">
            Francis Annet Velásquez Santos
          </h1>
          <p className="text-xl mb-6">
            Ingeniería Ambiental — Comprometida con la sostenibilidad y las
            tecnologías limpias
          </p>
          <a
            href="#courses"
            className="bg-crema text-tierra px-6 py-3 rounded-lg shadow hover:bg-arena hover:text-texto transition"
          >
            Ver mis cursos
          </a>
        </div>
      </section>

      {/* Sección de cursos */}
      <section
        id="courses"
        className="p-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="bg-crema shadow-md rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-tierra font-serif text-lg mb-2 flex items-center gap-2">
            💧 Tópicos de produccion mas limpia 
          </h2>
            <h3 className="text-gris font-sans mt-6">
            Tema 1 – Concepto de Producción Más Limpia
            </h3>
            <p className="text-gris font-sans mt-4">
            La Producción Más Limpia (PML) es una estrategia ambiental preventiva que busca reducir los impactos negativos desde el origen del proceso productivo. A diferencia de los enfoques tradicionales que se centran en el tratamiento de residuos, la PML actúa antes de que estos se generen. Este concepto se aplica tanto a procesos industriales como a productos y servicios, promoviendo un diseño más sostenible y responsable. La idea central es que la prevención es más eficiente y menos costosa que la corrección posterior. En el ámbito académico, comprender este concepto es esencial porque constituye la base de todas las prácticas y metodologías que se desarrollan en las siguientes unidades de estudio..
            </p>
            <h3 className="text-gris font-sans mt-6">
            Tema 2 – Principios Fundamentales
            </h3>
            <p className="text-gris font-sans mt-4">
            Los principios de la PML se centran en la prevención, la eficiencia y la sustitución de insumos peligrosos. La prevención implica anticiparse a los problemas ambientales antes de que ocurran. La eficiencia busca optimizar el uso de recursos como agua, energía y materias primas, reduciendo costos y emisiones. La sustitución, por su parte, propone reemplazar materiales tóxicos por alternativas más seguras y sostenibles. Estos principios no son aislados, sino complementarios: juntos forman un marco integral que guía la implementación de la PML en cualquier sector productivo.
            </p>
            <h3 className="text-gris font-sans mt-6">
            Tema 3 – Beneficios Ambientales y Económicos
             </h3>
             <p className="text-gris font-sans mt-4">
            La PML ofrece beneficios ambientales claros, como la reducción de emisiones contaminantes y la disminución de residuos sólidos. Esto contribuye directamente a la conservación de ecosistemas y a la salud pública. En el plano económico, las empresas que aplican PML reducen costos operativos gracias al menor consumo de recursos y al aprovechamiento de subproductos. Además, mejoran su competitividad en el mercado. Un beneficio adicional es la mejora de la imagen corporativa, ya que las organizaciones que adoptan prácticas sostenibles generan confianza y aceptación social.
             </p>
            <h3 className="text-gris font-sans mt-6">
            Tema 4 – Herramientas y Técnicas de PML
             </h3>
            <p className="text-gris font-sans mt-4">
            Entre las herramientas más utilizadas se encuentran las auditorías ambientales y los diagnósticos de procesos, que permiten identificar oportunidades de mejora. Las técnicas incluyen la implementación de tecnologías limpias, el rediseño de productos y la aplicación de buenas prácticas de mantenimiento y operación. Estas acciones aseguran un control más eficiente de los impactos. Además, se utilizan indicadores de desempeño ambiental para medir avances y resultados, lo que facilita la toma de decisiones basadas en datos concretos.
            </p>
           <h3 className="text-gris font-sans mt-6"
             Tema 5 – Implementación en la Industria
           </h3>
           <p className="text-gris font-sans mt-4">
              La implementación de la PML sigue un proceso estructurado: diagnóstico inicial, identificación de oportunidades, evaluación técnica y económica, aplicación de medidas y seguimiento. Este proceso requiere el compromiso de la gerencia y la participación activa de los trabajadores, ya que la cultura organizacional es clave para el éxito. Los casos de éxito en sectores como minería, agroindustria y textil demuestran que la PML no solo es viable, sino también rentable y beneficiosa para la sociedad en general.
             </p>
           <h3 className="text-gris font-sans mt-6"
            Tema 6 –¿Qué establece la ISO 10628?
          </h3>
          <p className="text-gris font-sans mt-4">
            La ISO 10628 es una norma internacional que establece las reglas para la elaboración de diagramas de flujo de procesos en ingeniería química e industrial. Su objetivo principal es garantizar que los procesos productivos se representen de manera clara, uniforme y comprensible en cualquier contexto. Esta norma define distintos tipos de diagramas, como los diagramas de bloques, los diagramas de flujo de procesos (PFD) y los diagramas de tuberías e instrumentación (P&ID). Cada uno cumple una función específica: los de bloques ofrecen una visión general, los PFD detallan equipos principales y corrientes de materiales, y los P&ID muestran conexiones, válvulas e instrumentos con precisión. En el marco de Producción Más Limpia, esta norma es fundamental porque permite visualizar de forma estandarizada dónde se generan residuos, emisiones o pérdidas de energía dentro de un proceso industrial. La aplicación de la ISO 10628 en Producción Más Limpia se centra en el diagnóstico ambiental de procesos. Al representar gráficamente cada etapa de producción, desde la entrada de materias primas hasta la salida de productos y residuos, se facilita la identificación de puntos críticos que requieren intervención. Por ejemplo, un PFD puede mostrar claramente dónde se desperdicia agua o energía, mientras que un P&ID permite localizar etapas que generan emisiones contaminantes o residuos peligrosos. Esta representación estandarizada no solo ayuda a los ingenieros y técnicos a comprender el proceso, sino que también facilita la comunicación con auditores ambientales y equipos internacionales, asegurando que todos trabajen con un mismo lenguaje visual. Los beneficios de aplicar la ISO 10628 en el contexto de Producción Más Limpia son múltiples. En primer lugar, aporta claridad visual y estandarización, evitando confusiones y asegurando que los diagramas sean interpretados de manera uniforme en cualquier país o sector. En segundo lugar, sirve como base para auditorías y certificaciones ambientales, ya que los diagramas cumplen con estándares reconocidos internacionalmente. Además, estos diagramas son herramientas esenciales para la mejora continua, pues permiten aplicar balances de masa y energía, identificar cuellos de botella y proponer soluciones preventivas. En definitiva, la ISO 10628 convierte los diagramas de flujo en una herramienta estratégica para implementar Producción Más Limpia de manera efectiva, integrando la gestión ambiental con la ingeniería de procesos.
            </p>
        </div>
        <div className="bg-crema shadow-md rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-tierra font-serif text-lg mb-2 flex items-center gap-2">
            🌱 Tecnologías Limpias
          </h2>
          <p className="text-gris font-sans">
            Innovaciones para reducir impactos ambientales.
          </p>
        </div>
        <div className="bg-crema shadow-md rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-tierra font-serif text-lg mb-2 flex items-center gap-2">
            ⚠️ Riesgos Ambientales
          </h2>
          <p className="text-gris font-sans">
            Evaluación y mitigación de riesgos ecológicos.
          </p>
        </div>
      </section>

      {/* Footer elegante */}
      <footer className="bg-tierra text-crema py-6 text-center font-sans mt-auto">
        <p>© 2026 Francis Annet Velásquez Santos — Portafolio Ambiental</p>
        <p className="text-sm text-arena">
          Diseñado con Next.js + Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
