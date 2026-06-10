"use client"; // necesario en Next.js App Router

import { useState } from "react";

const unidades = [
  {
    id: "unidad-1",
    title: "Unidad 1",
    subtitle: "Tecnologías Limpias en los Procesos Industriales",
    image: "/docs/unidad-1/evaluacion-grupal.jpg",
    summary:
      "Comprender el marco y el porqué de las tecnologías limpias, y ver cómo se aplican en industrias químicas, petroquímicas e hidrocarburos para reducir residuos y consumo energético.",
    temas: [
      "Marco conceptual de tecnologías limpias.",
      "Prevención de residuos y producción más limpia.",
      "Aplicaciones en industrias químicas, petroquímicas e hidrocarburos.",
      "Lectura postulada, cuaderno y caso de estudio.",
    ],
    docs: [
      {
        label: "Cuaderno de Tecnologías Limpias",
        href: "/docs/unidad-1/cuaderno-de-tecnologias-limpias.pdf",
      },
      {
        label: "Lectura PML",
        href: "/docs/unidad-1/lectura-pml.pdf",
      },
      {
        label: "Artículo BMyE y PML",
        href: "/docs/unidad-1/articulo-bmye-pml.pdf",
      },
      {
        label: "Línea de tiempo química petroquímica",
        href: "/docs/unidad-1/linea-tiempo-quimica-petroquimica.pdf",
      },
      {
        label: "Grupo 4 - Taller 1",
        href: "/docs/unidad-1/grupo-4-taller-1.pdf",
      },
      {
        label: "Presentación PL1",
        href: "/docs/unidad-1/pl1.pptx",
      },
      {
        label: "Presentación PL4",
        href: "/docs/unidad-1/pl4.pdf",
      },
      {
        label: "Gráfico de balance de materia",
        href: "/docs/unidad-1/grafico-balance-materia.png",
      },
      {
        label: "IF segunda unidad tecnologías limpias",
        href: "/docs/unidad-1/if-segunda-unidad-tecnologias-limpias.pdf",
      },
      {
        label: "IF TEC",
        href: "/docs/unidad-1/if-tec.pdf",
      },
      {
        label: "Responsabilidad Social II",
        href: "/docs/unidad-1/responsabilidad-social-ii.pdf",
      },
      {
        label: "Presentación PL2",
        href: "/docs/unidad-1/pl2-26.pptx",
      },
    ],
  },
  {
    id: "unidad-2",
    title: "Unidad 2",
    subtitle: "Balance de materia y energía en procesos industriales",
    image: "/docs/unidad-2/grafico-balance-materia.png",
    summary:
      "Explorar cómo cada proceso industrial es un flujo de masa y energía que debe cerrarse. Desde comprender entradas, salidas y pérdidas hasta visualizar cómo estos factores impactan la eficiencia y sostenibilidad operativa, esta unidad transforma la visión técnica de una planta industrial.",
    temas: [
      "Balance de materia y energía: Entiende cómo cada entrada, salida y pérdida afecta la eficiencia y sostenibilidad de una planta industrial.",
      "Ejercicios de balance: Entrena tu mente para desmontar problemas complejos en bloques más simples y encuentra soluciones paso a paso con enfoque ambiental.",
      "Caso de estudio Vietnam: Aprende a adaptar conceptos técnicos a condiciones específicas de contextos reales y desarrolla tu mirada crítica sobre procesos industriales.",
      "Balance de materia y PML: Integra eficiencia técnica con prevención ambiental para proponer soluciones que reduzcan residuos y aprovechen mejor la materia prima.",
      "Análisis PINCH: Identifica oportunidades de ahorro energético y plantea mejoras concretas en intercambios térmicos para procesos sostenibles.",
      "Taller de balance por sector industrial: Compara cómo funcionan los balances en distintas áreas y aprende a trabajar con información real de planta.",
      "Taller grupal Cusco Vietnam: Interpreta resultados en equipo y mejora tu capacidad de comunicación técnica y presentación de recomendaciones.",
      "Investigación II: Organiza datos concretos, documenta hallazgos y elabora informes técnicos basados en evidencia clara.",
      "Responsabilidad social II: Integra consideraciones sociales y éticas en proyectos técnicos para garantizar sostenibilidad holística.",
      "Evaluación grupal: Demuestra tu aprendizaje, coordina con el equipo y comunica intentos técnicos con estructura y claridad.",
      "Gráfico de Balance de Materia: Visualiza el comportamiento real de procesos complejos através de representaciones gráficas que facilitan el análisis.",
    ],
    docs: [
      {
        label: "Balance de materia",
        href: "/docs/unidad-2/balance-materia.pdf",
      },
      {
        label: "Ejercicios de balance de materia y energía",
        href: "/docs/unidad-2/ejercicios-balance-petroquimico.pdf",
      },
      {
        label: "Caso de estudio Vietnam",
        href: "/docs/unidad-2/caso-vietnam.pdf",
      },
      {
        label: "Artículo BMyE y PML",
        href: "/docs/unidad-2/if-segunda-unidad-tecnologias-limpias.pdf",
      },
      {
        label: "Thermal Integration in Sugar Production Using Pinch",
        href: "/docs/unidad-2/if-tec.pdf",
      },
      {
        label: "Taller Petroquímico",
        href: "/docs/unidad-2/ejercicios-balance-petroquimico.pdf",
      },
      {
        label: "Taller Cusco Vietnam",
        href: "/docs/unidad-2/caso-vietnam.pdf",
      },
      {
        label: "Investigación II (PDF)",
        href: "/docs/unidad-2/if-segunda-unidad-tecnologias-limpias.pdf",
      },
      {
        label: "Tabla IF (XLSX)",
        href: "/docs/unidad-2/if-de-tecnologias-segunda-unidad.xlsx",
      },
      {
        label: "Responsabilidad Social II",
        href: "/docs/unidad-2/responsabilidad-social-ii.pdf",
      },
      {
        label: "Evaluación Grupal",
        href: "/docs/unidad-2/examen-grupal.pdf",
      },
      {
        label: "Gráfico de Balance de Materia",
        href: "/docs/unidad-2/grafico-balance-materia.png",
      },
    ],
  },
  {
    id: "unidad-3",
    title: "Unidad 3",
    subtitle: "Implementación de Producción Más Limpia",
    summary:
      "Aprende cómo implementar programas de Producción Más Limpia (PML) en tu industria. Desde evaluar la factibilidad técnica y económica hasta aplicar normas internacionales de gestión energética, esta unidad te capacita para transformar procesos en sistemas sostenibles y eficientes.",
    temas: [
      "Implementación PML: Pasos prácticos y estratégicos para llevar la teoría a la realidad operativa.",
      "Factibilidad Técnica y Económica: Analiza viabilidad de mejoras considerando recursos y costos reales.",
      "Guía de Implementación PML 2da versión INACAL: Metodología oficial para programas sostenibles.",
      "Mejoras Técnicas en Gestión de Energía: Optimiza eficiencia energética en sectores industriales.",
      "ISO 50001: Norma internacional para sistemas de gestión de energía en tu organización.",
      "Caso de Estudio Curtiembre Piel Inka: Aplicación real de PML en industria de curtiembre.",
    ],
    docs: [
      {
        label: "Implementación PML",
        href: "/docs/unidad-3/implementacion-pml.pptx",
      },
      {
        label: "Factibilidad Técnica y Económica",
        href: "/docs/unidad-3/factibilidad-tecnica-economica.pdf",
      },
      {
        label: "Guía Implementación PML 2da versión INACAL",
        href: "/docs/unidad-3/guia-implementacion-pml-inacal.pdf",
      },
      {
        label: "Mejoras Técnicas en Gestión de Energía y Eficiencia Energética",
        href: "/docs/unidad-3/mejoras-tecnicas-gestion-energia.pdf",
      },
      {
        label: "ISO 50001 - Guía de Implementación",
        href: "/docs/unidad-3/iso-50001-guia.pdf",
      },
      {
        label: "Caso Curtiembre Piel Inka",
        href: "/docs/unidad-3/piel-inka.pdf",
      },
    ],
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1f1129] via-[#3b1d4f] to-[#120818] text-white">
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Imagen amplificada"
              className="h-full w-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_30%)]" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-200/80">
            Tecnologías Limpias en los Procesos Industriales
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Curso de Tecnologías Limpias en los Procesos Industriales
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300/90 sm:text-lg">
            Un resumen organizado de las unidades, contenidos y documentos reales de tu curso, con enlaces directos a los apuntes dentro de public/docs.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#unidades"
              className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Ver unidades
            </a>
            <span className="rounded-full border border-cyan-400/40 bg-white/5 px-5 py-3 text-sm text-cyan-100">
              Organización de contenidos reales
            </span>
          </div>
        </div>
      </section>

      <section id="unidades" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-200/80">
            Curso en 3 unidades
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Tecnologías Limpias en los Procesos Industriales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Mira cada unidad organizada como en la página que mostraste: títulos claros, tarjetas con contenido y enlaces directos a los documentos.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {unidades.map((unidad) => (
            <article
              key={unidad.id}
              className="rounded-[2rem] border border-pink-400/10 bg-white/5 p-6 shadow-2xl shadow-pink-500/10 backdrop-blur-xl transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">{unidad.title}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{unidad.subtitle}</h3>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-100">
                  {unidad.title.split(" ")[1]}
                </span>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-pink-400/10 bg-pink-500/10 p-5">
                <p className="text-sm font-semibold text-pink-100">Resumen rápido</p>
                <p className="mt-3 text-slate-200">{unidad.summary}</p>
              </div>

              {unidad.image && (
                <div className="mt-6 overflow-hidden rounded-3xl border border-pink-400/10 bg-slate-950/90 cursor-pointer transition hover:shadow-lg hover:shadow-pink-500/30" onClick={() => setSelectedImage(unidad.image)}>
                  <img
                    src={unidad.image}
                    alt={`Imagen de ${unidad.title}`}
                    className="h-48 w-full object-cover"
                  />
                </div>
              )}

              <div className="mt-6 space-y-3">
                {unidad.temas.map((tema) => (
                  <div key={tema} className="rounded-2xl border border-pink-400/10 bg-slate-950/90 p-4 text-sm text-slate-200">
                    {tema}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-pink-400/10 bg-slate-950/90 p-5">
                <h4 className="text-sm font-semibold text-pink-100">Documentos</h4>
                <div className="mt-4 space-y-3">
                  {unidad.docs.map((doc) => (
                    <a
                      key={doc.href}
                      href={doc.href}
                      className="block rounded-2xl border border-pink-500/10 bg-pink-500/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-500/20"
                    >
                      {doc.label}
                    </a>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
