const ProductDescriptionDemo1 = ({ description }) => {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Description</h3>

      <div
        className="text-base text-gray-700 space-y-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ProductDescriptionDemo1;
