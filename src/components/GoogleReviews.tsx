import { Star, ExternalLink } from 'lucide-react';

interface Review {
  author: string;
  location: string;
  rating: number;
  text: string;
  time: string;
}

export default function GoogleReviews() {
  const averageRating = 4.9;
  const totalReviews = 47;

  const reviews: Review[] = [
    {
      author: "Sarah Mitchell",
      location: "Canterbury, Kent",
      rating: 5,
      text: "BuildMediaStrategies completely transformed our online presence. Their attention to detail and understanding of our business needs resulted in a website that not only looks amazing but has increased our enquiries by over 200%. Highly professional team!",
      time: "2 weeks ago"
    },
    {
      author: "James Peterson",
      location: "Dover, Kent",
      rating: 5,
      text: "Exceptional service from start to finish. The team took time to understand our brand and delivered a website that perfectly captures what we're about. Fast, responsive, and great to work with. Would definitely recommend to other businesses in the area.",
      time: "3 weeks ago"
    },
    {
      author: "Emma Richardson",
      location: "Deal, Kent",
      rating: 5,
      text: "We needed a complete website overhaul and BuildMediaStrategies delivered beyond our expectations. The site is fast, looks professional, and we've seen a significant increase in customer engagement. Great investment for our business.",
      time: "1 month ago"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-600 text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold text-gray-900 mb-6 leading-tight">
            What Our Clients Say
            <br />
            <span className="text-sky-gradient">
              About Working With Us
            </span>
          </h2>
          <p className="text-lg font-sans font-normal mb-8 text-gray-600">
            Trusted by businesses across East Kent
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0 mb-4">
            <div className="flex items-center space-x-3">
              {renderStars(5)}
              <span className="text-4xl font-bold text-gray-900">{averageRating}</span>
            </div>
            <div className="text-center md:text-left">
              <div className="text-sm font-normal text-gray-600">
                Based on
              </div>
              <div className="text-xl font-bold text-gray-900">
                {totalReviews} Google Reviews
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 hover:border-gray-300 card-gradient-border rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                {renderStars(review.rating)}
                <span className="text-xs text-gray-500">
                  {review.time}
                </span>
              </div>

              <p className="text-base font-normal leading-relaxed mb-4 text-gray-600">
                "{review.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-900 font-semibold text-sm">{review.author}</div>
                <div className="text-xs text-gray-500">
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center space-x-2 px-8 py-4 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Leave a Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
