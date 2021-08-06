import { CategoryPage } from "./category";
import { CheckoutBillingPage } from "./checkout/checkout-billing";
import { CheckoutOrderPage } from "./checkout/checkout-order";
import { CheckoutPaymentPage } from "./checkout/checkout-payment";
import { CheckoutShippingPage } from "./checkout/checkout-shipping";
import { AccountModal } from "./components/account-modal";
import { Cart } from "./components/cart";
import { Header } from "./components/header";
import { HomePage } from "./home";
import { MyProfilePage } from "./my-account/my-profile";
import { ProductPage } from "./product";


const page = {
  components: {
    accountModal: new AccountModal(),
    cart: new Cart(),
    header: new Header()
  },
  category: new CategoryPage(),
  checkout: {
    billing: new CheckoutBillingPage(),
    order: new CheckoutOrderPage(),
    payment: new CheckoutPaymentPage(),
    shipping: new CheckoutShippingPage()
  },
  home: new HomePage(),
  myAccount: {
    myProfile: new MyProfilePage()
  },
  product: new ProductPage()
};

export default page;
