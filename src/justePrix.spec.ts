import JustePrix from "./justePrix";

let initialPrice = 18795;
let justePrix = new JustePrix();

describe("On verifie si le prix est au-dessus de celui, saisi par l'utilisateur ", () => {
  test("On teste si le chiffre est inférieur à la valeur de base", () => {
    expect(justePrix.compare(initialPrice, 23000, 4)).toContain("C'est moins !");
    expect(justePrix.compare(initialPrice, 20000, 3)).toContain("C'est moins !");
    expect(justePrix.compare(initialPrice, 19500, 2)).toContain("C'est moins !");
  });
});

describe("On verifie si le prix est en dessous de celui, saisi par l'utilisateur ", () => {
  test("On teste si le chiffre est supérieur à la valeur de base", () => {
    expect(justePrix.compare(initialPrice, 13000, 5)).toContain("C'est plus !");
    expect(justePrix.compare(initialPrice, 12000, 4)).toContain("C'est plus !");
    expect(justePrix.compare(initialPrice, 11000, 3)).toContain("C'est plus !");
  });
});

describe("On verifie si le prix est égal à celui, saisi par l'utilisateur ", () => {
    test("On teste si le chiffre est égal à la valeur de base", () => {
      expect(justePrix.compare(initialPrice, 18795, 1)).toContain("C'est gagné !");
    });
  });

  describe("On verifie si le prix est égal à celui, saisi par l'utilisateur ", () => {
    test("On teste si le chiffre est égal à la valeur de base", () => {
      expect(justePrix.compare(initialPrice, 18795, 1)).toContain("C'est gagné !");
    });
  });

  describe("On verifie si le joueur à perdu", () => {
    test("On teste si le nombre de vies du joueur est égal à 0", () => {
      expect(justePrix.compare(initialPrice, 17000, 0)).toContain("C'est perdu !");
    });
  });
