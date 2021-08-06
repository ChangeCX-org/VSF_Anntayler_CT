import { MyAccountSideMenu } from "./components/side-menu";

export class MyAccountPage {

  get sideMenu(): MyAccountSideMenu {
    return new MyAccountSideMenu();
  }

}
