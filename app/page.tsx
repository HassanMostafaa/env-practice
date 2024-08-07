import { SimpleCard } from "@/src/components/simple-card/SimpleCard";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* <h1>Components Reps</h1> */}
      <div style={{ display: "flex" }}>
        <SimpleCard
          title="GLUCOPHAGE"
          text="Each film copated tablet contains Metformin hydrochiorde 500mg eq. to metformin 390mg"
        />
        <SimpleCard
          title="GLUCOPHAGE"
          text="Each film copated tablet contains Metformin hydrochiorde 500mg eq. to metformin 390mg"
        />
        <SimpleCard
          title="GLUCOPHAGE"
          text="Each film copated tablet contains Metformin hydrochiorde 500mg eq. to metformin 390mg"
        />
      </div>
    </main>
  );
}
