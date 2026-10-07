import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Patch to prevent "removeChild" crashes from browser extensions modifying the DOM
const originalRemoveChild = Node.prototype.removeChild;
Node.prototype.removeChild = function <T extends Node>(child: T): T {
  if (child.parentNode !== this) {
    console.warn("removeChild: node is not a child — likely a browser extension conflict");
    return child;
  }
  return originalRemoveChild.call(this, child) as T;
};

const originalInsertBefore = Node.prototype.insertBefore;
Node.prototype.insertBefore = function <T extends Node>(newNode: T, refNode: Node | null): T {
  if (refNode && refNode.parentNode !== this) {
    console.warn("insertBefore: ref node is not a child — likely a browser extension conflict");
    return newNode;
  }
  return originalInsertBefore.call(this, newNode, refNode) as T;
};

createRoot(document.getElementById("root")!).render(<App />);
