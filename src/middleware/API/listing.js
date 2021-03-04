import axios from 'axios';

const local = 'http://127.0.0.1:8000';


export function index(action) {
    // return axios({
    //     method: 'GET',
    //     url: local+`/api/listing?currentPage=${''}&pageSize=${''}`,
    //     headers: {
    //         'Accept':'application/json',
    //         'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
    //     }
    // }).then(response => {
    //     return response;
    // }).catch(error => {
    //     console.log(error.response);
    // });

    function createData(name, content) {
        return { name, content };
    }

    const rows = [
        createData('a', 'a Content'),
        createData('b', 'b Content'),
        createData('c', 'c Content'),
        createData('d', 'd Content'),
        createData('e', 'e Content'),
        createData('f', 'f Content'),
        createData('g', 'g Content'),
        createData('h', 'h Content'),
        createData('i', 'i Content'),
        createData('l', 'l Content'),
        createData('m', 'm Content'),
        createData('n', 'n Content'),
        createData('o', 'o Content'),
        createData('p', 'p Content'),
        createData('r', 'r Content'),
        createData('s', 's Content'),
        createData('t', 't Content'),
        createData('u', 'u Content'),
    ];

    return rows;
}
