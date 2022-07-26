class JustePrix {
  public compare(price: number, result: number, nbLife: number = 10): string {
    if(nbLife != 0){
        if (price > result && nbLife != 0) {
            nbLife--;
            return "C'est plus !";
          } else if (price < result && nbLife != 0) {
            nbLife--;
            return "C'est moins ! ";
          } else {
            return "C'est gagné ! ";
          }
    }else{
        return "C'est perdu ! "
    }
    
  }
}

export default JustePrix;
