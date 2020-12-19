import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen19187006Navigator from '../features/CopyOfBlankScreen19187006/navigator';
import BlankScreen20186793Navigator from '../features/BlankScreen20186793/navigator';
import Settings186685Navigator from '../features/Settings186685/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen19187006: { screen: CopyOfBlankScreen19187006Navigator },
BlankScreen20186793: { screen: BlankScreen20186793Navigator },
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
