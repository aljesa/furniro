import homeBanner from "../../assets/images/banner/homepage-banner.jpg";
import CategoriesList from "../categories/CategoriesList";
import Button from "../reusable/Button";
import Heading from "../reusable/Heading";
import Paragraph from "../reusable/Paragraph";
function Home() {
  return (
    <>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: `url(${homeBanner})`,
        }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div></div>
            <div className="bg-light-beige items-baseline rounded-xl p-10 mt-28">
              <Heading type="h4" text="New Arrival" className="" />
              <Heading
                type="h1"
                text="Discover Our New Collection"
                className="text-primary"
              />
              <Paragraph
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis."
              />
              <Button
                to="/shop"
                text="Buy Now"
                className="custom-button"
                isButton={false}
              />
            </div>
          </div>
        </div>
      </div>
      <CategoriesList />
    </>
  );
}
export default Home;
