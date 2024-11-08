//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import {
  EssentialItemCategoryList,
  EssentialItemCategoryCreate,
  EssentialItemCategoryEdit,
} from './resources/EssentialItemCategory';
import {
  ShoppingListList,
  ShoppingListCreate,
  ShoppingListEdit,
} from './resources/ShoppingList';
import {
  PriceComparisonList,
  PriceComparisonCreate,
  PriceComparisonEdit,
} from './resources/PriceComparison';
import {
  DietaryPreferencesList,
  DietaryPreferencesCreate,
  DietaryPreferencesEdit,
} from './resources/DietaryPreferences';
import {
  GroceryStoreList,
  GroceryStoreCreate,
  GroceryStoreEdit,
} from './resources/GroceryStore';
import {
  UserAccountList,
  UserAccountCreate,
  UserAccountEdit,
} from './resources/UserAccount';
import {
  ListHistoryList,
  ListHistoryCreate,
  ListHistoryEdit,
} from './resources/ListHistory';
import {
  ExpirationDateReminderList,
  ExpirationDateReminderCreate,
  ExpirationDateReminderEdit,
} from './resources/ExpirationDateReminder';
import {
  BudgetTrackerList,
  BudgetTrackerCreate,
  BudgetTrackerEdit,
} from './resources/BudgetTracker';
import EssentialItemCategoryIcon from '@mui/icons-material/Category';
import ShoppingListIcon from '@mui/icons-material/ShoppingCart';
import PriceComparisonIcon from '@mui/icons-material/CompareArrows';
import DietaryPreferencesIcon from '@mui/icons-material/Dining';
import GroceryStoreIcon from '@mui/icons-material/Storefront';
import UserAccountIcon from '@mui/icons-material/AccountCircle';
import ListHistoryIcon from '@mui/icons-material/HistoryToggleOff';
import ExpirationDateReminderIcon from '@mui/icons-material/EventNote';
import BudgetTrackerIcon from '@mui/icons-material/AccountBalanceWallet';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/ac6c3112d">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="EssentialItemCategory"
          options={{ label: 'Essential Item Category' }}
          list={EssentialItemCategoryList}
          create={EssentialItemCategoryCreate}
          edit={EssentialItemCategoryEdit}
          recordRepresentation="Name"
          icon={EssentialItemCategoryIcon}
        />
        <Resource
          name="ShoppingList"
          options={{ label: 'Shopping List' }}
          list={ShoppingListList}
          create={ShoppingListCreate}
          edit={ShoppingListEdit}
          recordRepresentation="Name"
          icon={ShoppingListIcon}
        />
        <Resource
          name="PriceComparison"
          options={{ label: 'Price Comparison' }}
          list={PriceComparisonList}
          create={PriceComparisonCreate}
          edit={PriceComparisonEdit}
          recordRepresentation="id"
          icon={PriceComparisonIcon}
        />
        <Resource
          name="DietaryPreferences"
          options={{ label: 'Dietary Preferences' }}
          list={DietaryPreferencesList}
          create={DietaryPreferencesCreate}
          edit={DietaryPreferencesEdit}
          recordRepresentation="Name"
          icon={DietaryPreferencesIcon}
        />
        <Resource
          name="GroceryStore"
          options={{ label: 'Grocery Store' }}
          list={GroceryStoreList}
          create={GroceryStoreCreate}
          edit={GroceryStoreEdit}
          recordRepresentation="Name"
          icon={GroceryStoreIcon}
        />
        <Resource
          name="UserAccount"
          options={{ label: 'User Account' }}
          list={UserAccountList}
          create={UserAccountCreate}
          edit={UserAccountEdit}
          recordRepresentation="Username"
          icon={UserAccountIcon}
        />
        <Resource
          name="ListHistory"
          options={{ label: 'List History' }}
          list={ListHistoryList}
          create={ListHistoryCreate}
          edit={ListHistoryEdit}
          recordRepresentation="Date"
          icon={ListHistoryIcon}
        />
        <Resource
          name="ExpirationDateReminder"
          options={{ label: 'Expiration Date Reminder' }}
          list={ExpirationDateReminderList}
          create={ExpirationDateReminderCreate}
          edit={ExpirationDateReminderEdit}
          recordRepresentation="Product"
          icon={ExpirationDateReminderIcon}
        />
        <Resource
          name="BudgetTracker"
          options={{ label: 'Budget Tracker' }}
          list={BudgetTrackerList}
          create={BudgetTrackerCreate}
          edit={BudgetTrackerEdit}
          recordRepresentation="id"
          icon={BudgetTrackerIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;