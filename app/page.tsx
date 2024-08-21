import { getcurrentUser } from "./actions";
import { Container } from "@/src/base-components/container";
import { LayoutComp } from "@/src/components/layout-comp";
import { Home } from "@/src/pages/home";

export default async function NextjsPage() {
  const currentUser = await getcurrentUser();

  return (
    <LayoutComp>
      <Container>
        <Home currentUser={currentUser} />
      </Container>
    </LayoutComp>
  );
}
