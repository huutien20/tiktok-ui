import { HeaderOnly } from '~/compoments/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

//Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/profile',
        component: Profile,
        layout: null,
    },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
