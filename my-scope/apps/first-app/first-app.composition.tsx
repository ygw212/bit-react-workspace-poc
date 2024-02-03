import { MemoryRouter } from 'react-router-dom';
import { FirstApp } from "./first-app.js";
import { SecondApp } from '@my-org/my-scope.apps.second-app'

export const FirstAppBasic = () => {
  return (
    <MemoryRouter>
      <FirstApp />
      <SecondApp/>
    </MemoryRouter>
  );
}