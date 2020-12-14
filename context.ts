import type {
  Context,
} from "https://denopkg.com/shah/context-manager@v1.0.7/mod.ts";
import type { Specification } from "./specification.ts";
import * as safety from "https://denopkg.com/shah/ts-safety@v0.3.1/mod.ts";

export const DEFAULT_REGISTRY_KEY_MODULE = "igs.spec.lang";

export interface SpecificationContext extends Context {
  readonly isSpecificationContext: true;
  readonly spec: Specification<unknown>;
}

export const isSpecificationContext = safety.typeGuard<SpecificationContext>(
  "isSpecificationContext",
);
