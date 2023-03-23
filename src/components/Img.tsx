import Iam1 from "../static/images/img1.png";
import Iam2 from "../static/images/img2.png";

const Img = () => {
  return (
    <>
      <h2>
        <img width={200} src={Iam1} alt="iam" className="rounded-10 mb-9" />
        {/* {props.img} */}
      </h2>
      <h2>
        <img width={200} src={Iam2} alt="iam" className="rounded-10 mb-9" />
        {/* {props.img1} */}
      </h2>
    </>
  );
};

export default Img;
