export interface TestModel {
  readonly textProperty: string;
  readonly numericProperty: number;
}

export function isTestModel(x: any): x is TestModel {
  return typeof x === "object" && (
    "textProperty" in x &&
    "numericProperty" in x
  );
}
