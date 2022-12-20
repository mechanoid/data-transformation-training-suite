import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

Deno.test("build sum of numbers in a list", () => {
  const summarize = (arr) => {
    // implement
  }

  assertEquals(summarize([ 7, 14, 25, 199, 812 ]), 1057);
});

Deno.test("count a given letter in a sentence", () => {
  const countLetter = (sentence, letter) => {
    // implement:
    // - count upper and lower case letters
    // - without use of .length (count with a reducer)
    // - use split
    // - use filter
  }

  assertEquals(
    countLetter(
      "loreHodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...",
      "o"
    ), 93);
});

Deno.test("flatten a map", () => {
  const data = [[1,2], [3,4], [5, 6]]

  const flatten = (arr) => {
    // implement without .flatMap
  }

  assertEquals(flatten(data), [1, 2, 3, 4, 5, 6]);
});

Deno.test("get indexes of elements", () => {
  const data = ["a", "b", "c", "d"]

  const indexesForElements = (arr) => {
    // implement
  }

  assertEquals(indexesForElements(data), {
    a: 0,
    b: 1,
    c: 2,
    d: 3
  });
});

Deno.test("format an address for a given objectId", () => {
  const data = {
    addresses: [
      { objectId: 4, street: "Schornsteinstr.", streetNumber: "11a", plz: "45145" },
      { objectId: 5, street: "Im Schwanenbusch", streetNumber: "25", plz: "45145" },
      { objectId: 9, street: "Unterm Sternenhimmel", streetNumber: "60", plz: "10115" },
    ],
    cities: [
      { name: "Essen", plzs: ["45145", "45147"]},
      { name: "Berlin", plzs: ["10115"]}
    ]
  }

  const formattedAddress = (objectId) => {
    // implement using a reduce statement
  }

  assertEquals(formattedAddress(data), "Adresse: Im Schwanenbusch 25, 45145 Essen");
});



Deno.test("group data nested by 2 properties", () => {
  const data = [
    { customer: "Nike", project: "sneaker", hours: 509 },
    { customer: "Nike", project: "sportswear", hours: 2012 },
    { customer: "Puma", project: "hats", hours: 30 },
    { customer: "Puma", project: "sneaker", hours: 233 },
  ]

  const hoursByCustomerAndProject = (reports) => {
    // implement
  }

  assertEquals(hoursByCustomerAndProject(data), {
    Nike: {
      sneaker: 509,
      sportswear: 2012
    },
    Puma: {
      hats: 30,
      sneaker: 233
    }
  });
});
