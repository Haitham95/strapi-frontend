export default function Example({ children }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
        {children}
      </div>
    </>
  );
}
