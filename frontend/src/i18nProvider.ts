//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';
import grOriginal from 'ra-language-greek';

const enResources = {
  resources: {
    EssentialItemCategory: {
      name: 'Essential Item Category',
      fields: {
        Name: 'Name',
        Description: 'Description',
        Image: 'Image',
        id: 'id',
      },
    },
    ShoppingList: {
      name: 'Shopping List',
      fields: {
        Name: 'Name',
        Items: 'Items',
        Quantity: 'Quantity',
        Notes: 'Notes',
        id: 'id',
      },
    },
    PriceComparison: {
      name: 'Price Comparison',
      fields: {
        ProductName: 'Product Name',
        Brand: 'Brand',
        Quantity: 'Quantity',
        Price: 'Price',
        Quality: 'Quality',
        UserRating: 'User Rating',
        UserExperience: 'User Experience',
        id: 'id',
      },
    },
    DietaryPreferences: {
      name: 'Dietary Preferences',
      fields: {
        Name: 'Name',
        Description: 'Description',
        RecommendedProducts: 'Recommended Products',
        Restrictions: 'Restrictions',
        id: 'id',
      },
    },
    GroceryStore: {
      name: 'Grocery Store',
      fields: {
        Name: 'Name',
        Location: 'Location',
        ContactInformation: 'Contact Information',
        OpeningHours: 'Opening Hours',
        Products: 'Products',
        Ratings: 'Ratings',
        id: 'id',
      },
    },
    UserAccount: {
      name: 'User Account',
      fields: {
        Username: 'Username',
        Email: 'Email',
        Password: 'Password',
        Name: 'Name',
        ProfilePicture: 'Profile Picture',
        ShoppingLists: 'Shopping Lists',
        DietaryPreferences: 'Dietary Preferences',
        History: 'History',
        Budget: 'Budget',
        Theme: 'Theme',
        id: 'id',
      },
    },
    ListHistory: {
      name: 'List History',
      fields: {
        ShoppingList: 'Shopping List',
        Date: 'Date',
        ProductsAdded: 'Products Added',
        ProductsRemoved: 'Products Removed',
        Notes: 'Notes',
        id: 'id',
      },
    },
    ExpirationDateReminder: {
      name: 'Expiration Date Reminder',
      fields: {
        Product: 'Product',
        ExpirationDate: 'Expiration Date',
        ReminderDate: 'Reminder Date',
        User: 'User',
        id: 'id',
      },
    },
    BudgetTracker: {
      name: 'Budget Tracker',
      fields: {
        User: 'User',
        BudgetAmount: 'Budget Amount',
        CurrentSpending: 'Current Spending',
        RemainingBudget: 'Remaining Budget',
        RecommendedProducts: 'Recommended Products',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    EssentialItemCategory: {
      name: 'Essential Item Category (fr)',
      fields: {
        Name: 'Name (fr)',
        Description: 'Description (fr)',
        Image: 'Image (fr)',
        id: 'id',
      },
    },
    ShoppingList: {
      name: 'Shopping List (fr)',
      fields: {
        Name: 'Name (fr)',
        Items: 'Items (fr)',
        Quantity: 'Quantity (fr)',
        Notes: 'Notes (fr)',
        id: 'id',
      },
    },
    PriceComparison: {
      name: 'Price Comparison (fr)',
      fields: {
        ProductName: 'Product Name (fr)',
        Brand: 'Brand (fr)',
        Quantity: 'Quantity (fr)',
        Price: 'Price (fr)',
        Quality: 'Quality (fr)',
        UserRating: 'User Rating (fr)',
        UserExperience: 'User Experience (fr)',
        id: 'id',
      },
    },
    DietaryPreferences: {
      name: 'Dietary Preferences (fr)',
      fields: {
        Name: 'Name (fr)',
        Description: 'Description (fr)',
        RecommendedProducts: 'Recommended Products (fr)',
        Restrictions: 'Restrictions (fr)',
        id: 'id',
      },
    },
    GroceryStore: {
      name: 'Grocery Store (fr)',
      fields: {
        Name: 'Name (fr)',
        Location: 'Location (fr)',
        ContactInformation: 'Contact Information (fr)',
        OpeningHours: 'Opening Hours (fr)',
        Products: 'Products (fr)',
        Ratings: 'Ratings (fr)',
        id: 'id',
      },
    },
    UserAccount: {
      name: 'User Account (fr)',
      fields: {
        Username: 'Username (fr)',
        Email: 'Email (fr)',
        Password: 'Password (fr)',
        Name: 'Name (fr)',
        ProfilePicture: 'Profile Picture (fr)',
        ShoppingLists: 'Shopping Lists (fr)',
        DietaryPreferences: 'Dietary Preferences (fr)',
        History: 'History (fr)',
        Budget: 'Budget (fr)',
        Theme: 'Theme (fr)',
        id: 'id',
      },
    },
    ListHistory: {
      name: 'List History (fr)',
      fields: {
        ShoppingList: 'Shopping List (fr)',
        Date: 'Date (fr)',
        ProductsAdded: 'Products Added (fr)',
        ProductsRemoved: 'Products Removed (fr)',
        Notes: 'Notes (fr)',
        id: 'id',
      },
    },
    ExpirationDateReminder: {
      name: 'Expiration Date Reminder (fr)',
      fields: {
        Product: 'Product (fr)',
        ExpirationDate: 'Expiration Date (fr)',
        ReminderDate: 'Reminder Date (fr)',
        User: 'User (fr)',
        id: 'id',
      },
    },
    BudgetTracker: {
      name: 'Budget Tracker (fr)',
      fields: {
        User: 'User (fr)',
        BudgetAmount: 'Budget Amount (fr)',
        CurrentSpending: 'Current Spending (fr)',
        RemainingBudget: 'Remaining Budget (fr)',
        RecommendedProducts: 'Recommended Products (fr)',
        id: 'id',
      },
    },
  },
};
const grResources = {
  resources: {
    EssentialItemCategory: {
      name: 'Essential Item Category (gr)',
      fields: {
        Name: 'Name (gr)',
        Description: 'Description (gr)',
        Image: 'Image (gr)',
        id: 'id',
      },
    },
    ShoppingList: {
      name: 'Shopping List (gr)',
      fields: {
        Name: 'Name (gr)',
        Items: 'Items (gr)',
        Quantity: 'Quantity (gr)',
        Notes: 'Notes (gr)',
        id: 'id',
      },
    },
    PriceComparison: {
      name: 'Price Comparison (gr)',
      fields: {
        ProductName: 'Product Name (gr)',
        Brand: 'Brand (gr)',
        Quantity: 'Quantity (gr)',
        Price: 'Price (gr)',
        Quality: 'Quality (gr)',
        UserRating: 'User Rating (gr)',
        UserExperience: 'User Experience (gr)',
        id: 'id',
      },
    },
    DietaryPreferences: {
      name: 'Dietary Preferences (gr)',
      fields: {
        Name: 'Name (gr)',
        Description: 'Description (gr)',
        RecommendedProducts: 'Recommended Products (gr)',
        Restrictions: 'Restrictions (gr)',
        id: 'id',
      },
    },
    GroceryStore: {
      name: 'Grocery Store (gr)',
      fields: {
        Name: 'Name (gr)',
        Location: 'Location (gr)',
        ContactInformation: 'Contact Information (gr)',
        OpeningHours: 'Opening Hours (gr)',
        Products: 'Products (gr)',
        Ratings: 'Ratings (gr)',
        id: 'id',
      },
    },
    UserAccount: {
      name: 'User Account (gr)',
      fields: {
        Username: 'Username (gr)',
        Email: 'Email (gr)',
        Password: 'Password (gr)',
        Name: 'Name (gr)',
        ProfilePicture: 'Profile Picture (gr)',
        ShoppingLists: 'Shopping Lists (gr)',
        DietaryPreferences: 'Dietary Preferences (gr)',
        History: 'History (gr)',
        Budget: 'Budget (gr)',
        Theme: 'Theme (gr)',
        id: 'id',
      },
    },
    ListHistory: {
      name: 'List History (gr)',
      fields: {
        ShoppingList: 'Shopping List (gr)',
        Date: 'Date (gr)',
        ProductsAdded: 'Products Added (gr)',
        ProductsRemoved: 'Products Removed (gr)',
        Notes: 'Notes (gr)',
        id: 'id',
      },
    },
    ExpirationDateReminder: {
      name: 'Expiration Date Reminder (gr)',
      fields: {
        Product: 'Product (gr)',
        ExpirationDate: 'Expiration Date (gr)',
        ReminderDate: 'Reminder Date (gr)',
        User: 'User (gr)',
        id: 'id',
      },
    },
    BudgetTracker: {
      name: 'Budget Tracker (gr)',
      fields: {
        User: 'User (gr)',
        BudgetAmount: 'Budget Amount (gr)',
        CurrentSpending: 'Current Spending (gr)',
        RemainingBudget: 'Remaining Budget (gr)',
        RecommendedProducts: 'Recommended Products (gr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);
const gr = mergeTranslations(grOriginal, grResources);

const translations = { en, fr, gr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
    { locale: 'gr', name: 'Ελληνικά' },
  ],
);
