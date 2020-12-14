import * as safety from "https://denopkg.com/shah/ts-safety@v0.3.1/mod.ts";

export interface Specification<T> {
  readonly isSpecification: true;
  readonly target: T;
}

export function isSpecification<T>(x: unknown): x is Specification<T> {
  const isSpecification = safety.typeGuard<Specification<T>>("isSpecification");
  return isSpecification(x);
}

export interface SpecificationConstructor<T> {
  new (target: T, module: unknown, moduleUrl: ModuleUrl): Specification<T>;
}

export type ModuleUrl = string;

export interface SpecificationSupplier<T> {
  readonly isSpecificationSupplier: true;
  readonly spec?: Specification<T>;
  readonly moduleUrl: ModuleUrl;
  readonly isValid: boolean;
  readonly error?: Error;
}

// deno-lint-ignore no-explicit-any
export function moduleDefaultIsTarget(module: any): any {
  return module.default;
}

export function moduleIsTarget(module: unknown): unknown {
  return module;
}

export function importSpecification<T>(
  moduleUrl: ModuleUrl,
  module: unknown,
  targetGuard: (x: unknown) => x is T,
  targetAcquirer: (module: unknown) => T,
  specConstructor?: SpecificationConstructor<T>,
): SpecificationSupplier<T> {
  const target = targetAcquirer(module);
  if (!target) {
    return {
      isSpecificationSupplier: true,
      moduleUrl: moduleUrl,
      isValid: false,
      error: new Error(
        `Unable to acquire target from ${moduleUrl}.`,
      ),
    };
  }

  if (targetGuard(target)) {
    return {
      isSpecificationSupplier: true,
      moduleUrl: moduleUrl,
      isValid: true,
      spec: specConstructor ? new specConstructor(target, module, moduleUrl) : {
        isSpecification: true,
        target: target,
      },
    };
  }
  return {
    isSpecificationSupplier: true,
    moduleUrl: moduleUrl,
    isValid: false,
    error: new Error(
      `The default export in ${moduleUrl} is not the expected type (rejected by guard).`,
    ),
  };
}

export const specFactory = new class {
  spec<T>(target: T): Specification<T> {
    return {
      isSpecification: true,
      target: target,
    };
  }
}();
