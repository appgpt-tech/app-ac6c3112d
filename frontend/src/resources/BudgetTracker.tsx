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
const BudgetTrackerTitle = () => {
  const record = useRecordContext();
  return <span>BudgetTracker {record ? `"${record.id}"` : ''}</span>;
};

export const BudgetTrackerList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="User" reference="Useraccount" />
      <NumberField source="BudgetAmount" />
      <NumberField source="CurrentSpending" />
      <NumberField source="RemainingBudget" />
      <TextField source="RecommendedProducts" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const BudgetTrackerEdit = () => (
  <Edit title={<BudgetTrackerTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Useraccount" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="BudgetAmount" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="CurrentSpending" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="RemainingBudget" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="RecommendedProducts" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const BudgetTrackerCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="User" reference="Useraccount" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="BudgetAmount" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="CurrentSpending" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="RemainingBudget" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="RecommendedProducts" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="User"
    label="User"
    reference="Useraccount"
    alwaysOn
  />,
  ,
  ,
  ,
  ,
];
