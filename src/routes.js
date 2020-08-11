import React from 'react';
import Home from './pages/HomePage/HomePage';
import Vlog from './pages/VlogPage/Vlog';
import NotFound from './pages/NotFoundPage/NotFoundPage'
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductListActionPage from './pages/ProductListActionPage/ProductListActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main:() =>  <Home/>
    },
    {
        path: '/vlog',
        exact: false,
        main:() =>  <Vlog/>
    },
    {
        path: '/product-list',
        exact: false,
        main:() =>  <ProductListPage/>
    },
    {
        path: '/product/add',
        exact: false,
        main:({history}) =>  <ProductListActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main:() =>  <ProductListActionPage />
    },
    {
        path: '',
        exact: false,
        main:() =>  <NotFound/>
    },

]
export default routes