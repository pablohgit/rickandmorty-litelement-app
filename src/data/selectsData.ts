import type { optionType } from "../interface/optionType";

const statusArr: optionType[] = [
  { id: "alive", value: "Alive" },
  { id: "dead", value: "Dead" },
  { id: "unkown", value: "Unknow" },
];

const speciesArr: optionType[] = [
  { id: "human", value: "Human" },
  { id: "alien", value: "Alien" },
  { id: "robot", value: "Robot" },
];

const typesArr: optionType[] = [
  { id: "parasite", value: "Parasite" },
  { id: "superhuman", value: "superhuman" },
  { id: "genetic_experiment", value: "Genetic experiment" },
];

const genderArr: optionType[] = [
  { id: "male", value: "Male" },
  { id: "female", value: "Female" },
  { id: "genderless", value: "Genderless" },
  { id: "unknow", value: "Uknown" },
];

export { genderArr, speciesArr, statusArr, typesArr };
