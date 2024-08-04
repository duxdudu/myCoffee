/* eslint-disable react/no-unescaped-entities */
import ReviewCard from "../layOut/ReviewCard";
import { review } from "../utils/Data";

function Review() {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24">customer's Reviews</h1>
      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        {review.map((data) => (
          <ReviewCard title={data.title} src={data.src} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Review;
