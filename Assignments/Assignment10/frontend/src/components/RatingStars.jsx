import { FaStar } from "react-icons/fa"


const RatingStars = ({ rating, size = 11 }) => ( 

  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} size={size} className={i < Math.round(rating) ? 'text-[#141414]' : 'text-[#E5E3DD]'} />
    ))}
  </div>
)

export default RatingStars