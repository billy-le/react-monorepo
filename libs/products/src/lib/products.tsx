import { Ui } from '@react-monorepo/ui';

const products = ['hammer', 'nails', 'wrench', 'screwdriver'];

export function Products() {
  return (
    <div >
      <h1>Welcome to Products!</h1>
      <Ui data={products} />
    </div>
  );
}

export default Products;
