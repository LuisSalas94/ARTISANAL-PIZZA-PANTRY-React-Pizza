import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import useCreateOrderHook from "./useCreateOrderHook";

const CreateOrder = () => {
  const {
    customer,
    setCustomer,
    phone,
    setPhone,
    address,
    setAddress,
    withPriority,
    setWithPriority,
    cart,
    totalPrice,
    isSubmitting,
    handleOrder,
  } = useCreateOrderHook();

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <form>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="adrress"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-4 w-4 accent-purple-400 focus:outline-none focus:ring-purple-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="text-xs font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            onClick={handleOrder}
            disabled={isSubmitting}
            type="primary"
          >{`Order now! ${formatCurrency(totalPrice)}`}</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
