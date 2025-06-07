import { Route, Routes, Link } from 'react-router-dom';
import { Products } from '@react-monorepo/products';
import { Orders } from '@react-monorepo/orders';

export function App() {
  return (
    <div>
      <div role="navigation" className='mb-10'>
        <ul className="flex gap-4">
          <li>
            <Link to="/"><h1>Home</h1></Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.
            </div>
          }
        />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />

      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
