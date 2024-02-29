import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Explore",
      path: "/explore",
    },
  ];
  return (
    <div>
      <ul className="flex flex-col gap-3 md:flex-row  md:gap-8">
        {navLinks.map((link, index) => (
          <li
            className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  hover:text-blue-400 "
            key={index}
          >
            <Link href={link.path}>
              <h1>{link.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
