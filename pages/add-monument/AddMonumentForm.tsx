import React from "react";
import FormField from "../../components/formField";
import TextAreaFormFiled from "../../components/textAreaFormFiled";
import { useForm, FormProvider } from "react-hook-form";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import AddMonumentSchema from "../../schemas/addMonumentSchema";
import firebase from "../../firebase/clientApp";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { Monument } from "../../models/monument";
import styled from "styled-components";

export const AddMonumentForm: React.FC<{}> = () => {
  const resolver = useYupValidationResolver(AddMonumentSchema);
  const methods = useForm({ resolver });
  const uuid = uuidv4();
  const onSubmit = async (data: Monument) => {
    try {
      await setDoc(doc(getFirestore(firebase), "monuments", uuid), data);
      alert("Saved");
    } catch (e) {
      console.error(`can't save monument in db`);
    }
  };
  const {
    formState: { errors },
  } = methods;
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField
          placeholder="Nazwa zabytku"
          name="name"
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
          name="img"
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
  );
};

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
  border-radius: 5px;
  color: white;
  letter-spacing: 1px;
`;

const TextAreaContainer = styled.div`
  height: 150px;
  margin: 1rem 0;
`;
