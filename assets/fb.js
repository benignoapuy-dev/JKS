// Configuración de Firebase (identificadores públicos del proyecto; la seguridad la dan las reglas de Firestore)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export const firebaseConfig = {
  apiKey: 'AIzaSyD99UDhKWKSiFsTYIVmZ4Tg2PqsH0tCmYI',
  authDomain: 'venecia-clientes.firebaseapp.com',
  projectId: 'venecia-clientes',
  storageBucket: 'venecia-clientes.firebasestorage.app',
  messagingSenderId: '19773769223',
  appId: '1:19773769223:web:852f1213aacf99f943cca2'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Agrupa los productos de Lucida por línea según el nombre
export function linea(nombre) {
  const n = (nombre || '').toUpperCase();
  if (/^TOLSEN/.test(n)) return 'Herramientas Tolsen';
  if (/^OMI /.test(n)) return 'Eléctrico y grifería OMI';
  if (/^LESSO/.test(n)) return 'Lesso';
  if (/^CPVC|TUBO CPVC/.test(n)) return 'CPVC';
  if (/CONDUIT|CAJA (OCTO|RECT)/.test(n)) return 'Conduit';
  if (/CANOA|BAJANTE|ESQUINERO|BOQUILLA/.test(n)) return 'Canoas';
  if (/^TUBO/.test(n)) return 'Tubo PVC';
  if (/^TECO/.test(n)) return 'TECO';
  return 'Accesorios PVC';
}
export const ORDEN_LINEAS = ['Accesorios PVC', 'CPVC', 'Conduit', 'Tubo PVC', 'Canoas', 'TECO', 'Lesso', 'Eléctrico y grifería OMI', 'Herramientas Tolsen'];
