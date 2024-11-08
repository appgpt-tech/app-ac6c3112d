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
const ListHistoryTitle = () => {
  const record = useRecordContext();
  return <span>ListHistory {record ? `"${record.Date}"` : ''}</span>;
};

export const ListHistoryList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="ShoppingList" reference="Shoppinglists" />
      <DateField source="Date" />
      <TextField source="ProductsAdded" />
      <TextField source="ProductsRemoved" />
      <TextField source="Notes" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const ListHistoryEdit = () => (
  <Edit title={<ListHistoryTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="ShoppingList" reference="Shoppinglists" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="Date" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProductsAdded" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProductsRemoved" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Notes" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const ListHistoryCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="ShoppingList" reference="Shoppinglists" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="Date" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProductsAdded" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ProductsRemoved" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Notes" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="ShoppingList"
    label="ShoppingList"
    reference="Shoppinglists"
    alwaysOn
  />,
  ,
  ,
  ,
  ,
];
