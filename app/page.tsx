"use client"; // necesario en Next.js App Router

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
    subtitle: "Balance de Materia y Energía",
    image: "/docs/unidad-2/grafico-balance-materia.png",
    summary:
      "Analizar el balance de materia y energía en procesos industriales, para reducir pérdidas, hacer un mejor uso de recursos y mejorar la eficiencia sostenible.",
    temas: [
      "Balance de materia: entradas, salidas y acumulación.",
      "Balance de energía y eficiencia de procesos.",
      "Residuos, indicadores y controles de operación.",
      "Responsabilidad social y análisis crítico de resultados.",
    ],
    docs: [
      {
        label: "Balance de materia",
        href: "/docs/unidad-2/balance-materia.pdf",
      },
      {
        label: "Caso de estudio Vietnam",
        href: "/docs/unidad-2/caso-vietnam.pdf",
      },
      {
        label: "Thermal Integration in Sugar Production Using Pinch",
        href: "/docs/unidad-2/thermal-integration-sugar-pinch.pdf",
      },
      {
        label: "Ejercicios de Balance por Sector Petroquímico",
        href: "/docs/unidad-2/ejercicios-balance-petroquimico.pdf",
      },
      {
        label: "Responsabilidad Social (1)",
        href: "/docs/unidad-2/responsabilidad-social-1.pdf",
      },
      {
        label: "Examen grupal",
        href: "/docs/unidad-2/examen-grupal.pdf",
      },
    ],
  },
  {
    id: "unidad-3",
    title: "Unidad 3",
    subtitle: "Diagramas de Flujo y Procesos",
    summary:
      "Explorar diagramas de flujo, normas internacionales y herramientas de visualización para diseñar procesos industriales más claros y menos contaminantes.",
    temas: [
      "Diagramas de flujo y procesos industriales.",
      "Norma ISO 10628 para diagramas de procesos.",
      "Identificación de puntos críticos y oportunidades de mejora.",
    ],
    docs: [
      {
        label: "Diagrama de flujo Flexicoking",
        href: "/docs/unidad-3/diagrama-flujo-flexicoking.pdf",
      },
      {
        label: "ISO 10628 - Diagramas de procesos",
        href: "/docs/unidad-3/iso-10628-diagramas-procesos.pdf",
      },
      {
        label: "PL3.1",
        href: "/docs/unidad-3/pl3-1.pdf",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1f1129] via-[#3b1d4f] to-[#120818] text-white">
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
                <div className="mt-6 overflow-hidden rounded-3xl border border-pink-400/10 bg-slate-950/90">
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
