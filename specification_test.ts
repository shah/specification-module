import { assertEquals } from "https://deno.land/std@0.78.0/testing/asserts.ts";
import { importSpecification, moduleDefaultIsTarget } from "./specification.ts";
import * as invalidModule from "./specification_test_invalid.ts";
import { isTestModel, TestModel } from "./specification_test_model.ts";
import * as validModule from "./specification_test_valid.ts";

Deno.test("Import valid model", async () => {
  const supplier = await importSpecification<TestModel>(
    "./specification_test_valid.ts",
    validModule,
    isTestModel,
    moduleDefaultIsTarget,
  );
  assertEquals(supplier.error, undefined);
  assertEquals(supplier.isValid, true);
});

Deno.test("Import invalid model", async () => {
  const supplier = await importSpecification<TestModel>(
    "./specification_test_invalid.ts",
    invalidModule,
    isTestModel,
    moduleDefaultIsTarget,
  );
  assertEquals(supplier.isValid, false);
});
