const currencyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'USD',
});

export default function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}
