import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="reviewedBy" source="reviewedBy" />
        <TextInput label="reviewedCategory" source="reviewedCategory" />
        <TextInput label="reviewedEvent" source="reviewedEvent" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
