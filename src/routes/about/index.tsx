import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./projects.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const projects = [
    {
      id: "1",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
    {
      id: "2",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
    {
      id: "3",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
    {
      id: "4",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
    {
      id: "5",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
    {
      id: "6",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
    {
      id: "7",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
    {
      id: "8",
      title: "Awesome project",
      description:
        "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.",
      thumbnail:
        "https://images.unsplash.com/photo-1670495326558-7d5b194f3fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      images: [""],
      tags: [""],
      link: [""],
      github: "",
      tools: [""],
    },
  ];

  return (
    <section class="projects-section projects-section-night">
      <h1 class="section-heading">Projects</h1>

      <div class="projects">
        {projects.map((project, index) => (
          <div class="project" key={index}>
            <div class="project-card">
              <div class="project-thumbnail-title">
                <div class="project-thumbnail project-thumbnail-night">
                  <img src={project.thumbnail} />
                </div>

                <div class="project-title">
                  <h4 class="h4-night">“{project.title}”</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
