import {
  Context,
  ctxFactory,
  ExecutionEnvironments,
} from "https://cdn.jsdelivr.net/gh/shah/context-manager@v1.0.1/mod.ts";
import { Specification } from "./specification.ts";

export const DEFAULT_REGISTRY_KEY_MODULE = "igs.spec.lang";

export interface SpecificationContext extends Context {
  readonly isSpecificationContext: true;
  readonly spec: Specification<any>;
}

export function isSpecificationContext(o: object): o is SpecificationContext {
  return "isSpecificationContext" in o;
}
