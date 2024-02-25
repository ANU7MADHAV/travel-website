import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="mb-5 flex w-[200px] flex-col  items-center justify-center gap-y-3">
      <section>
        <h1 className="text-xl font-bold">Contact Us</h1>
      </section>
      <section className="space-y-1">
        <Link href="tel:9791069197">
          <p>9791069197</p>
        </Link>
        <Link href="tel:00971561561825">
          <p>00971561561825</p>
        </Link>
        <Link href="mailto:firstguidetours@gmail.com">
          <p>firstguidetours@gmail.com</p>
        </Link>
      </section>
    </div>
  );
};

export default FooterContact;
