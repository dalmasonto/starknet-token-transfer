import "@mantine/core/styles.css";
import MainProvider from "./providers/MainProvider";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <MainProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </MainProvider>
  )
}
