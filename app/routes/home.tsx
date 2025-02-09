import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-red-600">some heading</h1>
      <Button variant={"destructive"} onClick={() => alert("Yo shad")} className="animate-fade-in">
        click me
      </Button>

      <Button variant={"outline"} onClick={() => alert("Yo shad")} className="animate-slide-left">
        click me
      </Button>
    </div>
  );
}
