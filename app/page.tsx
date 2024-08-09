"use client";
import { HoverableSpace } from "@/src/components/hoverable-space/HoverableSpace";
import { SimpleCard } from "@/src/components/simple-card/SimpleCard";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HoverableSpace>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
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
        </div>
      </HoverableSpace>
    </main>
  );
}
