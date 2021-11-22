import AppContainer from "../../components/appContainer";
import styled from "styled-components";
import React from "react";
import FormField from "../../components/formField";
import TextAreaFormFiled from "../../components/textAreaFormFiled";
import { useForm, FormProvider } from "react-hook-form";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import AddMonumentSchema from "../../schemas/addMonumentSchema";
import firebase from "../../firebase/clientApp";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const AddMonument: React.FC<{}> = () => {
  const resolver = useYupValidationResolver(AddMonumentSchema);
  const methods = useForm({ resolver });
  const uuid = uuidv4();
  const onSubmit = async (data: any) => {
    try {
      await setDoc(doc(getFirestore(firebase), "monuments", uuid), data);
    } catch (e) {
      console.error(`can't save monument in db`);
    }
  };
  const {
    formState: { errors },
  } = methods;

  return (
    <AppContainer>
      <Container>
        <Card>
          <CardHeader>
            <CardHeading>Dodaj zabytek</CardHeading>
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
                    placeholder="Opis"
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
