import { Link } from "react-router-dom";
import Heading from "../reusable/Heading";

function CategoryItem({ img, title, link }) {
  return (
    <div className="rounded-lg h-96">
      <Link to={link} title={title}>
        <img
          className="rounded-lg w-full h-full object-cover"
          src={img}
          alt={title}
        />
      </Link>
      <div className="p-5">
        <Link to={link} title={title}>
          <Heading type="h3" text={title} className="text-center" />
        </Link>
      </div>
    </div>
  );
}
export default CategoryItem;
