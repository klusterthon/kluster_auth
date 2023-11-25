export function join(self: string, ...values: (string | undefined | null)[]) {
  return values.reduceRight((a: string, b) => (b ? a + " " + b : a), self);
}
