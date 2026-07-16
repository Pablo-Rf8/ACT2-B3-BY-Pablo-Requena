import { calcularSubtotal, calcularIva, calcularTotal } from './calculos';

const carritoDeCompras: number[] = [102.50, 45.00, 12.99, 8.50]; 
const TASA_IVA = 0.12; // 12% de IVA estándar

const subtotal = calcularSubtotal(carritoDeCompras);
const iva = calcularIva(subtotal, TASA_IVA);
const total = calcularTotal(subtotal, iva);

console.log("====== TICKET DE COMPRA ======");
console.log(`Subtotal:  Q${subtotal.toFixed(2)}`);
console.log(`IVA (12%): Q${iva.toFixed(2)}`);
console.log(`Total:     Q${total.toFixed(2)}`);
console.log("==============================");