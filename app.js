/* ===========================================================
   Regular 3 — Herramientas Digitales 3
   Lógica del sitio
   =========================================================== */
(function () {
  "use strict";

  /* -----------------------------------------------------------
     CONFIGURACIÓN — clases que NO se cuentan
     Escribe el número de clase: 1 es la primera columna de la tabla.
     Ejemplo: { martes: [3, 7], viernes: [9] }
     ----------------------------------------------------------- */
  var EXCLUIDAS = { martes: [], viernes: [] };

  /* -----------------------------------------------------------
     DATOS
     Cada clase presente vale 7,0 y cada ausencia 1,0.
     En "a", 1 es presente y 0 es ausente, en el orden de CLASES.
     Las secciones pueden tener distinta cantidad de clases.
     ----------------------------------------------------------- */
  var CLASES = {
    martes: ["04/08", "11/08", "18/08", "25/08", "01/09",
             "08/09", "22/09", "29/09", "06/10", "13/10",
             "20/10", "27/10", "03/11", "10/11"],
    viernes: ["31/07", "07/08", "14/08", "21/08", "28/08",
              "04/09", "11/09", "25/09", "02/10", "09/10",
              "16/10", "23/10", "30/10", "06/11", "13/11"]
  };

  var ESTUDIANTES = {
    martes: [
      { n: "Águila Vidal, María Ignacia",              a: "00011111111111" },
      { n: "Améstica Bravo, Flavio Alejandro",         a: "11011111110110" },
      { n: "Ancapán Maripán, Nataly Valentina",        a: "11011111101111" },
      { n: "Boza Navarro, Millaray Antonia",           a: "11110111111110" },
      { n: "Canihuante Díaz, Consuelo María Victoria", a: "11010111111111" },
      { n: "Cares Domange, Catalina Isidora",          a: "00011111111111" },
      { n: "Doggenweiler Miranda, Tomás Eduardo",      a: "11011111011111" },
      { n: "Ferrada Cifuentes, Maitte Vaitiare",       a: "11011011111011" },
      { n: "Gómez Cruces, Fabián Alejandro",           a: "10111111111111" },
      { n: "González Aguilera, Ailin Millaray",        a: "11111111111111" },
      { n: "González Fernández, Sebastián Matías",     a: "11111101111011" },
      { n: "González Pavez, Maximiliano Alonso",       a: "01111110111111" },
      { n: "González Villar, Alondra Antonia",         a: "11001111111110" },
      { n: "Matus Solís, Carola Francisca",            a: "11111111111111" },
      { n: "Muñoz Rojas, Catalina Antonia",            a: "01111101011111" },
      { n: "Muñoz Salgado, Millaray Anaquena",         a: "01110111111111" },
      { n: "Ojeda Miranda, María José Belén",          a: "00111111111010" },
      { n: "Olguín Lagos, Luciano André",              a: "10001101110100" },
      { n: "Pacheco Díaz, Lucía Viktoria",             a: "11011011110110" },
      { n: "Reyes Sánchez, Nayadeth Andrea",           a: "11011111111111" },
      { n: "Salazar Cabrera, Nayeli Alejandra",        a: "01111101111111" },
      { n: "Sepúlveda Gómez, Bryan Tomás",             a: "01010001111011" },
      { n: "Valenzuela Ibarra, Tomás Vicente",         a: "01010111110111" },
      { n: "Vera Frías, Freddy Emanuelle",             a: "11111001110110" }
    ],
    viernes: [
      { n: "Acosta Chacoff, Camila Anaís",         a: "111111101111101" },
      { n: "Alegría Hormazábal, Krishna Carolan",  a: "111111100111100" },
      { n: "Cáceres Lagos, Ammy Deianeira",        a: "111111111111111" },
      { n: "Carrizo Silva, Renato Agustín",        a: "111111111111111" },
      { n: "Chacón Rojas, Ignacia Antonia",        a: "111111111111111" },
      { n: "Flores Rodríguez, Sebastián Jesús",    a: "110111100011110" },
      { n: "Guajardo Garrido, Macarena Giglia",    a: "101111110101110" },
      { n: "Lizana Pirquilaf, Benjamín Nicolás",   a: "111111101111100" },
      { n: "Martínez Gómez, Benjamín Octavio",     a: "111111100011111" },
      { n: "Muñoz Ibáñez, Herser Alfredo",         a: "111111101111110" },
      { n: "Olave Mora, Nicolás Alfonso",          a: "111111111111111" },
      { n: "Osorio Jofré, Florencia Ignacia",      a: "111111111101111" },
      { n: "Pailahueque Torres, Dafne Noemí",      a: "111111101100101" },
      { n: "Pardo Bruna, Daniela Fernanda",        a: "111111110101100" },
      { n: "Pavez Silva, Evian Jesús",             a: "111111111101101" },
      { n: "Peña Sánchez, Noelia Anastasia",       a: "111111111101101" },
      { n: "Romero Muñoz, Sergio Nicolás",         a: "111111101101111" },
      { n: "Sforzini Vera, Rocío Antonella",       a: "111111111111111" },
      { n: "Silva Pontigo, Sofía Antonia",         a: "111111111111111" }
    ]
  };

  var PESO_TRABAJO = 0.6;
  var PESO_PART = 0.4;
  var FECHAS = { martes: "1 de diciembre", viernes: "4 de diciembre" };
  var CRITERIOS = ["Sitio GitHub", "Video 30s", "Animación SVG", "6 textos", "Imagen por texto", "Antes/después", "Exposición"];
  var SECCIONES = ["martes", "viernes"];
  var sinMovimiento = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Utilidades ---------------- */
  function r1(x) { return Math.round(x * 10) / 10; }
  function fmt(x) { return (x === null || x === undefined || isNaN(x)) ? "—" : r1(x).toFixed(1).replace(".", ","); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function sinTildes(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /* ---------------- Clases excluidas ---------------- */
  var KEY_EX = "hd3-r3-clases-excluidas";
  var excluidas = { martes: EXCLUIDAS.martes.slice(), viernes: EXCLUIDAS.viernes.slice() };
  try {
    var g = JSON.parse(localStorage.getItem(KEY_EX));
    if (g && Array.isArray(g.martes) && Array.isArray(g.viernes)) excluidas = g;
  } catch (err) {}
  function guardarExcluidas() {
    try { localStorage.setItem(KEY_EX, JSON.stringify(excluidas)); } catch (err) {}
  }
  function cuenta(sec, i) { return excluidas[sec].indexOf(i + 1) === -1; }

  function resumen(sec, e) {
    var pres = 0, total = 0;
    for (var i = 0; i < CLASES[sec].length; i++) {
      if (!cuenta(sec, i)) continue;
      total++;
      if (e.a.charAt(i) === "1") pres++;
    }
    return { pres: pres, total: total, nota: total === 0 ? null : 1 + 6 * (pres / total) };
  }

  /* ---------------- Mosaico del encabezado ---------------- */
  function renderMosaico() {
    var cont = document.getElementById("mosaico");
    if (!cont) return;
    cont.innerHTML = "";
    var retardo = 0;
    SECCIONES.forEach(function (sec) {
      var cols = CLASES[sec].length;
      var block = document.createElement("div");
      block.className = "mos-block";
      var grid = document.createElement("div");
      grid.className = "mos-grid";
      grid.style.gridTemplateColumns = "repeat(" + cols + ", 6px)";
      ESTUDIANTES[sec].forEach(function (e) {
        for (var i = 0; i < cols; i++) {
          var c = document.createElement("span");
          c.className = "mos-cell " + (e.a.charAt(i) === "1" ? "on" : "off");
          if (!sinMovimiento) c.style.transitionDelay = (retardo * 4) + "ms";
          retardo++;
          grid.appendChild(c);
        }
      });
      var lb = document.createElement("span");
      lb.className = "mos-label";
      lb.textContent = sec;
      block.appendChild(grid);
      block.appendChild(lb);
      cont.appendChild(block);
    });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { document.body.classList.add("mosaico-listo"); });
    });
  }

  /* ---------------- Tablas por sección ---------------- */
  var orden = { martes: "nombre", viernes: "nombre" };
  var filtro = { martes: "", viernes: "" };

  function estadisticas(sec) {
    var lista = ESTUDIANTES[sec].map(function (e) { return resumen(sec, e); });
    var sumaNota = 0, sumaPres = 0, sumaTot = 0, bajo4 = 0;
    lista.forEach(function (r) {
      if (r.nota !== null) { sumaNota += r.nota; if (r.nota < 4) bajo4++; }
      sumaPres += r.pres; sumaTot += r.total;
    });
    var ausPorClase = [], peor = null;
    CLASES[sec].forEach(function (c, i) {
      if (!cuenta(sec, i)) return;
      var aus = 0;
      ESTUDIANTES[sec].forEach(function (e) { if (e.a.charAt(i) === "0") aus++; });
      ausPorClase.push({ clase: c, aus: aus });
      if (!peor || aus > peor.aus) peor = { clase: c, aus: aus };
    });
    return {
      promedio: lista.length ? sumaNota / lista.length : null,
      asistencia: sumaTot ? Math.round((sumaPres / sumaTot) * 100) : 0,
      bajo4: bajo4,
      peor: peor
    };
  }

  function renderSeccion(sec) {
    var panel = document.getElementById("panel-" + sec);
    var clases = CLASES[sec];
    var contadas = clases.filter(function (_, i) { return cuenta(sec, i); }).length;
    var fuera = clases.length - contadas;
    var st = estadisticas(sec);

    var html = '<div class="stats">' +
      '<div class="stat"><span class="v">' + fmt(st.promedio) + '</span><span class="k">Participación promedio de la sección</span></div>' +
      '<div class="stat"><span class="v">' + st.asistencia + '%</span><span class="k">Asistencia promedio</span></div>' +
      '<div class="stat"><span class="v">' + contadas + " / " + clases.length + '</span><span class="k">Clases que se cuentan' +
        (fuera ? ", " + fuera + (fuera === 1 ? " excluida" : " excluidas") : "") + '</span></div>' +
      '<div class="stat"><span class="v">' + st.bajo4 + '</span><span class="k">' +
        (st.bajo4 === 1 ? "Estudiante bajo 4,0 en participación" : "Estudiantes bajo 4,0 en participación") + '</span></div>' +
      "</div>";

    html += '<div class="controls">' +
      '<input type="search" id="filtro-' + sec + '" placeholder="Busca tu apellido" value="' + esc(filtro[sec]) + '" aria-label="Filtrar por nombre">' +
      '<div class="seg" role="group" aria-label="Ordenar">' +
        '<button type="button" data-orden="nombre" aria-pressed="' + (orden[sec] === "nombre") + '">Alfabético</button>' +
        '<button type="button" data-orden="nota" aria-pressed="' + (orden[sec] === "nota") + '">Por nota</button>' +
      "</div></div>";

    var filas = ESTUDIANTES[sec].map(function (e, i) {
      return { e: e, i: i, r: resumen(sec, e) };
    });
    if (orden[sec] === "nota") {
      filas.sort(function (a, b) { return (b.r.nota || 0) - (a.r.nota || 0); });
    }
    var q = sinTildes(filtro[sec].trim());
    if (q) filas = filas.filter(function (f) { return sinTildes(f.e.n).indexOf(q) !== -1; });

    html += '<div class="scroller"><table class="asis"><thead><tr>' +
      '<th class="nm">Estudiante</th><th>Asistencia</th><th>Participación</th>';
    clases.forEach(function (c, i) {
      html += '<th class="' + (cuenta(sec, i) ? "" : "col-off") + '">' + c + "</th>";
    });
    html += "</tr></thead><tbody>";

    if (!filas.length) {
      html += '<tr><td class="nm" colspan="' + (clases.length + 3) + '">Ningún nombre coincide con esa búsqueda.</td></tr>';
    }
    filas.forEach(function (f) {
      html += "<tr>";
      html += '<td class="nm">' + esc(f.e.n) + "</td>";
      html += '<td class="cnt">' + f.r.pres + " / " + f.r.total + "</td>";
      html += '<td class="nota' + (f.r.nota !== null && f.r.nota < 4 ? " reprobada" : "") + '">' + fmt(f.r.nota) + "</td>";
      for (var i = 0; i < clases.length; i++) {
        var pres = f.e.a.charAt(i) === "1";
        html += '<td class="' + (cuenta(sec, i) ? "" : "col-off") + '">' +
          '<span class="cell ' + (pres ? "on" : "off") + '" title="' + clases[i] + ": " +
          (pres ? "presente" : "ausente") + '"></span></td>';
      }
      html += "</tr>";
    });
    html += "</tbody></table></div>";

    html += '<p class="legend">' +
      '<span><span class="cell on"></span> Presente, vale 7,0</span>' +
      '<span><span class="cell off"></span> Ausente, vale 1,0</span>' +
      "<span>La participación es el promedio de esas notas y pesa el 40% de la Regular 3.</span>" +
      (st.peor ? "<span>Clase con más ausencias: " + st.peor.clase + ", con " + st.peor.aus + ".</span>" : "") +
      "</p>";

    html += '<div class="sim">' +
      "<h3>¿Qué nota necesito?</h3>" +
      '<p class="hint">Elige tu nombre y prueba con la nota que esperas en el trabajo grupal.</p>' +
      '<div class="sim-row">' +
        '<select id="simNombre-' + sec + '" aria-label="Estudiante"><option value="">Elige tu nombre…</option>' +
        ESTUDIANTES[sec].map(function (e, i) { return '<option value="' + i + '">' + esc(e.n) + "</option>"; }).join("") +
        "</select>" +
        '<input type="number" id="simTrabajo-' + sec + '" min="1" max="7" step="0.1" value="5.5" aria-label="Nota del trabajo grupal">' +
      "</div>" +
      '<div class="verdict v-warn" id="simOut-' + sec + '">Elige tu nombre para ver el resultado.</div>' +
      '<p class="need" id="simNeed-' + sec + '"></p>' +
      "</div>";

    html += '<p class="note">¿Ves un error en tu registro? Avísale al profesor en clases o por correo antes de la exposición, indicando la fecha específica que crees mal marcada.</p>';

    panel.innerHTML = html;
    conectarControles(sec);
    conectarSimulador(sec);
  }

  function conectarControles(sec) {
    var inp = document.getElementById("filtro-" + sec);
    var timer;
    inp.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        filtro[sec] = inp.value;
        renderSeccion(sec);
        var nuevo = document.getElementById("filtro-" + sec);
        nuevo.focus();
        nuevo.setSelectionRange(nuevo.value.length, nuevo.value.length);
      }, 180);
    });
    Array.prototype.forEach.call(document.querySelectorAll("#panel-" + sec + " .seg button"), function (b) {
      b.addEventListener("click", function () {
        orden[sec] = b.getAttribute("data-orden");
        renderSeccion(sec);
      });
    });
  }

  function animarNumero(el, desde, hasta) {
    if (sinMovimiento) { el.textContent = fmt(hasta); return; }
    var t0 = performance.now(), dur = 380;
    function paso(t) {
      var k = Math.min(1, (t - t0) / dur);
      k = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(desde + (hasta - desde) * k);
      if (k < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  function conectarSimulador(sec) {
    var selN = document.getElementById("simNombre-" + sec);
    var selT = document.getElementById("simTrabajo-" + sec);
    var out = document.getElementById("simOut-" + sec);
    var need = document.getElementById("simNeed-" + sec);
    var anterior = null;

    function recalc() {
      if (selN.value === "") {
        out.className = "verdict v-warn";
        out.textContent = "Elige tu nombre para ver el resultado.";
        need.innerHTML = "";
        anterior = null;
        return;
      }
      var e = ESTUDIANTES[sec][parseInt(selN.value, 10)];
      var part = resumen(sec, e).nota;
      var v = parseFloat(String(selT.value).replace(",", "."));
      if (isNaN(v) || part === null) {
        out.className = "verdict v-warn";
        out.textContent = "Escribe una nota entre 1,0 y 7,0.";
        need.innerHTML = "";
        return;
      }
      v = Math.min(7, Math.max(1, v));
      var fin = v * PESO_TRABAJO + part * PESO_PART;
      out.className = "verdict " + (fin >= 4 ? "v-pass" : "v-risk");
      out.innerHTML = "<strong></strong><span>Nota final de la Regular 3 · " +
        (fin >= 4 ? "aprobada" : "bajo el 4,0") + " · tu participación es " + fmt(part) + "</span>";
      animarNumero(out.querySelector("strong"), anterior === null ? fin : anterior, fin);
      anterior = fin;

      var min = (4.0 - PESO_PART * part) / PESO_TRABAJO;
      if (min <= 1) {
        need.innerHTML = "Con esta participación apruebas con cualquier nota de trabajo.";
      } else if (min > 7) {
        need.innerHTML = "Con esta participación no alcanzas el 4,0 ni con un 7,0 en el trabajo. Habla con el profesor.";
      } else {
        need.innerHTML = "Para llegar a 4,0 necesitas al menos un <b>" + fmt(min) + "</b> en el trabajo grupal.";
      }
    }
    selN.addEventListener("change", recalc);
    selT.addEventListener("input", recalc);
  }

  /* ---------------- Panel docente: clases ---------------- */
  function renderChips() {
    SECCIONES.forEach(function (sec) {
      var cap = sec.charAt(0).toUpperCase() + sec.slice(1);
      var cont = document.getElementById("chips" + cap);
      var contadas = CLASES[sec].filter(function (_, i) { return cuenta(sec, i); }).length;
      document.getElementById("sub" + cap).textContent =
        "Sección " + sec + " · se cuentan " + contadas + " de " + CLASES[sec].length + " clases";
      cont.innerHTML = "";
      CLASES[sec].forEach(function (c, i) {
        var b = document.createElement("button");
        b.className = "chip";
        b.type = "button";
        b.textContent = c;
        b.setAttribute("aria-pressed", cuenta(sec, i) ? "false" : "true");
        b.addEventListener("click", function () {
          var num = i + 1, pos = excluidas[sec].indexOf(num);
          if (pos === -1) excluidas[sec].push(num); else excluidas[sec].splice(pos, 1);
          excluidas[sec].sort(function (x, y) { return x - y; });
          guardarExcluidas();
          renderTodo();
          abrir("tab-docente");
        });
        cont.appendChild(b);
      });
    });
    document.getElementById("snippet").textContent =
      "var EXCLUIDAS = { martes: [" + excluidas.martes.join(", ") +
      "], viernes: [" + excluidas.viernes.join(", ") + "] };";
  }

  document.getElementById("copiarSnippet").addEventListener("click", function () {
    var b = this, t = document.getElementById("snippet").textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(t);
    b.textContent = "Línea copiada";
    setTimeout(function () { b.textContent = "Copiar línea"; }, 1800);
  });
  document.getElementById("resetClases").addEventListener("click", function () {
    excluidas = { martes: [], viernes: [] };
    guardarExcluidas();
    renderTodo();
    abrir("tab-docente");
  });

  /* ---------------- Panel docente: grupos ---------------- */
  var KEY_G = "hd3-r3-grupos";
  var grupos = [];
  try { grupos = JSON.parse(localStorage.getItem(KEY_G)) || []; } catch (err) { grupos = []; }
  if (!Array.isArray(grupos)) grupos = [];
  function guardarGrupos() { try { localStorage.setItem(KEY_G, JSON.stringify(grupos)); } catch (err) {} }
  function nuevoGrupo() { return { nombre: "", seccion: "martes", integrantes: [], notas: [null,null,null,null,null,null,null], noPresento: false }; }
  function clamp(v) { return isNaN(v) ? null : r1(Math.min(7, Math.max(1, v))); }

  function notaTrabajo(g) {
    var notas = g.notas.slice();
    if (g.noPresento) notas[6] = 1;
    if (notas.filter(function (n) { return typeof n === "number"; }).length < 7) return null;
    return r1(notas.reduce(function (a, b) { return a + b; }, 0) / 7);
  }

  function renderGrupos() {
    var cont = document.getElementById("grupos");
    cont.innerHTML = "";
    grupos.forEach(function (g, idx) {
      var card = document.createElement("div");
      card.className = "grupo";

      var head = document.createElement("div");
      head.className = "grupo-head";
      var nom = document.createElement("input");
      nom.type = "text"; nom.placeholder = "Nombre del grupo"; nom.value = g.nombre || "";
      nom.addEventListener("input", function () { g.nombre = nom.value; guardarGrupos(); });
      var sel = document.createElement("select");
      SECCIONES.forEach(function (s) {
        var o = document.createElement("option");
        o.value = s; o.textContent = "Sección " + s;
        if (g.seccion === s) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener("change", function () { g.seccion = sel.value; g.integrantes = []; guardarGrupos(); renderGrupos(); });
      var quitar = document.createElement("button");
      quitar.className = "btn btn-quiet"; quitar.type = "button"; quitar.textContent = "Eliminar";
      quitar.addEventListener("click", function () { grupos.splice(idx, 1); guardarGrupos(); renderGrupos(); });
      head.appendChild(nom); head.appendChild(sel); head.appendChild(quitar);
      card.appendChild(head);

      var grid = document.createElement("div");
      grid.className = "grid-crit";
      CRITERIOS.forEach(function (c, i) {
        var box = document.createElement("div");
        var lb = document.createElement("label"); lb.textContent = c;
        var inp = document.createElement("input");
        inp.type = "number"; inp.min = "1"; inp.max = "7"; inp.step = "0.1";
        inp.value = (i === 6 && g.noPresento) ? "1.0" : (g.notas[i] !== null ? g.notas[i] : "");
        inp.disabled = (i === 6 && g.noPresento);
        inp.addEventListener("change", function () { g.notas[i] = clamp(parseFloat(inp.value)); guardarGrupos(); renderGrupos(); });
        box.appendChild(lb); box.appendChild(inp); grid.appendChild(box);
      });
      card.appendChild(grid);

      var chkWrap = document.createElement("label");
      chkWrap.className = "check";
      var chk = document.createElement("input");
      chk.type = "checkbox"; chk.checked = !!g.noPresento;
      chk.addEventListener("change", function () { g.noPresento = chk.checked; guardarGrupos(); renderGrupos(); });
      chkWrap.appendChild(chk);
      chkWrap.appendChild(document.createTextNode(" El grupo no expuso, la exposición queda en 1,0"));
      card.appendChild(chkWrap);

      var add = document.createElement("select");
      add.style.marginTop = "0.9rem";
      var ph = document.createElement("option");
      ph.value = ""; ph.textContent = "Agregar integrante…";
      add.appendChild(ph);
      ESTUDIANTES[g.seccion].forEach(function (e) {
        if (g.integrantes.indexOf(e.n) !== -1) return;
        var o = document.createElement("option"); o.value = e.n; o.textContent = e.n; add.appendChild(o);
      });
      add.addEventListener("change", function () {
        if (add.value) { g.integrantes.push(add.value); guardarGrupos(); renderGrupos(); }
      });
      card.appendChild(add);

      var nt = notaTrabajo(g);
      g.integrantes.forEach(function (nombre) {
        var e = ESTUDIANTES[g.seccion].filter(function (x) { return x.n === nombre; })[0];
        if (!e) return;
        var part = resumen(g.seccion, e).nota;
        var fin = (nt === null || part === null) ? null : nt * PESO_TRABAJO + part * PESO_PART;
        var row = document.createElement("div");
        row.className = "res-row";
        row.innerHTML = "<span>" + esc(e.n) + "</span><span>Participación " + fmt(part) + "</span>" +
          '<span class="res-final">' + fmt(fin) + "</span>";
        var x = document.createElement("button");
        x.className = "btn btn-quiet"; x.type = "button"; x.textContent = "Quitar";
        x.addEventListener("click", function () {
          g.integrantes = g.integrantes.filter(function (r) { return r !== nombre; });
          guardarGrupos(); renderGrupos();
        });
        row.appendChild(x);
        card.appendChild(row);
      });

      var tot = document.createElement("div");
      tot.className = "res-row";
      tot.innerHTML = "<span>Nota del trabajo grupal, 60%</span>" +
        '<span class="res-final">' + fmt(nt) + "</span>";
      card.appendChild(tot);
      cont.appendChild(card);
    });
  }

  document.getElementById("addGrupo").addEventListener("click", function () {
    grupos.push(nuevoGrupo()); guardarGrupos(); renderGrupos();
  });

  document.getElementById("exportCsv").addEventListener("click", function () {
    var filas = [["Grupo", "Seccion", "Estudiante"].concat(CRITERIOS)
      .concat(["No expuso", "Nota trabajo", "Participacion", "Nota final"])];
    grupos.forEach(function (g) {
      var nt = notaTrabajo(g);
      var crit = g.notas.map(function (n, i) { return (i === 6 && g.noPresento) ? "1.0" : (n !== null ? n : ""); });
      g.integrantes.forEach(function (nombre) {
        var e = ESTUDIANTES[g.seccion].filter(function (x) { return x.n === nombre; })[0];
        if (!e) return;
        var part = resumen(g.seccion, e).nota;
        var fin = (nt === null || part === null) ? null : nt * PESO_TRABAJO + part * PESO_PART;
        filas.push([g.nombre || "", g.seccion, e.n].concat(crit, [
          g.noPresento ? "Si" : "No",
          nt === null ? "" : nt.toFixed(1),
          part === null ? "" : r1(part).toFixed(1),
          fin === null ? "" : r1(fin).toFixed(1)
        ]));
      });
    });
    var csv = filas.map(function (r) {
      return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(";");
    }).join("\n");
    var blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "notas-r3-hd3.csv";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  });

  /* ---------------- Tema claro y oscuro ---------------- */
  var KEY_T = "hd3-r3-tema";
  var btnTema = document.getElementById("theme");
  function aplicarTema(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    var oscuroAhora = t === "dark" ||
      (!t && window.matchMedia("(prefers-color-scheme: dark)").matches);
    btnTema.textContent = oscuroAhora ? "Modo claro" : "Modo oscuro";
  }
  var temaGuardado = null;
  try { temaGuardado = localStorage.getItem(KEY_T); } catch (err) {}
  aplicarTema(temaGuardado);
  btnTema.addEventListener("click", function () {
    var oscuroAhora = document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var nuevo = oscuroAhora ? "light" : "dark";
    try { localStorage.setItem(KEY_T, nuevo); } catch (err) {}
    aplicarTema(nuevo);
  });

  /* ---------------- Pestañas ---------------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs button[role="tab"]'));
  function abrir(id) {
    tabs.forEach(function (b) {
      var sel = b.id === id;
      b.setAttribute("aria-selected", sel ? "true" : "false");
      document.getElementById(b.getAttribute("aria-controls")).hidden = !sel;
    });
    var slug = id.replace("tab-", "");
    if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
  }
  tabs.forEach(function (b) { b.addEventListener("click", function () { abrir(b.id); }); });
  window.addEventListener("hashchange", function () {
    var h = location.hash.slice(1);
    if (h && document.getElementById("tab-" + h)) abrir("tab-" + h);
  });

  /* ---------------- Arranque ---------------- */
  function renderTodo() {
    SECCIONES.forEach(renderSeccion);
    renderChips();
    renderGrupos();
  }

  renderTodo();
  renderMosaico();
  var h0 = location.hash.slice(1);
  if (h0 && document.getElementById("tab-" + h0)) abrir("tab-" + h0);
})();
