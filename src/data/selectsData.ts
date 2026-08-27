import type { Option } from "../interface/optionType";

const statusArr: Option[] = [
  {
    label: "Alive",
    value: "alive",
  },
  {
    label: "Dead",
    value: "dead",
  },
  {
    label: "Unknown",
    value: "unknown",
  },
];

const speciesArr: Option[] = [
  {
    label: "Human",
    value: "human",
  },
  {
    label: "Alien",
    value: "alien",
  },
  {
    label: "Humanoid",
    value: "humanoid",
  },
  {
    label: "Poopybutthole",
    value: "poopybutthole",
  },
  {
    label: "Mythological Creature",
    value: "mythological",
  },
  {
    label: "Animal",
    value: "animal",
  },
  {
    label: "Robot",
    value: "robot",
  },
  {
    label: "Cronenberg",
    value: "cronenberg",
  },
  {
    label: "Disease",
    value: "disease",
  },
  {
    label: "Planet",
    value: "planet",
  },
];

const typesArr: Option[] = [
  {
    label: "Parasite",
    value: "parasite",
  },
  {
    label: "Superhuman",
    value: "superhuman",
  },
  {
    label: "Genetic experiment",
    value: "genetic",
  },
  {
    label: "Clone",
    value: "clone",
  },
  {
    label: "Vampire",
    value: "vampire",
  },
];

const genderArr: Option[] = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Genderless",
    value: "genderless",
  },
  {
    label: "Unknown",
    value: "unknown",
  },
];

export { genderArr, speciesArr, statusArr, typesArr };
