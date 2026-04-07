import {FadeIn} from "@/app/components/scrollanimate";

export default function Scrolltest() {
  return (
    <div className="p-10 space-y-20">
      <FadeIn>
        <div className="h-40 bg-blue-200">Section 1</div>
      </FadeIn>

      <FadeIn>
        <div className="h-40 bg-red-200">Section 2</div>
      </FadeIn>
      <FadeIn>
        <div className="h-40 bg-blue-200">Section 3</div>
      </FadeIn>
      <FadeIn>
        <div className="h-40 bg-yellow-200">Section 4</div>
      </FadeIn>
      <FadeIn>
        <div className="h-40 bg-gray-200">Section 5</div>
      </FadeIn>
      <FadeIn>
        <div className="h-40 bg-purple-200">Section 6</div>
      </FadeIn>
      <FadeIn>
        <div className="h-40 bg-slate-200">Section 8</div>
      </FadeIn>
    </div>
  );
}