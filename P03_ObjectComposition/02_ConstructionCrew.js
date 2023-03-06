function solve(person) {
  if (person.dizziness) {
    person.levelOfHydrated += person.weight * 0.1 * person.experience;
    person.dizziness = false;
  }
  return {
    weight: person.weight,
    experience: person.experience,
    levelOfHydrated: person.levelOfHydrated,
    dizziness: person.dizziness,
  };
}
console.log(
  solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })
);
console.log(
  solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  )
);
