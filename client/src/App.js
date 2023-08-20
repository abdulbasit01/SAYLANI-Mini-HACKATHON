import { Route, Routes } from "react-router-dom";
import routes from "./Routes/routes";
import MainLayout from "./Layout/mainLayout";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, id) => {
          console.log(route);
          return (
            <Route key={route + id} path={route.path} element={<MainLayout>{route.component}</MainLayout>} />
          )
        })}
      </Routes>
    </>
  );
}

export default App;
