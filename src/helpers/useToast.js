import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const showErrorMessage = (errorMessage) =>{
    toast.error(errorMessage, {        
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
       });
     ;
   }

export  const showSuccessMessage = (successMessage) =>{
       toast.success(successMessage, {        
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        ;
   }