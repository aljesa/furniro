import Heading from "../reusable/Heading";
import Paragraph from "../reusable/Paragraph";
import CategoryItem from "./CategoryItem";
import dining from "../../assets/images/categories/dining.png";
import living from "../../assets/images/categories/living.png";
import bedroom from "../../assets/images/categories/bedroom.png";

const categories = [
  {
    title: "Dining",
    img: dining,
    link: "/categories/dining",
  },
  {
    title: "Living",
    img: living,
    link: "/categories/living",
  },
  {
    title: "Bedroom",
    img: bedroom,
    link: "/categories/bedroom",
  },
  // Add more category data as needed
];

function CategoriesList() {
  return (
    <div className="container py-14 mb-14">
      <div className="text-center">
        <Heading type="h2" text="Browse The Range" />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="text-light-grey"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category.title}
            img={category.img}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
}
export default CategoriesList;
