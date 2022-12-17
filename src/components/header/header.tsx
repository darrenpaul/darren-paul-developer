import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { ROUTES } from "~/constants/routes";
import { DonutIcon } from "~/components/icons/donut";
import styles from "./header.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const { pathname } = useLocation();
  const isOpen = useSignal(false);
  const navigation = useNavigate();

  return (
    <header>
      <button
        onClick$={() => (isOpen.value = !isOpen.value)}
        class="navigation-menu-button"
      >
        <DonutIcon />
        <DonutIcon />
        <DonutIcon />
      </button>

      {isOpen.value === true && (
        <>
          <div class="navigation-menu">
            <div class="navigation-menu-links">
              {ROUTES.map(({ key, name, path }, index) => (
                <a
                  preventdefault:click
                  onClick$={() => {
                    isOpen.value = false;
                    navigation.path = path;
                  }}
                  key={key}
                  href={path}
                  class={
                    pathname === path
                      ? "navigation-menu-link-active"
                      : "navigation-menu-link"
                  }
                >
                  <p class="navigation-menu-link-p">{name}</p>
                  <div>
                    <small class="navigation-menu-link-small">
                      {index + 1}
                    </small>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div onClick$={() => (isOpen.value = false)} class="blur-effect" />
        </>
      )}

      <div class="current-page">
        <div class="current-page-title-wrapper">
          <h3 class="current-page-title">{pathname.replaceAll("/", "")}</h3>
        </div>
      </div>
    </header>
  );
});
