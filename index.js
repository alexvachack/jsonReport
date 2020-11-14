generarReporte = () => {

    let url = 'http://dprisa-connect.com/api/productos';

    let config = {
        mode: 'no-cors',
        credentials: 'include'
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => console.log(data))

}