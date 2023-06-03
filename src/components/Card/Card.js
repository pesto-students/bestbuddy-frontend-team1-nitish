import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Matchimg from "../../assets/Match.svg";
import { matchCalculator } from "../../utils/formFieldHelpers";
import ImageWrapper from "../ImageWrapper";
import "./Card.scss";

const Card = ({ property }) => {
  const userPrefs = useSelector((state) => state?.user?.userInfo?.preferences);
  const matchPercentage = matchCalculator(userPrefs, property?.preferences);

  return (
    <div className="card">
      <Link to={`/details/${property?._id}`} key={property?._id}>
        <div className="card-image">
          <ImageWrapper imgSrc={property?.image?.[0]}/>
        </div>
        <div className="heading">
          <h5>{property?.name}</h5>
          <h6>{property?.city}</h6>
          <div className="matching">
            <img src={Matchimg} alt="Match" />
            <h6>{matchPercentage}% Match</h6>
          </div>
        </div>
        <div className="badge">Top Match</div>
      </Link>
    </div>
  );
};

export default Card;
