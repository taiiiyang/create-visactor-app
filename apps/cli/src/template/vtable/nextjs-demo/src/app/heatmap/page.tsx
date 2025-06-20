import Container from "@/components/container";
import { HeatMap } from "@/components/table-blocks";
import Metrics from "@/components/table-blocks/components/metrics";

export default function HeatMapPage() {
  return (
    <div className="border-border laptop:divide-x laptop:divide-y-0 laptop:divide-border grid grid-cols-1 divide-y border-b h-full">
      <Metrics></Metrics>
      <Container className="laptop:col-span-2 py-4">
        <HeatMap />
      </Container>
    </div>
  );
}
