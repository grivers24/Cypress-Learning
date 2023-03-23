export enum ResourceEnums {
  component = 'component',
  material = 'material',
  pwa = 'pwa',
  dependency = 'dependency',
  test = 'test',
  build = 'build',
}

export type ResourceOptions = keyof typeof ResourceEnums;
