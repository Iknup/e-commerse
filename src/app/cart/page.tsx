import CartBox from './components/CartBox';

const getCart = () => {};

const CartPage = () => {
  let cartContext;

  return (
    <main className='max-w-7xl mx-auto px-4 min-h-[80vh]'>
      <h1 className='font-bold text-3xl'>Tu carrito</h1>
      <CartBox />
    </main>
  );
};

export default CartPage;
