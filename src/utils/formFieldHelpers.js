const formFields = [
  {
    key: "name",
    name: "property-name",
  },
  {
    key: "city",
    name: "location",
  },
  {
    key: "rent",
    name: "rent",
  },
  {
    key: "property-type",
    name: "property-type",
  },
  {
    key: "phone",
    name: "phone",
  },
  {
    key: "gender",
    name: "gender",
  },
  {
    key: "availableDate",
    name: "date",
  },
  {
    key: "typeOfShare",
    name: "occupancy",
  },
];

export const getFormValues = (formElements) => {
  if (formElements) {
    const payload = formFields?.reduce((agg, item) => {
      return { ...agg, [item?.key]: formElements[item?.name]?.value };
    }, {});
    return payload;
  }
};

export const uploaderTexts = {
  addAnotherFile: "Add another file...",
  addAnotherImage: "Add another image...",
  cancel: "cancel",
  "cancelled!": "cancelled",
  continue: "Continue",
  crop: "Crop",
  done: "Done",
  "error!": "Error!",
  finish: "Done",
  finishIcon: true,
  image: "Image",
  maxFilesReached: "Maximum number of files:",
  maxImagesReached: "Maximum number of images:",
  maxSize: "File size limit:",
  next: "Next",
  of: "of",
  orDragDropFile: "...or drag and drop a file.",
  orDragDropFiles: "...or drag and drop files.",
  orDragDropImage: "...or drag and drop an image.",
  orDragDropImages: "...or drag and drop images.",
  pleaseWait: "Please wait...",
  remove: "remove",
  "removed!": "removed",
  skip: "Skip",
  unsupportedFileType: "File type not supported.",
  uploadFile: "Upload a File",
  uploadFiles: "Upload Files",
  uploadImage: "Upload Images",
  uploadImages: "Upload Images",
};
