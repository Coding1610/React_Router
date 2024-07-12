# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Theory

# _React-Router-V6_

# _BrowserRouter_

1. BrowserRouter means is connect our react app with browser URL.

# _Why Not Use "a" Tag_

1. We don't use "a" tag beacause React is SPA and when we use "a" tag it Reload our page and we don't need that.
2. We use Link & NavLink.

# _useRouteError()_

1. It is use , when our app thrown an error.
2. It catch the error and we are able to log that error.

<h3> Syntax </h3>

    import { useRouteError } from 'react-router;

    const error = useRouteError();
    console.error(error);

    {error.statusText || error.message}

# _Dynamic URL

<h3>Syntax</h3>

    path:"/post/:category"
    <Link to="/post/:category"/>
    <NavLink to="/post/:category"/>

# _useParams()_

1. It gives a variable.
<h3>Syntax</h3>

    const {var1, var2, .. } = useParams();

2. Now use can use this variables.

# _useSearchParams()_

1. It is use when you want to play wwith Query.
<h3>Syntax</h3>

    url:"http://localhost:5173/post/mobile?price=12000&color=yellow"
    key1 : price
    key2 : color

2. For finding value of keys,
<h3> Syntax </h3>

    const [sp,setSP] = useSearchParams();
    console.log(sp);
    console.log(sp.get('key1'));
    many more..

# _Conditional Route , Navigate & useLocation()_

1. When you want ot render components based on coditions.
2. You can pass data to Navigate Component using useLocation() hook.
<h3>Syntax</h3>

    const data ={
        name:"hello",
        number:16
    }
    path:"/dashboard",
    element: isLoggedIn ? <DashboardPage/> : <Navigate to="/login" replace state={data}/>,

    In Login Page
    const location = useLocation();
    Access : {location.state.name};

    replace : History me kuch store na ho isliye , set as true.

# _useNavigate()_

1. It is use when you want to call a component from another component.
<h3>Syntax</h3>

    let navigate = useNavigate();
    [here navigate is function]
    Access : navigate( "/path" , {state:data} , replace );
    Access : navigate(1||-1||2);
