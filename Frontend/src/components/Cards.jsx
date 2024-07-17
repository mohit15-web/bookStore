import PropTypes from "prop-types";
function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image === null ? 'https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg' : item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name.slice(0, 20)}
              <div className="badge badge-secondary">{item.category.split(" ")[0]}</div>
            </h2>
            <p>{item.title.slice(0, 40)}</p>
            {item.isFree ? null : (
              <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Cards.propTypes ={
  item: PropTypes.object.isRequired
}

export default Cards;
