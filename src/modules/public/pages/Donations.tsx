import { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { usePaystackPayment } from "react-paystack";
import OrderConfirmedCard from "../components/OrderConfirmedCard";

const Donation = () => {
  const priceFormat = new Intl.NumberFormat("en-US");
  const [showCard, setShowCard] = useState(false);
  const TOTAL = 300 * 100;

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: TOTAL, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_a507bd6845bb5cad347a591e06e88c6fde817cc1",
  };

  // you can call this function anything
  const onSuccess: any = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    setShowCard(true);
  };

  // you can call this function anything
  const onClose: any = () => {
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);

  return (
    <section>
      <Nav />

      <div className="w-full h-auto  flex flex-col mt-22 md:mt-32 md:flex-row items-center">
        <div className="mx-0   px-0 md:px-20 my-6 pb-28 w-11/12 md:w-4/5 rounded shadow-lg  ">
          <h1 className="text-4xl mx-5 md:mx-auto text-green-600 py-5 font-bold text-left">
            Donations
          </h1>

          <p className=" mx-auto  text-lg">
            Your generous donation is deeply appreciated and makes a significant impact. Thank
            you for your kindness and selflessness in giving back to those in need.
          </p>

          <div className="my-2 flex flex-col md:flex-row item-center ">
            <a
              // href="https://forms.gle/PLYZyHHwBp4M8GGK9"
              onClick={() => {
                initializePayment(onSuccess);
              }}
              className=" mx-3 md:mx-0 mt-16 py-4 w-2/6 bg-green-700 text-center transition-all hover:bg-gradient-to-r from-green-500 rounded-md text-lg text-white cursor-pointer font-md"
            >
              Pay Online
            </a>
            {/* <a
              // href="https://forms.gle/PLYZyHHwBp4M8GGK9"
              // onClick={() => setShowForm(true)}
              className=" mx-3 md:mx-auto mt-16 py-4 w-2/6 bg-green-700 text-center transition-all hover:bg-gradient-to-r from-green-500 rounded-lg text-lg text-white cursor-pointer font-md"
            >
              Bank Details
            </a> */}
          </div>
        </div>

        <img
          src=" img/undraw_savings_re_eq4w.svg"
          alt=""
          className="hidden md:flex w-2/6 h-auto   "
        />
      </div>

      <Footer />
      <OrderConfirmedCard showCard={showCard} setShowCard={setShowCard} />
    </section>
  );
};

export default Donation;
