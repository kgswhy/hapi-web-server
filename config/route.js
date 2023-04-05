const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) =>{
            return 'Homepage';
        },
    },
    {
        method:'*',
        path: '/',
        handler: (request, h) => {
            return `halaman tidak dapat diakses dengen method tersebut`
        },
    },
    {
        method: 'GET',
        path:'/about',
        handler: (request, h) => {
            return 'about page';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method tersebut`;
        },
    },
    {
        method:'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger!" } = request.params;
            const { lang } = request.query;

            if(lang === 'id'){
                return `Hai, ${name}`;
            }

            return `Hallo, ${name}`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'halaman tidak ditemukan';
        },
    },
];

module.exports = routes;