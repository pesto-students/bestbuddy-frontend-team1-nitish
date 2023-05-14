import Skeleton from "react-loading-skeleton";

const PropertyDetailsSkeleton = () => {
  return (
    <div className="skeleton-container-property">
      <Skeleton height={70} borderRadius={10} />
      <Skeleton height={550} borderRadius={10} />
      <Skeleton height={70} borderRadius={10} />
      <Skeleton height={450} borderRadius={10} />
    </div>
  );
};
export default PropertyDetailsSkeleton;
