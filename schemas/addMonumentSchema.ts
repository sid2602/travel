import * as yup from "yup";

const AddMonumentSchema = yup
  .object({
    monumentName: yup.string().required("Nazwa zabytku jest wymagana"),
    city: yup.string().required("Miejscowość jest wymagana"),
    country: yup.string().required("Kraj jest wymagany"),
    lat: yup.number().required("lat jest wymagana"),
    lng: yup.number().required("lng jest wymagany"),
    photoUrl: yup.string().required("Link do zdjęcia jest wymagany"),
    description: yup.string().required("Opis jest wymagany"),
  })
  .required();

export default AddMonumentSchema;
