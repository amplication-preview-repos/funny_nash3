import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const EventManagerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="city">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <TextInput label="contactInfo" multiline source="contactInfo" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
