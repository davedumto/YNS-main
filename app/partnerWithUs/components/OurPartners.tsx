import Image from "next/image"
import {
  Corywise,
  Microsoft,
  Autocheck,
  Flutterwave,
  EvolveCredit,
  Kuda,
  Stripe,
} from "../../../public/images/partnerWithUs"

const OurPartners: React.FC = () => {
  return (
    <section className="">
      <h1 className="ml-5 xl:ml-[106px] text-[30px] xl:text-[40px] text-[#2F2F2F] font-lato leading-[44px]">
        Our Partners
      </h1>

      <div className="overflow-hidden pt-[40px]">
        <div className="flex flex-wrap xl:flex-nowrap pl-4 lg:pl-0 gap-[80px]">
          <Image src={Corywise} alt="Corywise Logo" />

          <Image src={Microsoft} alt="Microsoft Logo" />

          <Image src={Autocheck} alt="Autocheck Logo" />

          <Image src={Flutterwave} alt="Flutterwave Logo" />

          <Image src={EvolveCredit} alt="EvolveCredit Logo" />

          <Image src={Kuda} alt="Kuda Logo" />

          <Image src={Stripe} alt="Stripe Logo" />
        </div>
      </div>
    </section>
  )
}

export default OurPartners
