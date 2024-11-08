//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const ExpirationDateReminderTitle = () => {
  const record = useRecordContext();
  return (
    <span>ExpirationDateReminder {record ? `"${record.Product}"` : ''}</span>
  );
};

export const ExpirationDateReminderList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="Product" />
      <DateField source="ExpirationDate" />
      <DateField source="ReminderDate" />
      <ReferenceField source="User" reference="Useraccount" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const ExpirationDateReminderEdit = () => (
  <Edit title={<ExpirationDateReminderTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Product" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="ExpirationDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="ReminderDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Useraccount" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const ExpirationDateReminderCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Product" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="ExpirationDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="ReminderDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Useraccount" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  <ReferenceInput
    source="User"
    label="User"
    reference="Useraccount"
    alwaysOn
  />,
];
