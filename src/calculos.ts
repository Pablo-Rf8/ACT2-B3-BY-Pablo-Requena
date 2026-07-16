export function calcularSubtotal(precios: number[]): number {
    return precios.reduce((acumulado, precioActual) => acumulado + precioActual, 0);
}
export function calcularIva(subtotal: number, tasaIva: number): number {
    return subtotal * tasaIva;
}
export function calcularTotal(subtotal: number, iva: number): number {
    return subtotal + iva;
}