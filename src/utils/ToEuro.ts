export function ToEuro(amount: bigint): string {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(Number(amount) / 100);
};
