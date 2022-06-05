import { Card, CardBody, CardFooter, CardHeader, RangeInput, Heading } from "grommet";
import { useState } from "react";
import { Ngens } from "../tools/formulas";

export default function CalculatorGUI() {
  const [N0value, setValue] = useState(2);
  const [N, setN] = useState(2);
  const [T, setT] = useState(Ngens(N,N0value));
    // let dash = [];
    // for (let index = 0; index < 10; index++) {
    //     dash.push({values: [index,Ngens(index,(N0value/(index+1))], label:'index']})
        
    // }

  const element = (
    <Card width={"medium"} height={"medium"}
      className="Calculator"
      pad={"large"}
      border={{ color: "neutral-3", size: "large" }}
    >
      <CardHeader>
        Neccesary generations for <h1>{N}</h1> cows
      </CardHeader>
      <CardBody height={"full"} pad={"medium"}>
      <Heading margin="none" color={'dark-1'} width={true} size={"xlarge"}>{T}</Heading>
      </CardBody>
      <CardFooter>
        <RangeInput color={"accent-4"} step={1}
          min={3}
          max={1000}
          value={N}
          onChange={(event) => {
              setN(event.target.value);
              setT(Ngens(N,N0value));
          }}
        />
      </CardFooter>
    </Card>
  );
  return element;
}
