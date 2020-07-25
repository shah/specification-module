import {
  Context,
  ctxFactory,
  ExecutionEnvironments,
} from "https://denopkg.com/shah/context-manager@v1.0.5/mod.ts";
import { Specification } from "./specification.ts";

export const DEFAULT_REGISTRY_KEY_MODULE = "igs.spec.lang";

export interface SpecificationContext extends Context {
  readonly isSpecificationContext: true;
  readonly spec: Specification<any>;
}

export function isSpecificationContext(o: object): o is SpecificationContext {
  return "isSpecificationContext" in o;
}
