// === CONVERT TO CSV === //
convertCSV = (reportArray) => {
    const array = typeof reportArray != "object" ? JSON.parse(reportArray) : reportArray;
    let str = "";
    for (let i = 0; i < array.length; i++) {
        let line = "";
        for (let index in array[i]) {
            if (line != "") line += ",";
            line += array[i][index];
        }
    str += line + "\r\n";
    }
    return str;
}

// === EXPORT FILE TO DOWNLOAD === //
function exportFile(headers, items, fileName) {
    if (headers) {
        items.unshift(headers);
    }
    const jsonObject = JSON.stringify(items);
    const csv = convertCSV(jsonObject);
    const exportName = fileName + ".csv" || "export.csv";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportName);
    } else {
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

// === HEADERS TABLE FILE === //
const headers = {
    sku: 'SKU',
    codigo_barras: 'CODIGO_BARRAS',
    codigo_fabricante: 'CODIGO_FABRICANTE',
    titulo: 'TITULO',
    id_marca: 'ID_MARCA',
    id_categoria: 'ID_CATEGORIA',
    length: 'LENGTH',
    width: 'WIDTH',
    height: 'HEIGHT',
    weight: 'WEIGHT',
    status: 'STATUS'
}

// === GENERATE REPORT === //
generarReporte = () => {

    let url = './products.json';

    let config = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => {
        exportFile(headers, data, 'reporte');
    })

}