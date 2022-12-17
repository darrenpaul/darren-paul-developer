import {
  component$,
  useClientEffect$,
  useSignal,
  useStylesScoped$,
  Resource,
  useResource$,
  useStore,
} from "@builder.io/qwik";
import { isBrowser } from "@builder.io/qwik/build";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { ArrowLeftIcon, ArrowRightIcon } from "~/components/icons/arrows";
import styles from "./projects.scss?inline";

interface ProductData {
  _id: string;
  title: string;
}
export const onGet: RequestHandler<Array<ProductData>> = async ({ params }) => {
  const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID;
  const DATASET = import.meta.env.VITE_SANITY_DATASET;
  const QUERY = encodeURIComponent(
    '*[_type == "project"]{_id, title, synopsis, description, publishedAt, "thumbnailImage": thumbnailImage.asset->url, "projectImages": projectImages[].asset->url}'
  );

  const URL = `https://${PROJECT_ID}.api.sanity.io/v2022-12-14/data/query/${DATASET}?query=${QUERY}`;
  const response = await fetch(URL);
  const { result } = await response.json();
  return result;
};

export default component$(() => {
  const productData = useEndpoint<Array<ProductData>>();
  useStylesScoped$(styles);

  const projectIndex = useSignal(1);
  const state = useStore({ projects: [] });

  useClientEffect$(
    async () => {
      // const observer = new window.IntersectionObserver(
      //   ([entry]) => {
      //     if (entry.isIntersecting) {
      //       const entryIndex = parseInt(entry.target.id.replace("project", ""));
      //       projectIndex.value = entryIndex;
      //     }
      //   },
      //   {
      //     root: null,
      //     threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      //   }
      // );
      // const projects = state.projects;
      // const observer = new window.IntersectionObserver(
      //   ([entry]) => {
      //     if (entry.isIntersecting) {
      //       const entryIndex = parseInt(entry.target.id.replace("project", ""));
      //       projectIndex.value = entryIndex;
      //     }
      //   },
      //   {
      //     root: null,
      //     threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      //   }
      // );
      // projects.forEach((project, index) => {
      //   if (index !== 0) {
      //     const remainder = index;
      //     if (remainder % 3 === 0) {
      //       const element = document.querySelector(
      //         `#project${index}`
      //       )! as HTMLElement;
      //       observer.observe(element);
      //     }
      //   }
      // });
      // const lastProjectElement = document.querySelector(
      //   `#project${projects.length}`
      // )! as HTMLElement;
      // observer.observe(lastProjectElement);
    },
    {
      eagerness: "visible", // 'load' | 'visible' | 'idle'
    }
  );
  return (
    <section class="projects-section">
      <Resource
        value={productData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(projects) => {
          return (
            <div
              id="projects"
              class="projects"
              onWheel$={(event) => {
                const projectsElement = document.querySelector(
                  "#projects"
                )! as HTMLElement;
                projectsElement.scroll({
                  top: 0,
                  left: projectsElement.scrollLeft + event.deltaY,
                  behavior: "auto",
                });
              }}
            >
              {projects.map(
                (
                  { _id, title, synopsis, thumbnailImage, publishedAt },
                  index
                ) => (
                  <div id={`project${index + 1}`} class="project" key={_id}>
                    <div class="project-index">
                      <h1 class="project-index-title">
                        {String(index + 1).padStart(2, "0")}
                      </h1>
                    </div>

                    <div class="project-card">
                      <div class="project-thumbnail-title">
                        <div class="project-title">
                          <h4>{title}</h4>
                          <p>{synopsis}</p>
                        </div>

                        <div class="project-thumbnail">
                          <img src={thumbnailImage} />
                        </div>
                      </div>
                    </div>
                    <div class="project-index">
                      <p>{publishedAt}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          );
        }}
      />
      <div class="project-action-buttons">
        <button
          class="project-action-button"
          onClick$={() => {
            const scrollToIndex = projectIndex.value - 3;

            // if (scrollToIndex % 3 !== 0) {
            //   scrollToIndex += 1;
            //   scrollToIndex -= 3;
            // }

            // if (scrollToIndex <= 0) {
            //   scrollToIndex = 1;
            // }

            const projectsDiv = document.querySelector(
              `#project${scrollToIndex}`
            )! as HTMLElement;
            if (projectsDiv) {
              projectIndex.value = scrollToIndex;

              projectsDiv.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }
          }}
        >
          <ArrowLeftIcon />
        </button>
        <button
          class="project-action-button"
          onClick$={() => {
            const scrollToIndex = projectIndex.value + 3;
            // if (scrollToIndex > state.projects.length) {
            //   scrollToIndex = state.projects.length;
            // }
            const projectsDiv = document.querySelector(
              `#project${scrollToIndex}`
            )! as HTMLElement;
            if (projectsDiv) {
              projectIndex.value = scrollToIndex;

              projectsDiv.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }
          }}
        >
          <ArrowRightIcon />
        </button>
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
