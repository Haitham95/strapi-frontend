import Link from "next/link";

const LinkBtnSecondary1 = ({ text, to }) => {
  return (
    <Link
      href={to}
      className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
    >
      {text}
      <span aria-hidden="true"> &rarr;</span>
    </Link>
  );
};

export default LinkBtnSecondary1;
