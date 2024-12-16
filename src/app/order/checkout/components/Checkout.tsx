import Form from "./Form";
import OrderInfo from "./OrderInfo";


function Checkout({post, methodes}:{post: any, methodes: any[] | undefined}) {


  return (
    <form className="h-full w-full max-w-[1440px] flex flex-col lg:flex-row gap-4 lg:gap-8 mb-32">
      <div className="w-full lg:w-3/5 ">
        <Form />
      </div>

      <div className="w-full lg:w-2/5">
        <OrderInfo postOrder={post} methodes={methodes}/>
      </div>
    </form>
  );
}

export default Checkout;
