"use client"; // necesario en Next.js App Router

const unidades = [
  {
    id: "unidad-1",
    title: "Unidad 1",
    summary:
      "Esta unidad presenta los conceptos básicos de tecnologías limpias y cómo se aplican en procesos industriales para reducir residuos y consumo de energía.",
    temas: [
      "Concepto y beneficios de las tecnologías limpias.",
      "Producción más limpia y prevención de residuos.",
      "Buenas prácticas en procesos de separación y reacción.",
    ],
    docs: [
      {
        label: "Apuntes del cuaderno",
        href: "/docs/unidad-1/apuntes-cuaderno.pdf",
      },
      {
        label: "Evidencias de aprendizaje",
        href: "/docs/unidad-1/evidencias-aprendizaje.pdf",
      },
    ],
    groupWork: "Línea de tiempo química y petroquímica - primer trabajo grupal del Grupo 4",
  },
  {
    id: "unidad-2",
    title: "Unidad 2",
    summary:
      "En esta unidad se analiza el balance de materia y cómo optimizar recursos para construir procesos más eficientes y responsables.",
    temas: [
      "Balance de materia: entradas, salidas y acumulación.",
      "Evaluación de pérdidas y oportunidades de mejora.",
      "Uso de gráficos y diagramas para la toma de decisiones.",
    ],
    docs: [
      {
        label: "Gráfico de balance de materia",
        href: "/docs/unidad-2/balance-materia.pdf",
      },
      {
        label: "Apuntes de clase",
        href: "/docs/unidad-2/apuntes-clase.pdf",
      },
    ],
    groupWork: "Documento de análisis de balance de materia para Proyecto PL2",
  },
  {
    id: "unidad-3",
    title: "Unidad 3",
    summary:
      "Esta unidad muestra cómo los diagramas de flujo y normas internacionales ayudan a visualizar procesos y encontrar mejoras ambientales.",
    temas: [
      "Diagrama de bloques, PFD y P&ID.",
      "Norma ISO 10628 y su aplicación.",
      "Identificación de puntos críticos para evitar desperdicios.",
    ],
    docs: [
      {
        label: "Diagrama de flujo de procesos",
        href: "/docs/unidad-3/diagrama-flujo.pdf",
      },
      {
        label: "Resumen ISO 10628",
        href: "/docs/unidad-3/iso-10628.pdf",
      },
    ],
    groupWork: "PL3 – Diagramas de flujo de procesos",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1f1129] via-[#3b1d4f] to-[#120818] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,105,180,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.22),_transparent_30%)]" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-300/80">
            Tecnologías Limpias para una mujer empoderada
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-pink-100 sm:text-5xl md:text-6xl">
            Tecnologías Limpias en los Procesos Industriales
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200/80 sm:text-lg">
            Una propuesta moderna, femenina y poderosa para presentar tus unidades con el mismo estilo y títulos del ejemplo.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#unidades"
              className="rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400"
            >
              Ver unidades
            </a>
            <span className="rounded-full border border-pink-400/40 bg-white/5 px-5 py-3 text-sm text-pink-100">
              Estilo femenino y profesional
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
                  <p className="text-xs uppercase tracking-[0.35em] text-pink-200/80">{unidad.title}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Tecnologías Limpias en los Procesos Industriales</h3>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-xl text-pink-100">
                  {unidad.title.split(" ")[1]}
                </span>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-pink-400/10 bg-pink-500/10 p-5">
                <p className="text-sm font-semibold text-pink-100">Resumen rápido</p>
                <p className="mt-3 text-slate-200">{unidad.summary}</p>
              </div>

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

              <p className="mt-5 text-sm text-slate-400">
                Carpeta: <span className="font-semibold text-pink-200">public/docs/{unidad.id}/</span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-pink-400/10 bg-white/5 p-8 text-slate-200 shadow-2xl shadow-pink-500/10">
          <h4 className="text-2xl font-semibold text-white">¿Dónde subir mis documentos?</h4>
          <p className="mt-4 text-slate-300">
            Coloca tus archivos dentro de las carpetas correctas para que los enlaces funcionen y la página quede con la organización igual al ejemplo.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-pink-500/10 bg-pink-500/10 p-4 text-sm text-pink-100">
              <strong>Unidad 1</strong>
              <p className="mt-2 text-slate-300">public/docs/unidad-1/</p>
            </div>
            <div className="rounded-2xl border border-pink-500/10 bg-pink-500/10 p-4 text-sm text-pink-100">
              <strong>Unidad 2</strong>
              <p className="mt-2 text-slate-300">public/docs/unidad-2/</p>
            </div>
            <div className="rounded-2xl border border-pink-500/10 bg-pink-500/10 p-4 text-sm text-pink-100">
              <strong>Unidad 3</strong>
              <p className="mt-2 text-slate-300">public/docs/unidad-3/</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Si cambias el nombre de los archivos, actualiza los enlaces dentro de <code className="rounded bg-slate-900 px-1 py-0.5">app/page.tsx</code>.
          </p>
        </div>
      </section>
    </main>
  );
}
