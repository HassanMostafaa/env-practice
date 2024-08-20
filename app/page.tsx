// import { HoverableSpace } from "@/src/components/hoverable-space/HoverableSpace";
import { SimpleCard } from "@/src/components/simple-card/SimpleCard";
import { getcurrentUser } from "./actions";
import { Container } from "@/src/base-components/container";

export default async function Home() {
  const currentUser = await getcurrentUser();

  return (
    <main style={{ minHeight: "100vh" }}>
      <Container>
        <SimpleCard title={currentUser.name} text={currentUser.email} />
      </Container>
      {/* <HoverableSpace /> hoverable needs to be called in a client comp */}
      {/* 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          flexWrap: "wrap",
          alignItems: "stretch",
          padding: 15,
        }}
      >
        <SimpleCard
          title="GLUCOPHAGE"
          text={`Each film copated tablet contains Metformin hydrochiorde 500mg eq. to metformin 390mg`}
        />
        <SimpleCard
          title="GLUCOPHAGE"
          text="Each film copated tablet contains Metformin hydrochiorde 500mg eq. to metformin 390mg"
        />
        <SimpleCard
          title="GLUCOPHAGE"
          text="Each film copated tablet contains Metformin hydrochiorde 500mg eq. to metformin 390mg"
        />
      </div> */}
    </main>
  );
}
