import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OwnerDetails from "./OwnerDetails";
import PropertyImages from "./PropertyImages";
import locationIcon from "../../assets/images/location_icon.svg";
import "./index.scss";
import MoreDetails from "./MoreDetails";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import { fetchPropertyById } from "../../store/slice/property/propertySlice";
import Amenties from "../../components/Amenties/Amenties";
import BreadCrumb from '../../components/BreadCrumbs/Breadcrumbs';

const PropertyDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const propertyDetails = useSelector((state) => state?.property?.propertyById);

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(id));
    }
  }, [id]);

  const details = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima consequatur reprehenderit nesciunt quisquam maiores placeat velit laboriosam? Amet molestiae esse consequatur nobis ipsum pariatur vel earum voluptates alias ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima consequatur reprehenderit nesciunt quisquam maiores placeat velit laboriosam? Amet molestiae esse consequatur nobis ipsum pariatur vel earum voluptates alias ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima consequatur reprehenderit nesciunt quisquam maiores placeat velit laboriosam? Amet molestiae esse consequatur nobis ipsum pariatur vel earum voluptates alias ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima consequatur reprehenderit nesciunt quisquam maiores placeat velit laboriosam? Amet molestiae esse consequatur nobis ipsum pariatur vel earum voluptates alias ipsa.'
  return (
    <>
      <NavBar />
      <BreadCrumb />
      {Object?.keys(propertyDetails)?.length > 0 && (
        <div className="detailspage container">
          <div className="property-details-topbar-container">
            <div className="property-location">
              <h1>{propertyDetails?.name}</h1>
              <p className="location-p">
                <img
                  src={locationIcon}
                  alt={"location"}
                  width={23}
                  height={25}
                />
                <span className="location-text">
                  {propertyDetails?.city}, India
                </span>
              </p>
            </div>
          </div>
          <PropertyImages images={propertyDetails?.image} />
          <OwnerDetails
            preferences={propertyDetails?.perfrences}
            ownerData={propertyDetails}
          />
          <h1 className="amentiesh text-center">Amenties</h1>
          <Amenties />
          <MoreDetails data={details} />
          <h1 className="amentiesh">Related Suggestion</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default PropertyDetails;
