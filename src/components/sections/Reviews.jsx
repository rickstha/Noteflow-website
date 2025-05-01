import { reviews } from "../../utils/content"
const Reviews = () => {
  return (
    <section className=" m-auto flex max-w-[90rem] flex-wrap items-center gap-x-4 gap-y-4 mx-24 ">
    <ul className="flex ">
        {
            reviews.map((review)=>(
                <li key={review.id} className=" -mr-4 last:mr-0">
                    <img src={review.src} alt={review.alt} className=" border-primary-100 border-2 h-12 rounded-full"/>
                </li>
            ))
        }
    </ul>
    <p className="text-primary-100 text-xl/loose font-light">
    Trusted by <span className=" text-primary-500 font-bold tracking-tighter">1000+</span> Productivity junkies
    </p>
    </section>
  )
}

export default Reviews