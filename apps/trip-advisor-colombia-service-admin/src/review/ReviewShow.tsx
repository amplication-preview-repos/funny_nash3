import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="rating" source="rating" />
        <TextField label="reviewedBy" source="reviewedBy" />
        <TextField label="reviewedCategory" source="reviewedCategory" />
        <TextField label="reviewedEvent" source="reviewedEvent" />
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
