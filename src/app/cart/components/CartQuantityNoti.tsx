const CartQuantityNoti = ({ quantity }: { quantity: number }) => {
  return (
    <div className='text-black bg-white border-2 px-2 rounded-full'>
      {quantity}
    </div>
  );
};

export default CartQuantityNoti;
