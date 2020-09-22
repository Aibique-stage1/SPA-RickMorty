import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../tools/getHash';
import resolveRoutes from '../tools/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,//Dynamic value
    '/contact': 'Contact', 
}

//It will show elements following the logic
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;