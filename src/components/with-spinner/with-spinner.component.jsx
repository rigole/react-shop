import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

export const WithSpinner = WrappedComponent => {
 const Spinner = ({ isLoading, ...othersProps }) => {
     return isLoading ? (
         <SpinnerOverlay>
             <SpinnerContainer />
         </SpinnerOverlay>
     ) : (
         <WrappedComponent {...othersProps} />
     )
 }
 return Spinner

}
export default WithSpinner;