import AppContainer from "../../components/appContainer";
import styled from "styled-components";
import React from "react";
import FormField from "../../components/formField";
import TextAreaFormFiled from "../../components/textAreaFormFiled";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";

const schema = yup
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

const AddMonument: React.FC<{}> = () => {
  const resolver = useYupValidationResolver(schema);
  const methods = useForm({ resolver });
  const onSubmit = (data: any) => console.log(data);
  const {
    formState: { errors },
  } = methods;

  return (
    <AppContainer>
      <Container>
        <Card>
          <CardHeader>
            <CardHeading>Heading</CardHeading>
          </CardHeader>
          <CardBody>
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <FormField
                  placeholder="Nazwa zabytku"
                  name="monumentName"
                  errorMessage={errors.monumentName?.message}
                />
                <DoubleFiledContainer>
                  <FormField
                    placeholder="Miejscowość"
                    name="city"
                    errorMessage={errors.city?.message}
                  />
                  <FormField
                    placeholder="Kraj"
                    name="country"
                    errorMessage={errors.country?.message}
                  />
                </DoubleFiledContainer>
                <DoubleFiledContainer>
                  <FormField
                    placeholder="Lat"
                    name="lat"
                    errorMessage={errors.lat?.message}
                  />
                  <FormField
                    placeholder="Lng"
                    name="lng"
                    errorMessage={errors.lng?.message}
                  />
                </DoubleFiledContainer>
                <FormField
                  placeholder="Link do zdjęcia"
                  name="photoUrl"
                  errorMessage={errors.photoUrl?.message}
                />
                <TextAreaContainer>
                  <TextAreaFormFiled
                    placeholder="hi"
                    name="description"
                    errorMessage={errors.description?.message}
                  />
                </TextAreaContainer>
                <SubmitButton type="submit">Zapisz</SubmitButton>
              </Form>
            </FormProvider>
          </CardBody>
        </Card>
      </Container>
    </AppContainer>
  );
};

export default AddMonument;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  padding: 2rem;
  border-radius: 5px;
  border: 0.5px solid #d6d6d6;
  -webkit-box-shadow: 0px 7px 19px -12px rgba(170, 170, 170, 1);
  -moz-box-shadow: 0px 7px 19px -12px rgba(170, 170, 170, 1);
  box-shadow: 0px 7px 19px -12px rgba(170, 170, 170, 1);
`;

const CardHeader = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  justify-content: space-between;
`;

const CardHeading = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headline5};
`;

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

const Form = styled.form`
  width: 100%;
`;

const DoubleFiledContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem 1rem;
  text-align: center;
  background-color: #c4c4c4;
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: 500;
  border-radius: 10px;
  color: white;
  letter-spacing: 1px;
`;

const TextAreaContainer = styled.div`
  height: 150px;
  margin: 1rem 0;
`;
