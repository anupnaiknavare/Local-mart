import {
  LiaShippingFastSolid,
  LiaMoneyBillWaveSolid,
  LiaGiftSolid,
} from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
    comment:"solapur"
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
    comment:"Offers"
  },
  {
    title: "Free Surbside Pickup",
    icon: <LiaGiftSolid />,
    comment:"solapur"
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
    comment:"Anup Naiknavare 8390822189"
  },
];

const FeatureSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el) => (
          <FeatureCard key={el.title} title={el.title} icon={el.icon} comment={el.comment}/>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
