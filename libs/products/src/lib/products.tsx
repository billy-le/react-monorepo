import { Ui } from '@react-monorepo/ui';

const products = ['hammer', 'nails', 'wrench', 'screwdriver'];

export function Products() {
  return (
    <div >
      <h1>We have many products for you!</h1>
      <Ui data={products} />
    </div>
  );
}

export default Products;
