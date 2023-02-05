import { StarIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductReviewDemo1({ reviews }) {
  return (
    <section className="bg-white py-24 max-w-3xl mx-auto">
      <div>
        <h2 className="sr-only">Customer Reviews</h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <div
              key={review.id}
              className="flex text-sm text-gray-500 space-x-4"
            >
              <div className="flex-none py-10">
                <img
                  src={review.avatarSrc}
                  alt=""
                  className="w-10 h-10 bg-gray-100 rounded-full"
                />
              </div>
              <div
                className={classNames(
                  reviewIdx === 0 ? "" : "border-t border-gray-200",
                  "flex-1 py-10"
                )}
              >
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="flex items-center mt-4">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  className="mt-4 prose prose-sm max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
