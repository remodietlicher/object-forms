import React from "react";
import { FormMetadata } from "../../metadata/FormMetadata";

interface FormProps {
  meta: FormMetadata;
}

export const FormComponent: React.FC = ({ meta }: FormProps) => {
  return <h1>{meta.target.name}</h1>;
};