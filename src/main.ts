import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { tutorial } from "./tutorial.ts";
import tutorialCode from "./tutorial.ts?raw";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.min.css";

// TypeScriptの言語定義を登録
hljs.registerLanguage("typescript", typescript);

const output: string[] = [];
const originalConsoleLog = console.log;
console.log = (...args: any[]) => {
  output.push(
    args
      .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : arg))
      .join(" ")
  );
  originalConsoleLog(...args);
};

tutorial();

const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
  app.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <h2>Console Log</h2>
      <div id="output">${output.map((line) => `<p>${line}</p>`).join("")}</div>
      <h2>Tutorial Code</h2>
      <pre><code class="language-typescript" id="tutorial-code">${tutorialCode}</code></pre>
    </div>
  `;

  // コードのハイライトを適用
  hljs.highlightElement(app.querySelector("#tutorial-code") as HTMLElement);
}
