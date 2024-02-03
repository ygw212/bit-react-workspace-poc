import { MemoryRouter } from 'react-router-dom';
import { SecondApp } from "./second-app.js";
    
export const SecondAppBasic = () => {
  return (
    <MemoryRouter>
      <SecondApp />
    </MemoryRouter>
  );
}