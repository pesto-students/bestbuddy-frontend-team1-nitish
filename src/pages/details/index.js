import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OwnerDetails from "./OwnerDetails";
import PropertyImages from "./PropertyImages";
import locationIcon from "../../assets/images/location_icon.svg";
import "./index.scss";
import MoreDetails from "./MoreDetails";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import {
  deleteProperty,
  fetchPropertyById,
} from "../../store/slice/property/propertySlice";
import Amenties from "../../components/Amenties/Amenties1";
import { toast } from "react-toastify";
import Breadcrumbs from "../../components/BreadCrumbs/Breadcrumbs";
import Skeleton from "react-loading-skeleton";
import PropertyDetailsSkeleton from "../../components/Skeleton/PropertyDetailsSkeleton";

// To be removed after API Integration
const moreDetailsPara = `
Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better. Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.`;

const PropertyDetails = () => {
  const [isUserProperty, setIsUserProperty] = useState(false);
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { propertyById: propertyDetails, isLoading } = useSelector(
    (state) => state?.property
  );
  const userInfo = useSelector((state) => state?.user?.userInfo);

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(id));
      const userProperties = userInfo?.property;
      const isCurrUserProperty =
        userProperties?.find((item) => item?._id === id) || {};
      setIsUserProperty(Object.keys(isCurrUserProperty)?.length > 0);
    }
  }, [id]);

  const breadcrumbData = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: propertyDetails?.category,
      url: `/category/${propertyDetails?.category}`,
    },
    {
      id: 3,
      name: "Details",
      url: ``,
    },
  ];

  return (
    <>
      <NavBar />
      {isLoading ? (<PropertyDetailsSkeleton/>
      ) : (
        Object?.keys(propertyDetails)?.length > 0 && (
          <div className="container detailspage">
            <div className="property-details-topbar-container">
              <div className="breadcrumb">
                <Breadcrumbs data={breadcrumbData} />
              </div>
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
              <div className="property-details-search-input">
                {/* <input
                  className="search-input"
                  type="text"
                  placeholder="Search Rooms......"
                /> */}
              </div>
            </div>

            {/* Property Images Section */}
            <PropertyImages images={propertyDetails?.image} />

            {/* Property Owner Details */}
            <OwnerDetails
              preferences={propertyDetails?.preferences}
              ownerData={propertyDetails}
            />

            {/* Amenties */}
            <h1 className="amentiesh">Amenties</h1>
            <Amenties
              receivedAmenties={propertyDetails?.amenties}
              selectable={true}
              disableSelect={true}
            />

            {/* Details Para */}
            <MoreDetails data={moreDetailsPara} />
            {isUserProperty && (
              <Button
                className="deleteButton"
                onClick={() => {
                  dispatch(deleteProperty(id)).then((response) => {
                    toast(response.payload.data.message);
                    navigate(`/`);
                  });
                }}
              >
                Delete property
              </Button>
            )}
          </div>
        )
      )}
      {/* Footer  */}
      <Footer />
    </>
  );
};

export default PropertyDetails;
