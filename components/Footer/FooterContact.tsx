import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="mb-5 flex w-[200px] flex-col  items-center justify-center gap-y-3">
      <section>
        <h1 className="text-xl font-bold">Contact Us</h1>
      </section>
      <section className="space-y-1 text-center">
        <section>
          <h1 className="font-semibold">India : </h1>
          <Link href="tel:9791069197">
            <p>+91 9092030609</p>
          </Link>
          <Link href="tel:9791069197">
            <p className="text-lg font-light">+91 9791069197</p>
          </Link>
          <Link href="tel:6383849226">
            <p> +91 6383849226</p>
          </Link>
        </section>

        <section>
          <h1 className="font-semibold">Dubai : </h1>
          <Link href="tel:971561561825">
            <p>+971 561561825</p>
          </Link>
          <Link href="tel:971 581567366">
            <p> +971 581567366</p>
          </Link>
        </section>
        <h1 className="font-semibold">Email :</h1>
        <Link href="mailto:firstguidetours@gmail.com">
          <p>firstguidetours@gmail.com</p>
        </Link>
      </section>
    </div>
  );
};

export default FooterContact;
