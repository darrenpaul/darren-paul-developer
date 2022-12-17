import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
} from "~/components/icons/social";
import { FOOTER_COPY } from "~/constants/copy";
import styles from "./footer.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="social-icons">
        <Link href={FOOTER_COPY.github.url} target="_blank">
          <GithubIcon />
        </Link>
        <Link href={FOOTER_COPY.linkedin.url} target="_blank">
          <LinkedInIcon />
        </Link>
        <Link href={FOOTER_COPY.instagram.url} target="_blank">
          <InstagramIcon />
        </Link>
      </div>
      <div class="copyright-wrapper">
        <p class="copyright">{FOOTER_COPY.copyright}</p>
        <p>ⓒ</p>
      </div>
    </footer>
  );
});
