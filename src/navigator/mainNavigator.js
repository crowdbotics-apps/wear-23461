import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20186793Navigator from '../features/BlankScreen20186793/navigator';
import BlankScreen19186792Navigator from '../features/BlankScreen19186792/navigator';
import Settings186685Navigator from '../features/Settings186685/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20186793: { screen: BlankScreen20186793Navigator },
BlankScreen19186792: { screen: BlankScreen19186792Navigator },
Settings186685: { screen: Settings186685Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
