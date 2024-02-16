import dayjs from "dayjs";
import Navigator from "./src/navigator";
import 'dayjs/locale/tr'
export default function App() {

  dayjs.locale('tr')
  return (
    <Navigator/>
  );
}

