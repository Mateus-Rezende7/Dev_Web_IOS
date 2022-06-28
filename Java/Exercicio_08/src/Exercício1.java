import java.util.Scanner;
public class Exercício1 {
  public static void main(String[]args){
      Scanner entrada = new Scanner(System.in);

      int maior, menor, media=0;
      int[] numeros = new int[5];

      int notas = numeros.length;

      for(int i = 0; 1 < notas; i++){
          System.out.println("Digite suas notas");
          numeros[1] = entrada.nextInt();
      }

      maior = numeros[0];

      for(int i = 0; i < notas; i++){
          if (numeros[i] > maior){
              maior = numeros[i];
          }
      }
      menor = numeros[0];
      System.out.println("O maior número é: "+ maior);
      entrada.close();
  }


}