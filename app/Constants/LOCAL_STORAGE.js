import Immutable from "immutable";
import ENVIRONMENTS from "../../Frecl/Constants/ENVIRONMENTS";

export default Immutable.Map({
  // This is a white list
  [ENVIRONMENTS.get('PRODUCTION')]: Immutable.List([
    Immutable.List(["FormState", "fields"])
  ]),
  // This is a black list
  [ENVIRONMENTS.get('DEVELOPMENT')]: Immutable.List([
    Immutable.List(["ListViewState"])
  ])
});
