import type {
  Context,
} from "https://denopkg.com/shah/context-manager@v1.0.6/mod.ts";
import type { Specification } from "./specification.ts";

export const DEFAULT_REGISTRY_KEY_MODULE = "igs.spec.lang";

export interface SpecificationContext extends Context {
  readonly isSpecificationContext: true;
  readonly spec: Specification<unknown>;
}

export function isSpecificationContext(o: unknown): o is SpecificationContext {
  return o && typeof o === "object" && "isSpecificationContext" in o;
}
