import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavDesktopDemo1 = ({ navData, setOpen }) => {
  return (
    <div className="relative ">
      <nav aria-label="Top">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
              <div className="h-full flex space-x-8">
                {navData.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-700 hover:text-gray-800",
                              "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full inset-x-0 bg-white text-sm text-gray-500">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />
                            {/* Fake border when menu is open */}
                            <div
                              className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                              aria-hidden="true"
                            >
                              <div
                                className={classNames(
                                  open ? "bg-gray-200" : "bg-transparent",
                                  "w-full h-px transition-colors ease-out duration-200"
                                )}
                              />
                            </div>

                            <div className="relative">
                              <div className="max-w-7xl mx-auto px-8">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                      >
                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="object-center object-cover"
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className="mt-6 block font-medium text-gray-900"
                                        >
                                          <span
                                            className="absolute z-10 inset-0"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {navData.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a>
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-800 flex items-center"
                >
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavDesktopDemo1;
