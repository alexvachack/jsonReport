generarReporte = () => {

    let url = 'http://dprisa-connect.com/api/productos';

    let config = {
        credentials: 'include',
        headers: {
            Cookie: 'PHPSESSID=c91a0cbdecabff62349a1001b2d3a4d4'
        }
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => console.log(data))

}