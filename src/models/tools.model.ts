export type Tool = {
  id: string;
  name: string;
  icon?: string;
};

export class Tools {
  static React: Tool = { id: "tool-react", name: "React", icon: "react.svg" };
  static TypeScript: Tool = { id: "tool-typescript", name: "TypeScript", icon: "typescript.svg" };
  static NodeJS: Tool = { id: "tool-nodejs", name: "Node.js", icon: "nodejs.svg" };
  static Express: Tool = { id: "tool-express", name: "Express", icon: "express.svg" };
  static GitHub: Tool = { id: "tool-github", name: "GitHub", icon: "github.svg" };
  static Angular: Tool = { id: "tool-angular", name: "Angular", icon: "angular.svg" };
  static CPlusPlus: Tool = { id: "tool-cpp", name: "C++", icon: "cpp.svg" };
  static Python: Tool = { id: "tool-python", name: "Python", icon: "python.svg" };
  static CSharp: Tool = { id: "tool-csharp", name: "C#", icon: "csharp.svg" };

  private constructor(
    private readonly name: string,
    private readonly icon?: string,
  ) {}
}
