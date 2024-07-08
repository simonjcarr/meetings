import { defaultOverrides } from "next/dist/server/require-hook";
import Link from "next/link";
import WidthLayout from "./components/WidthLayout";

export default function HomePage() {
  return (
    <WidthLayout>
      <div>Home page</div>
    </WidthLayout>
  );
}
