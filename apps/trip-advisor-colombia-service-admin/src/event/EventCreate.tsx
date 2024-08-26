import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { CityTitle } from "../city/CityTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="city.id" reference="City" label="city">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <TextInput label="createdBy" source="createdBy" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="manager" source="manager" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
