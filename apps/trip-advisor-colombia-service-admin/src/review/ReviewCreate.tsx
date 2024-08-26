import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="reviewedBy" source="reviewedBy" />
        <TextInput label="reviewedCategory" source="reviewedCategory" />
        <TextInput label="reviewedEvent" source="reviewedEvent" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
