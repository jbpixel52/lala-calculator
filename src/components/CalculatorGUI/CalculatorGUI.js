import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Markdown,
  Text,
  TextInput,
} from "grommet";
import { useState, useEffect} from "react";
import { Ngens } from "../tools/formulas";

export default function CalculatorGUI() {
  const [N0value, setN0Value] = useState(2);
  const [N, setN] = useState(2);
  const [T, setT] = useState(0);
  // function refreshT() {
  //   setT(Ngens(N,N0value));
  //   return T;
  // }


  useEffect(()=>{
    console.log('used effect to UPDATE T value');
    setTimeout(()=>{
      setT(Ngens(N,N0value));
    },200)
  })

  const element = (
    <Card
      width={"medium"}
      height={"medium"}
      className="Calculator"
      pad={"small"}
      border={{ color: "neutral-3", size: "large" }}
    >
      <CardHeader className="CardHeader" direction="row">
        <Text>With</Text>
        <TextInput
          placeholder={"Starting amount of [default = 2]"}
          onChange={(event) => {
            console.log('value in event is N0 is ' + event.target.value);
            setN0Value(event.target.value);
            setT(Ngens(N, N0value));
          }}
        />
      </CardHeader>
      <CardBody height={"full"} pad={"xsmall"} direction="column">
        <CardHeader className="CardHeader" direction="row">
          <Text>To</Text>
          <TextInput
            placeholder=" reach this amount of cows"
            onChange={(event) => {
              console.log('value in event is N is ' + event.target.value);
              setN(event.target.value);
              setT(Ngens(N,N0value));
            }}
          />
        </CardHeader>

        <Heading
          animation={{
            type: "jiggle",
            delay: 1,
            duration: 1000,
            size: "small",
          }}
          margin="none"
          color={"dark-1"}
          height="full"
          width={true}
          size={"xlarge"}
        >
          {T}
        </Heading>
      </CardBody>
      <CardFooter align="center" flex={true}>
<Text>With <b>{N0value}</b> initial cows, to reach <b>{N}</b> cows. It takes <b>{T}</b> generations breeded</Text>
      </CardFooter>
    </Card>
  );
  return element;
}
