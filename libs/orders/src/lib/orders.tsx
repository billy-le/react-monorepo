import { Ui } from '@react-monorepo/ui';

const orders = ['#12', "#51", "#77"]

export function Orders() {
  return (
    <div >
      <h1>Welcome to Orders!</h1>
      <Ui data={orders} />
    </div>
  );
}

export default Orders;
