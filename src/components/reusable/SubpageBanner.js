import bannerLogo from "../../assets/images/banner/banner-logo.png";
import Breadcrumbs from "./Breadcrumbs";
import Heading from "./Heading";

function SubpageBanner({ title, imageUrl }) {
  return (
    <div
      className=" py-10 px-4 text-center bg-cover bg-center h-80"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="container text-center">
        <img
          src={bannerLogo}
          alt="Furniro"
          title="Furniro"
          className="mx-auto"
        />
        <Heading type="h1" text={title} className="font-medium" />
        <Breadcrumbs />
      </div>
    </div>
  );
}

export default SubpageBanner;
