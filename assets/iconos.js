/* Ilustraciones vectoriales de piezas — JKS CR */
(function(){
  var G = '<g fill="currentColor" fill-opacity=".13" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">';
  var E = '</g>';
  var S = function(inner){ return '<svg viewBox="0 0 64 64" aria-hidden="true">'+G+inner+E+'</svg>'; };
  var I = {
    codo: S('<path d="M15 57V34a23 23 0 0 1 23-23h19v19H38a4 4 0 0 0-4 4v23z"/><rect x="11" y="45" width="27" height="13" rx="2"/><rect x="45" y="7" width="13" height="27" rx="2"/>'),
    codo45: S('<path d="M10 56V36L36 10l13 13-20 20v13z"/><rect x="6" y="46" width="27" height="12" rx="2"/><rect x="34" y="4" width="12" height="25" rx="2" transform="rotate(45 40 16)"/>'),
    tee: S('<path d="M6 21h52v16H41v21H23V37H6z"/><rect x="4" y="17" width="12" height="24" rx="2"/><rect x="48" y="17" width="12" height="24" rx="2"/><rect x="20" y="47" width="24" height="12" rx="2"/>'),
    yee: S('<rect x="4" y="34" width="56" height="17" rx="2"/><rect x="31" y="6" width="15" height="34" rx="2" transform="rotate(40 38 34)"/><rect x="2" y="31" width="10" height="23" rx="2"/><rect x="52" y="31" width="10" height="23" rx="2"/>'),
    union: S('<rect x="5" y="24" width="54" height="16" rx="2"/><rect x="18" y="17" width="28" height="30" rx="4"/><path d="M32 17v30" stroke-opacity=".5"/>'),
    tapon: S('<path d="M17 56V22a15 10 0 0 1 30 0v34z"/><path d="M17 42h30" stroke-opacity=".5"/>'),
    macho: S('<rect x="19" y="34" width="26" height="23" rx="2"/><rect x="14" y="27" width="36" height="9" rx="1.5"/><rect x="22" y="7" width="20" height="20" rx="1"/><path d="M22 12h20M22 17h20M22 22h20" stroke-opacity=".55"/>'),
    hembra: S('<rect x="15" y="20" width="34" height="37" rx="2"/><rect x="11" y="13" width="42" height="9" rx="1.5"/><path d="M21 28h22M21 34h22M21 40h22M21 46h22" stroke-opacity=".5"/>'),
    llave: S('<rect x="4" y="30" width="56" height="14" rx="2"/><circle cx="32" cy="37" r="11"/><rect x="29" y="15" width="6" height="12"/><rect x="15" y="9" width="34" height="7" rx="3.5"/>'),
    reduccion: S('<path d="M5 15h22l10 10h22v14H37L27 49H5z"/><path d="M27 15v34" stroke-opacity=".5"/>'),
    tubo: S('<path d="M8 22h46a5 10 0 0 1 0 20H8z"/><ellipse cx="8" cy="32" rx="5" ry="10"/><ellipse cx="8" cy="32" rx="2.5" ry="6" fill-opacity="0"/>'),
    conector: S('<rect x="20" y="30" width="24" height="27" rx="2"/><path d="M15 24h34l-3 7H18z"/><rect x="23" y="7" width="18" height="17" rx="1"/><path d="M23 12h18M23 17h18" stroke-opacity=".55"/>'),
    curva: S('<path d="M10 58V40C10 22 22 10 40 10h18v14H40c-10 0-16 6-16 16v18z"/>'),
    caja: S('<rect x="8" y="10" width="48" height="44" rx="4"/><circle cx="32" cy="32" r="7"/><circle cx="16" cy="18" r="2.5"/><circle cx="48" cy="46" r="2.5"/>'),
    octo: S('<path d="M22 8h20l14 14v20L42 56H22L8 42V22z"/><circle cx="32" cy="32" r="7"/>'),
    flex: S('<path d="M6 40c6 0 6-16 12-16s6 16 12 16 6-16 12-16 6 16 12 16 6-8 6-8" fill-opacity="0" stroke-width="9" stroke-opacity=".25"/><path d="M6 40c6 0 6-16 12-16s6 16 12 16 6-16 12-16 6 16 12 16 6-8 6-8" fill-opacity="0"/>'),
    canoa: S('<path d="M5 16h7l4 26c1 6 4 8 9 8h14c5 0 8-2 9-8l4-26h7"/><path d="M12 16l4 26c1 6 4 8 9 8h14c5 0 8-2 9-8l4-26" fill-opacity=".1"/>'),
    bajante: S('<rect x="24" y="4" width="16" height="44" rx="2"/><path d="M24 48l-10 12h16l10-12z"/><rect x="18" y="4" width="28" height="9" rx="2"/>'),
    sifon: S('<path d="M10 6v28a16 16 0 0 0 32 0V24h12" fill-opacity="0" stroke-width="12" stroke-opacity=".22"/><path d="M10 6v28a16 16 0 0 0 32 0V24h12" fill-opacity="0"/>'),
    flanger: S('<ellipse cx="32" cy="36" rx="27" ry="12"/><ellipse cx="32" cy="32" rx="13" ry="6"/><circle cx="12" cy="36" r="2"/><circle cx="52" cy="36" r="2"/>'),
    gaza: S('<path d="M14 32a18 18 0 1 0 36 0" fill-opacity="0"/><rect x="6" y="28" width="14" height="7" rx="2"/><rect x="44" y="28" width="14" height="7" rx="2"/><circle cx="13" cy="31.5" r="1.4"/><circle cx="51" cy="31.5" r="1.4"/>'),
    herramienta: S('<path d="M44 6a12 12 0 0 0-11 16L8 47a6 6 0 0 0 9 9l25-25a12 12 0 0 0 16-11l-7 4-6-3-1-7z"/>'),
    gota: S('<path d="M32 6c10 14 18 23 18 33a18 18 0 0 1-36 0c0-10 8-19 18-33z"/>'),
    rayo: S('<path d="M36 4L12 36h16l-4 24 26-34H34z"/>'),
    nube: S('<path d="M18 40a11 11 0 0 1 2-22 15 15 0 0 1 28 4 9 9 0 0 1-2 18z"/><path d="M22 48l-3 8M32 48l-3 8M42 48l-3 8"/>'),
    casa: S('<path d="M8 30L32 10l24 20v26H8z"/><rect x="26" y="38" width="12" height="18"/>')
  };
  /* Elige la ilustración según el nombre de la pieza */
  I.pick = function(nombre){
    var n = (nombre||'').toLowerCase();
    if (/flex/.test(n)) return I.flex;
    if (/octogonal/.test(n)) return I.octo;
    if (/caja/.test(n)) return I.caja;
    if (/canoa|esquina|soporte|junta|tapas/.test(n)) return I.canoa;
    if (/bajante/.test(n)) return I.bajante;
    if (/sif[oó]n/.test(n)) return I.sifon;
    if (/flanger/.test(n)) return I.flanger;
    if (/gaza/.test(n)) return I.gaza;
    if (/llave/.test(n)) return I.llave;
    if (/reducci|reducid|×/.test(n) && !/tee|yee/.test(n)) return I.reduccion;
    if (/yee/.test(n)) return I.yee;
    if (/tee/.test(n)) return I.tee;
    if (/45/.test(n)) return I.codo45;
    if (/codo/.test(n)) return I.codo;
    if (/curva/.test(n)) return I.curva;
    if (/conector/.test(n)) return I.conector;
    if (/tap[oó]n/.test(n)) return I.tapon;
    if (/hembra|registro/.test(n)) return I.hembra;
    if (/macho|inserto|adapt/.test(n)) return I.macho;
    if (/tubo/.test(n)) return I.tubo;
    if (/uni[oó]n/.test(n)) return I.union;
    return I.union;
  };
  window.JKS_ICONS = I;
})();
