export interface TestModel {
  readonly textProperty: string;
  readonly numericProperty: number;
}

export function isTestModel(x: unknown): x is TestModel {
  if (x && typeof x === "object") {
    return "textProperty" in x &&
      "numericProperty" in x;
  }
  return false;
}
