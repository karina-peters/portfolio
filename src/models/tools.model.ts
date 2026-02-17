export type Tool = {
  name: string;
  icon?: string;
};

export class Tools {
  static React: Tool = { name: "React", icon: "react.svg" };
  static TypeScript: Tool = { name: "TypeScript", icon: "typescript.svg" };
  static NodeJS: Tool = { name: "Node.js", icon: "nodejs.svg" };
  static Express: Tool = { name: "Express", icon: "express.svg" };
  static GitHub: Tool = { name: "GitHub", icon: "github.svg" };
  static Angular: Tool = { name: "Angular", icon: "angular.svg" };
  static CPlusPlus: Tool = { name: "C++", icon: "cplusplus.svg" };
  static Python: Tool = { name: "Python", icon: "python.svg" };
  static CSharp: Tool = { name: "C#", icon: "csharp.svg" };

  private constructor(
    private readonly name: string,
    private readonly icon?: string,
  ) {}
}
