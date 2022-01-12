import toastr from "toastr";
import 'toastr/build/toastr.min.css';

toastr.options = {
    positionClass : 'toast-top-right',
    hideDuration: 300,
    timeOut: 6000,
    newestOnTop: false,
    fontSize: "50px",
  }
  toastr.options.newestOnTop = false;
  toastr.clear()

class warnService {
    successWarn(msg) {
        toastr.success(msg);
    }

    failWarn(err) {
        toastr.error(err);
    }
} 

export default new warnService();