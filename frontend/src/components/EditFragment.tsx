import React, { useEffect } from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";
import FragmentModel from "../models/FragmentModel";

interface EditFragmentProps {
  handleEdit(data: FragmentModel): void;
}

const EditFragment = ({ handleEdit }: EditFragmentProps) => {
  const { register, handleSubmit, setFocus } = useForm();

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const submitForm: SubmitHandler<FragmentModel> = (data) => {
    handleEdit(data);
  };

  return (
    <Container>
      <TextArea {...register("title")}></TextArea>
      <AddButton onClick={handleSubmit(submitForm)}>
        <BiCheck />
      </AddButton>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-items: center;
  border-radius: 15px;
  background-color: #fdfff0;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  color: black;
  overflow: hidden;
  padding: 10px 10px 0px 10px;
`;
const TextArea = styled.textarea`
  border: none;
  resize: none;
  background-color: #fdfff0;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;
const AddButton = styled.div`
  padding: 10px;
  font-size: 1.5em;
  background-color: #69e291;
  color: white;
  width: 100%;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #91ffb6;
  }
`;
export default EditFragment;
