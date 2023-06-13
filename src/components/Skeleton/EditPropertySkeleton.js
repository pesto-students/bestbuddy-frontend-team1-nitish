import React from "react";
import Skeleton from "react-loading-skeleton";

const EditPropertySkeleton = () => {
  const fieldsNums = Array.from(Array(6).keys());
  const amentiesNums = Array.from(Array(10).keys());
  return (
    <>
      <div className="edit-property-skeleton-header">
        {fieldsNums?.map((item) => (
          <Skeleton key={item} height={40} width={420}></Skeleton>
        ))}
      </div>
      <div className="edit-property-skeleton-amenties">
        {amentiesNums?.map((item) => (
          <Skeleton
            key={item}
            height={200}
            width={210}
            borderRadius={10}
          ></Skeleton>
        ))}
      </div>
    </>
  );
};

export default EditPropertySkeleton;
