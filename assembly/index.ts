// The entry file of your WebAssembly module.

export function greet(name: string = 'World'): string {
  return `Hello, ${name}!`;
}
