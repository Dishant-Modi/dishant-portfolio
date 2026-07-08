import { Link } from "react-router-dom";

// Shared underline-link style used for CTAs ("View project ↗", "See them all →",
// nav actions). Renders a router <Link> when `to` is given, otherwise a plain
// anchor (pass `external` for target=_blank + rel=noopener).
export default function Button({ to, href, external = false, children }) {
  if (to) {
    return (
      <Link to={to} className="btn-link">
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className="btn-link" {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {children}
    </a>
  );
}
