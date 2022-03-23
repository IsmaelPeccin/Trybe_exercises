export function error(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}