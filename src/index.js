import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-473iuxsz0grnzt8n.us.auth0.com
// tARGasliXTWgTIXPYl92651fQXJQSMdC
// {
//     "sub": "auth0|6367259782877f767b8ac7c8",
//     "nickname": "email",
//     "name": "email@email.com",
//     "picture": "https://s.gravatar.com/avatar/4f64c9f81bb0d4ee969aaf7b4a5a6f40?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fem.png",
//     "updated_at": "2022-11-06T23:56:59.436Z"
//   }
ReactDOM.render(
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
<UserProvider>
<ProductsProvider>
    <FilterProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </FilterProvider>
</ProductsProvider>
</UserProvider>
    </Auth0Provider>


, document.getElementById('root'))
