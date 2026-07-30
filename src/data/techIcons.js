import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiPostman,
  SiPhp,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiReactrouter,
  SiMui,
  SiMongodb,
  SiStripe,
  SiChakraui,
  SiEthereum,
  SiOpenzeppelin,
  SiIpfs,
  SiPython,
  SiPandas,
  SiJupyter,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiBootstrap,
  SiReactquery,
  SiLodash,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiWebpack,
  SiNpm,
  SiFigma,
  SiOpenapiinitiative,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { TbPlugConnected } from "react-icons/tb";

// Maps a tech/skill label (as written in projects.js or site.js) to its
// icon. Anything not listed here -- a purely descriptive label rather
// than a real or representable technology ("ERD Design", "Data
// Visualization") -- simply renders without an icon rather than a
// placeholder/fake logo. Most icons come from Simple Icons (si), but a
// few fall back to other sets or a representative (non-brand) icon
// where there's no exact logo match:
//   - AWS -> Font Awesome's FaAws (a real, recognizable AWS logo)
//   - VS Code -> Devicons' DiVisualstudio -- there is no VS Code logo
//     in any bundled react-icons set, so this is the classic Visual
//     Studio mark standing in for it (an imperfect but closest match)
//   - WebSockets -> Tabler's TbPlugConnected, a generic connection/
//     plug icon, since no icon set has a WebSocket-specific logo
//   - REST APIs -> Simple Icons' SiOpenapiinitiative -- not a REST API
//     logo per se (there isn't one), but the OpenAPI Initiative mark is
//     the closest widely-recognized symbol for "REST API" as a concept
export const techIcons = {
  "React.js": SiReact,
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  "SQL / PostgreSQL": SiPostgresql,
  "PL/pgSQL": SiPostgresql,
  Sequelize: SiSequelize,
  Postman: SiPostman,
  PHP: SiPhp,
  MySQL: SiMysql,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "React Router": SiReactrouter,
  "Material UI": SiMui,
  MongoDB: SiMongodb,
  Stripe: SiStripe,
  "Chakra UI": SiChakraui,
  "Ethers.js": SiEthereum,
  OpenZeppelin: SiOpenzeppelin,
  IPFS: SiIpfs,
  Python: SiPython,
  Pandas: SiPandas,
  "Jupyter Notebook": SiJupyter,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  "JavaScript (ES6+)": SiJavascript,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  Bootstrap: SiBootstrap,
  "React Query": SiReactquery,
  Lodash: SiLodash,
  Jest: SiJest,
  "React Testing Library": SiTestinglibrary,
  Git: SiGit,
  GitHub: SiGithub,
  Webpack: SiWebpack,
  npm: SiNpm,
  Figma: SiFigma,
  AWS: FaAws,
  "VS Code": DiVisualstudio,
  WebSockets: TbPlugConnected,
  "REST APIs": SiOpenapiinitiative,
};
