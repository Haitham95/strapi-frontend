type Props = {
  title: string;
  description?: string;
};

const HeaderDemo2 = ({ title, description = null }: Props) => {
  return (
    <header className="">
      <div className="py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
};

export default HeaderDemo2;
