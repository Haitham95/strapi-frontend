import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  defaultText: string;
  category?: {
    link: string;
    title: string;
  };
  filter?: {
    title: string;
  };
};

const BreadcrumbDemo1 = ({
  defaultText,
  category = null,
  filter = null,
}: Props) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4 my-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {category ? (
          <li>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={category.link}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {category.title}
              </Link>
            </div>
          </li>
        ) : (
          <li>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <b
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current="page"
              >
                {defaultText}
              </b>
            </div>
          </li>
        )}

        {filter ? (
          <li>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <b
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current="page"
              >
                {filter.title}
              </b>
            </div>
          </li>
        ) : null}
      </ol>
    </nav>
  );
};

export default BreadcrumbDemo1;
