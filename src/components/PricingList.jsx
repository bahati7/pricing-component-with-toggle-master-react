import { pricing } from "../constants";

const PricingList = ({ isClicked }) => {
  return (
    <div className="flex justify-center max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] lg:w-full h-full px-10 even:bg-n-6 even:text-white text-center shadow-lg rounded lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4 font-bold">{item.title}</h4>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.pricemonth && (
              <>
                <div className="h3">$</div>
                <div className="text-[4.5rem] leading-none font-bold">
                  {isClicked ? item.priceannual : item.pricemonth}
                </div>
              </>
            )}
          </div>

          <ul className="mb-10">
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center justify-center py-5 border-b border-t even:border-n-1"
              >
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>

          <span
            className={`${
              item.id === "1"
                ? "bg-white text-n-6 hover:bg-n-6 hover:text-white border  border-white"
                : "bg-n-6 text-white hover:bg-n-1 hover:text-n-6 border  border-n-6"
            } flex justify-center cursor-pointer tracking-wide font-bold  border  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sms  p-25 py-2.5 me-2 mb-2`}
          >
            LEARN MORE
          </span>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
