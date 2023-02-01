import Link from "next/link";

const LinkBtnPrimary1 = ({ text, to }) => {
  return (
    <Link
      href={to}
      className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
    >
      {text}
    </Link>
  );
};

export default LinkBtnPrimary1;
