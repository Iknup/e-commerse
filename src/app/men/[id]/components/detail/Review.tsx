import { Item } from '@/utils/interfaces';
import ReviewPercentageBar from './ReviewPercentageBar';
import ReviewInput from './ReviewInput';

type Review = Item['review'];

type Props = {
  reviews: Review;
  prodId: string;
};

const Review = ({ reviews, prodId }: Props) => {
  //getting a total quantity of each ratings (1-5)
  const reviewMap = () => {
    let map = new Map();

    reviews?.forEach((review) => {
      const key = review.rating.toString();
      if (map.has(key)) {
        const quantity = map.get(key);
        map.set(key, +quantity + 1);
      } else {
        map.set(key, 1);
      }
    });

    return map;
  };

  const ratings = reviewMap();

  //getting the most rated
  const getMostRated = () => {
    let mostRating = { key: '', value: 0 };
    ratings.forEach((value, key) => {
      if (value > mostRating.value) {
        mostRating = { value, key };
      } else return;
    });

    return mostRating;
  };

  const getAverageRating = () => {
    let acc = 0;
    ratings.forEach((value, key) => {
      acc = acc + value * +key;
    });

    return (acc / reviews!.length).toFixed(1);
  };

  const rates: string[] = ['1', '2', '3', '4', '5'];

  const getRatesPercentage = () => {
    const mostRated = getMostRated();
    let ratesInPercentage = [0, 0, 0, 0, 0];
    rates.forEach((rate) => {
      if (mostRated.key === rate) {
        ratesInPercentage[+rate - 1] = 100;
      } else {
        if (ratings.has(rate)) {
          ratesInPercentage[+rate - 1] = +(
            (ratings.get(rate) / mostRated.value) *
            100
          ).toFixed(0);
        } else {
          return;
        }
      }
    });
    return ratesInPercentage;
  };

  const reviewBars = rates.map((rate) => {
    const timesRated = ratings.has(rate) ? ratings.get(rate) : 0;
    const ratesPercentages = getRatesPercentage();
    const percentage = ratesPercentages[+rate - 1];

    return (
      <ReviewPercentageBar
        key={rate}
        rate={rate}
        timesRated={timesRated}
        percentage={percentage}
      />
    );
  });

  const reviewText = reviews!.map((review) => {
    return (
      <div id={review.id} className='flex'>
        <div className='text-lg mr-5 text-center'>{review.rating}/5</div>
        <div>
          <h1 className='text-lg mb-2 font-semibold'>{review.user}</h1>
          <p className='long-description max-h-20 overflow-hidden'>
            {review.review}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='sm:flex w-full mt-2 mb-8'>
        <div className='flex sm:w-[40%] justify-evenly mb-4 sm:mb-0'>
          <p
            className='flex w-1/2 text-center justify-center items-center font-semibold 
        border-r-2 border-r-color-greyish text-4xl'
          >
            {reviews!.length > 0 ? getAverageRating() : 0}/5
          </p>
          <p className='text-3xl w-1/2 flex justify-center items-center p-3'>
            {reviews!.length} reviews
          </p>
        </div>
        <div className='flex flex-col-reverse w-full gap-y-2'>{reviewBars}</div>
      </div>
      <ReviewInput
        prodId={prodId}
        hasReview={reviews!.length > 0 ? true : false}
      />
      <div className='flex flex-col gap-y-5'>{reviewText}</div>
    </div>
  );
};

export default Review;
