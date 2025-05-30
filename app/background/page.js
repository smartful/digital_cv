import { Fragment } from "react";
import Background from "@/components/Background/Background";
import education from "@/data/education.json";

export default function Page() {
  return (
    <Fragment>
      <h1>Formation</h1>

      {education.map((item) => (
          <div key={`${item.institution}-${item.period}`}>
            <Background {...item}/>
          </div>
      ))}
    </Fragment>
  )
}