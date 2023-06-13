import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import OwnerDetails from "../../components/PropertyDetails/OwnerDetails";
import PropertyImages from "../../components/PropertyDetails/PropertyImages";
import locationIcon from "../../assets/images/location_icon.svg";
import MoreDetails from "../../components/PropertyDetails/MoreDetails";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import {
  deleteProperty,
  fetchPropertyById,
} from "../../store/slice/property/propertySlice";
import Amenties from "../../components/Amenties/Amenties1";
import Breadcrumbs from "../../components/BreadCrumbs/Breadcrumbs";
import PropertyDetailsSkeleton from "../../components/Skeleton/PropertyDetailsSkeleton";
import { CustomButton } from "../../components/CustomComponents";
import "./index.scss";

const PropertyDetails = () => {
  const [isUserProperty, setIsUserProperty] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
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
    // eslint-disable-next-line
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

  const handleDeleteProperty = () => {
    setIsBtnLoading(true);
    dispatch(deleteProperty(id)).then((response) => {
      if (response?.payload?.status === 200) {
        const msg = response?.payload?.data?.message;
        setIsBtnLoading(false);
        toast(msg);
        navigate(`/`);
      }
    });
  };

  return (
    <>
      <NavBar />
      {isLoading ? (
        <PropertyDetailsSkeleton />
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
              ownerData={propertyDetails?.user_details}
            />

            {/* Amenties */}
            <h1 className="amentiesh">Amenties</h1>
            <Amenties
              receivedAmenties={propertyDetails?.amenties}
              selectable={true}
              disableSelect={true}
            />

            <h3 className="amentiesh">
              Rent of Room - {propertyDetails?.rent} Rs
            </h3>

            {/* Details Para */}
            <MoreDetails data={propertyDetails?.details} />
          </div>
        )
      )}
      {/* Delete property button */}
      {Object.keys(propertyDetails)?.length > 0 && isUserProperty && (
        <Container align="center" className="mt-3">
          <CustomButton
            onClick={() => navigate(`/edit-property/${id}`)}
            title="Edit"
            style={{ marginRight: "1rem" }}
          />
          <CustomButton
            onClick={handleDeleteProperty}
            title="Delete"
            loading={isBtnLoading}
          />
        </Container>
      )}
      {/* Footer  */}
      <Footer />
    </>
  );
};

export default PropertyDetails;
