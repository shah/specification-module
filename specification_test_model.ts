export interface TestModel {
  readonly textProperty: string;
  readonly numericProperty: number;
}

export function isTestModel(x: unknown): x is TestModel {
  return x && typeof x === "object" && (
    "textProperty" in x &&
    "numericProperty" in x
  );
}
