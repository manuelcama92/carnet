const PDF = require("pdfkit");
const fs = require("fs");

var doc = new PDF();

doc.pipe(fs.createWriteStream("./ejemplo.pdf"));
//==============================================VARIABLES===================================
var ips = "compensar";
var cabezaFamiliar = "1020774657";
var afiliado = "juan perez";
var categoria = "A";
var cedula = "1020774657";
var telefono = "3016664632";
var fechaAfiliacion = "10/02/2019";
var tipo = "cotizante";
// ===============imagen====================================================================
doc.image(
  "/home/lenovo/Escritorio/Bictia/00.proyecto/imprimaCarnet/img4.png",
  5,
  5,
  {
    scale: 0.45
  }
);
// ===============imagen====================================================================
//=== cedula
doc.fontSize(7);
doc.text(cabezaFamiliar, 20, 60, {
  size: 3,
  columns: 3,
  align: "justify"
});
//=== afiliado
doc.fontSize(7);
doc.text(afiliado, 20, 86, {
  size: 3,
  columns: 3,
  align: "justify"
});
//=== ips
doc.fontSize(7);
doc.text(ips, 20, 123, {
  size: 3,
  columns: 3,
  align: "justify"
});
//======== 2 columna=============================================================
//=====categoria
doc.fontSize(7);
doc.text(categoria, 150, 60, {
  size: 3,
  columns: 3,
  align: "justify"
});
//====cedula
doc.fontSize(7);
doc.text(cedula, 130, 86, {
  size: 3,
  columns: 3,
  align: "justify"
});
//====telefono
doc.fontSize(7);
doc.text(telefono, 130, 123, {
  size: 3,
  columns: 3,
  align: "justify"
});
//====afiliacion
doc.fontSize(7);
doc.text(fechaAfiliacion, 130, 150, {
  size: 3,
  columns: 3,
  align: "justify"
});
//======== 3 columna=============================================================
//=====tipo afiliado
doc.fontSize(7);
doc.text(tipo, 200, 86, {
  size: 3,
  columns: 3,
  align: "justify"
});

doc.end();
console.log("archivos generado");
